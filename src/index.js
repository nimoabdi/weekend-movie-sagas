import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovies)
    
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchDetails(action) {
    const details = yield axios.get(`/api/movie${action.payload}`);
    console.log('in fetch details', details.data);

    yield put ({type: 'FETCH_DETAILS', payload: details.data})
}

function* fetchGenres(action) {
    try{
        const genres = yield axios.get(`api/genre/${action.payload}`)
   
        yield put({ type:'SET_GENRES', payload: genres.data })
        console.log(genres.data)
    } catch{
        console.log('error in fetchGenres');
    }
}

function* addMovies(action) {
    try{
        console.log(action.payload)

        console.log('this is the post payload:',action.payload);
        const response = yield axios({
          method: 'POST',
          url: `/api/movie`,
          data: action.payload
        })

        yield put({ type: 'SET_MOVIES', payload: newMovie.data })
        console.log(response)
    } catch{
        console.log('error in CreateMovie');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Reducer for details page

const movieDetails = (state = [], action ) => {
    switch (action.type) {
        case 'FETCH_DETAILS' :
            return action.payload;
            default:
                return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
