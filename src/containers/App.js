
/*		NAPOMENA 1:	 MALO JE SREDJEN KOD F-JE 'render()' !!!!!!`	`*/


/*		NAPOMENA 2:	 NA KRAJU U 'cmd' ZADAMO KOMANDU:  'npm run build' !!!

					 Zadavanjem ove komande u folderu projekta 'robofriends'
					 kreira se folder 'build'. U folderu 'build' se nalazi "optimizovana
					 verzija" naseg projekta i upravo tu verziju prosledjujemo
					 gde god treba da bude dostupan nas projekat na internetu.
					 DAKLE, SVE STO NAM TREBA DA BISMO NEGDE PROSLEDILI NAS PROJEKAT
					 NALAZI SE U FOLDERU 'build' !!!


								NIJE MI USPELA OVA KOMANDA !!!
*/		



/*
	REACT comes with a few other things inside of 'Component' (React.Component)
 		  that we can use and they're called 'LIFECYCLE METHODS' !!!


		Ukucamo u polje za pretragu:  'lifecycle methods react',
		zatim kliknemo gde pise 'React.Component' i
		nadjemo 'The Component Lifecycle' !!!

		https://legacy.reactjs.org/docs/react-component.html
		https://legacy.reactjs.org/tutorial/tutorial.html



	https://legacy.reactjs.org/docs/state-and-lifecycle.html 			-		Converting a Function to a Class	

				https://react.dev/learn

	https://codesandbox.io/p/sandbox/gykq5v?file=%2Fsrc%2FApp.js



		  https://transform.tools/html-to-jsx


	https://babeljs.io/			-		Babel is a JavaScript compiler.		
										Da bi se pokrenuo i koristio treba kliknuti na 'Try it out' !!!	
*/



/*
		Ukucamo u polje za pretragu:  'jsonplaceholder',
		a zatim prelistamo do 'Resources' i kliknemo na '/users' !!!

		https://jsonplaceholder.typicode.com/users
*/




import React, { Component } from 'react';

import CardList from '../components/CardList.js';         /*    'CardList'  is  a parent of 'Card' !     */


//	  import { robots } from './robots.js';			-		NE TREBA VISE, jer hocemo vrednosti da ucitamo sa Interneta  !!!

import SearchBox from '../components/SearchBox';

import './App.css';

import Scroll from '../components/Scroll';






/*		"CardList" needs to know what is in the 'SearchBox' so that it can filter out 'robots' accordingly  !!!		 */


		/*
				const state = {
					robots: robots,
					searchFeald: ''
				}
		*/


/*		window.fetch()		-		'fetch()' je metoda objekta 'window'  !		 */




class App extends Component {		 	  /*	  Kako da dodamo 'state'?  U 'React'-u jednostavno uradimo 'constructor()'  !!!	    */
	
	constructor() {

		super()							  /*	 'super' calls the 'constructor() of the 'Component'  !!!	 */

		this.state = {					  /*	  PAZNJA:   'this' is not allowed before super()	!!!		 */
			robots: [],				  	  /*	  In REAL LIFE this 'robots' is an 'EMPTY ARRAY' !!!		 */
			searchField: ''									
		}

		//	 console.log('constructor  ->  ', this.state.robots);
	}


	componentDidMount() {								/*		PAZNJA:   ... because this is part of react, we are not using 'arrow functions' here !!!	  */

		fetch('https://jsonplaceholder.typicode.com/users')				/*		This is going to receive a response ... !!!		 */

			.then(response => response.json())						  		  /*	 ... convert the response... !!!!	  */

			.then(users => this.setState({robots: users}));					  /*	   .then(users => {});		*/

		//	 this.setState({robots: robots});								  /*	  PAZNJA:   Linija 139  !!!	     */

		//	 console.log('componentDidMount  ->  ', this.state.robots);
	}					



	onSearchChange = (event) => {						/*		PAZNJA:   Ako ovu f-ju definisemo standardno, tad NE RADI !!!  DEFINISIMO je kao 'ARROW' f-ju !!!!!!	 */
		
		this.setState({searchField: event.target.value});				/*		OOO V OOO 		*/


		/*
				const filteredRobots = this.state.robots.filter(robots => {
					return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
				})
		*/

		//		console.log(event.target.value);				/*   	Radilo je i samo sa 'event'  !!!	  */

		//		console.log(filteredRobots);
	}



	render() {

		const { robots,searchField } = this.state;			/*	  Dodali ovu liniju kako bismo uklonili 'this.state' svugde ispred 'robots' i 'searchField' !	 */
		const filteredRobots = robots.filter(robot => {								/*	  Promenili da nije 'robots' nego 'robot' !	   */
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		//	 console.log('render  ->  ', this.state.robots);

		return !robots.length ?				/*	  robots.length === 0    ILI   !robots.length	  */
			<h1> Loading </h1> :
			(
				<div className='tc'>
					<h1 className='f1'> RoboFriends </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
	}
}



export default App;




/*		VERZIJA F-je 'render()' iz prethodnog videa, a nalazi se u folder 'robofriends    VIII    223' !!!	


		render() {
			
			const filteredRobots = this.state.robots.filter(robots => {
				return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			})

			//	 console.log('render  ->  ', this.state.robots);

			if (this.state.robots.length === 0) {
				return <h1> Loading </h1>
			} else {
				return (
					<div className='tc'>
						<h1 className='f1'> RoboFriends </h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
					</div>
				);
			}

		}

*/



/*
		We didn't pass any 'props' to 'Scroll', but automatically 
		every single component in React has this property, 'children'. 
		So using this 'props.children', we can create Components that wrap other Components !!!!!!
*/



/*

	componentDidMount() {								-		PAZNJA:   ... because this is part of react, we are not using 'arrow functions' here !!!	  
		
		this.setState({robots: robots});				-		PAZNJA:   Na  69. liniji vidimo da je niz 'robots' prazan. No, ako ovde stavimo: 
																					'this.setState({robots: robots});'
																		  tad sve radi odlicno ! To je zahvaljujuci redosledu poziva metoda:
																		  component(), componentWillMount(), render() i componentDidMount() !!!

																		  			https://legacy.reactjs.org/docs/react-component.html
														
	}

*/



/*		
		https://tachyons.io/docs/table-of-styles/
		https://github.com/tachyons-css/tachyons-type-scale

		In Tachyons CSS, .f1 is a class that sets the font size to the largest predefined size in the typography scale  !!!


			.f1 {
				font-size: 3rem;
			}


		https://tachyons.io/docs/typography/scale/


*/




/*

		class App extends Component {		 	  -	      Kako da dodamo 'state'?  U 'React'-u jednostavno uradimo 'constructor()'  !!!	  
			

			constructor() {
				
				super()							  -	     'super' calls the 'constructor() of the 'Component'  !!!	

				this.state = {					  -		  PAZNJA:   'this' is not allowed before super()	!!!		 
					robots: robots,
					searchFeald: ''
				}
			}


			onSearchChange(event) {
				console.log(event.target.value);		-      Radilo je i samo sa 'event'  !!!
			}


			render() {
				return (
					<div className='tc'>
						<h1> RoboFriends </h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<CardList robots={this.state.robots}/>
					</div>
				);
			}

		}


		export default App;

*/





/*

		class App extends Component {		 	  -	    Kako da dodamo 'state'?  U 'React'-u jednostavno uradimo 'constructor()'  !!!	  
			

			constructor() {
				
				super()							  -	   'super' calls the 'constructor() of the 'Component'  !!!	 

				this.state = {					  -		PAZNJA:   'this' is not allowed before super()	!!!		 
					robots: robots,
					searchFeald: ''
				}
			}


			render() {
				return (
					<div className='tc'>
						<h1> RoboFriends </h1>
						<SearchBox />
						<CardList robots={this.state.robots}/>
					</div>
				);
			}

		}


		export default App;

*/





/*

		class App extends Component {
			
			render() {
				return (
					<div className='tc'>
						<h1> RoboFriends </h1>
						<SearchBox />
						<CardList robots={robots}/>
					</div>
				);
			}

		}


		export default App;

/*





/*

		const App = () => {
			return (
				<div className='tc'>
					<h1> RoboFriends </h1>
					<SearchBox />
					<CardList robots={robots}/>
				</div>
			);
		}


		export default App;

*/






/*      <CardList robots={robots}/>           -     'robots'  is equal the 'robots array' !!!
                                                    'CardList' is accepting a 'robots props'  !!! 
*/                                                                



/*
			https://package.elm-lang.org/packages/justgage/tachyons-elm/latest/Tachyons.Classes



	.tc {
		text-align:center
	}

*/	

