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
        <MovieItems />
         <MovieList />
        </Route>
        
        <Route path='/MovieDetails/:id' exact>
        <MovieDetails />
      </Route>  
      
     
      
      
      </Router>
    </div>
  );
}


export default App;
