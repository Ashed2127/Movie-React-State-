import React, {useState, createContext} from 'react';
export const MovieContext = createContext();

export function MovieProvider(props){
	const [movies, setMovies] = useState([
	    {
			name: "ረቡኒ",                                
	      	price: "$20",
	      	id: 204                                    
	      },  
	       {        
			name: "ተፈጣሪ",
	       	price: "$25",                                     
	       	id: 305                               
		   }                                    
	     ]);

	  return (
	  	<MovieContext.Provider value={[movies, setMovies]}>  
	  		{props.children} 
	  	</MovieContext.Provider>
	  ); 
}                                          

 
