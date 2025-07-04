import './App.css';
import MovieList from './MovieList'; 
import Nav from './Nav'; 
import {MovieProvider} from './MovieContext'; 
import AddMovie from './AddMovie';

function App() {
  return (
  <MovieProvider>
    <div className="App">
      <header className="App-header">
      	<Nav />
      	<AddMovie />       	
		<MovieList/> 
       </header> 
       
    </div>
   </MovieProvider> 
  );
}

export default App;
