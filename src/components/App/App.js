import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieItems from '../MovieItems/MovieItems';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path='/movieDetail:id' exact>
        <MovieDetails />
      </Route>  
      <Route >
        <MovieItems />
      </Route>
      
      
      </Router>
    </div>
  );
}


export default App;
