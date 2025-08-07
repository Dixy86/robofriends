
/*       
		NA KRAJU fajla 'index.js' se nalazi jedno   ' U P O Z O R E NJ E '   -   dobro OBRATITI PAZNJU  !!!      


		   return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email} />;       -       FALI  'key=id'   !!!

		                      <CardList robots={robots}/>       -       FALI  'key=id'   !!!	
*/



import React from 'react';

import Card from './Card';



	//		import { robots } from './robots';	

	/*
			const numbers = [4, 9, 16, 25];
			const newArr = numbers.map(Math.sqrt)
	*/



/*		---		---		---		---		---		 */



		const CardList = ({ robots }) => {									//	  CardList = (props)  	   

		    return (

		    	<div>
		    		{
			    		robots.map((item, index) => {						//	  Parametar 'item' je  robot !

							return (
								<Card
									key={index} 						/*	    Videti  ' U P O Z O R E NJ E '   za ovo  'key'   !!!!!!		 */
									id={robots[index].id}
									name={robots[index].name}
									email={robots[index].email} 
								/>
							);
						})
		    		}
		    	</div>
		    );
		}


		export default CardList;



/*		---		---		---		---		---		 */



		
	const CardListOLD = ({ robots }) => {								//	  CardListOLD = (props)  	   

		const CardArray = robots.map((item, index) => {					//	  Parametar 'item' je  robot !

			return (
				<Card
					key={index} 						/*	    Videti  ' U P O Z O R E NJ E '   za ovo  'key'   !!!!!!		 */
					id={robots[index].id}
					name={robots[index].name}
					email={robots[index].email} 
				/>
			);
		})

	    return (
	    	<div>
	    		{CardArray}
	    	</div>
	    );
	}


//	export default CardList;


/*		---		---		---		---		---		 */



/*
		import React from 'react';

		import Card from './Card';

		//		import { robots } from './robots';	



		const CardList = ({ robots }) => {				-		 ILI:     CardList = (props)  	   
			return (
				<div>
		        	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
		            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
		            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
		        </div>
			);
		}


		export default CardList;
*/



/*		
		import { robots } from './robots';		-     Ovo treba ucitati kad se u 'index.js' stavi:  '<CardList />'.
													  Tad f-ja 'CardList' NEMA parametara !!!
													  No, u okviru nje koristimo niz 'robots', koji se nalazi u 'robots.js' !!!

													  Ovo NE treba ucitati kad se u 'index.js' stavi:  '<CardList robots={robots}/>'  !!!	 
  													  Tad f-ji 'CardList' MORAMO staviti parametar, a to moze biti ili 'props' ili '{ robots }'  !!!



		Kad je f-ja 'CardList' bez parameta, a koristimo niz 'robots', 
		tad moramo ucitati niz 'robots' iz 'robots.js':

				import { robots } from './robots';
						

		Ako iskljucimo ucitavanje niza 'robots' iz 'robots.js', 
		a hocemo u f-ji 'CardList' da koristimo niz 'robots',
		TAD u 'index.js' mozemo staviti da f-ja 'CardList' prima niz 'robots':

			'<CardList robots={robots}/> '

		i u tom slucaju OVDE moramo napisati da je parametar f-je 
			   ili 'props'	ili  '{ robots }' !!!

		Sa ovim '{ robots }' smo odradili  RESTRUKTURIRANJE !	
*/






/*
		import React from 'react';

		import Card from './Card';

		import { robots } from './robots';        -       Kad ucitamo 'robots.js' tad f-ja 'CardList' ne mora da ima parametre:
																			'CardList = ()'.
														  U ovom slucaju je u 'index.js' bilo:  '<CardList />'.

		const CardList = () => {
			return (
				<div>
		        	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
		            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
		            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
		        </div>
			);
		}


		export default CardList;
*/

