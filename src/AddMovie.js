import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'; 
	   
export default function AddMovie(){
	const [name, setName] = useState(''); 
	const [price, setPrice] = useState(''); 
	const [movies, setMovies] = useContext(MovieContext); 

	const updateName= (e) =>{
		setName(e.target.value);
	}; 

    const updatePrice= (e) =>{
           setPrice(e.target.value);
       };

    const addMovie = e => {
    	e.preventDefault();
    	setMovies(prevMovies => [
    	...prevMovies, 
    	{name: name, price: price}   
    		]) };
 

    return(
    	<form onSubmit={addMovie}>  
    		<input 
    			type="text" 
    			name="name" 
    			value={name} 
    			onChange={updateName}/>


    	    <input
    	        type="text"
    	        name="name"
    	        value={price}
    	        onChange={updatePrice}/>

    	     <button>Submit</button> 
    	</form>
    )
}
