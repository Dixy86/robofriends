
import React from 'react';


/*
			We are using 'DESTRUCTURING' here !!!

			({...})	   -   Allows us to grab the props object
						   and grab its properties !!!

			'searchField' is actually not used and will be removed in upcoming video !			   
*/




const SearchBox = ({searchField, searchChange}) => {
	return (												/*      Sa 'div' je dobro uvek sve uokviriti, pa tako ne moramo razmisljati da li vracamo vise elemenata !!!	  */
		<div className='pa2'>				
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={searchChange} 
			/>
		</div>	
	);
}



export default SearchBox;





/*

		const SearchBox = () => {
			return (						-       Sa 'div' je dobro uvek sve uokviriti, pa tako ne moramo razmisljati da li vracamo vise elemenata !!!	  
				<div className='pa2'>				
					<input 
						className='pa3 ba b--green bg-lightest-blue'
						type='search'
						placeholder='search robots' 
					/>
				</div>	
			);
		}



		export default SearchBox;

*/






/*
					https://tachyons.io/docs/




.ba {					       -    BORDER,   This class is used to create a simple border !!!			(bt, br, bb, bl)
	border-style:solid;
	border-width:1px}   		
		   							https://www.geeksforgeeks.org/css/tachyons-theming-borders/




.b--green {				      -    This class is used to create a border of green color !
  	border-color: green; 
}				 
				 				   https://www.geeksforgeeks.org/css/tachyons-theming-borders/




.bg-lightest-blue {			    -    This is a CSS class that sets the background color of an element to a very light shade of blue !!!
 	background-color: blue; 
}


*/