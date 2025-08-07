


/*       
		NA KRAJU fajla 'index.js' se nalazi jedno   ' U P O Z O R E NJ E '   -   dobro OBRATITI PAZNJU  !!!      

		   return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email} />;       -       FALI  'key=id'   !!!	
*/




import React from 'react';




/*		♥	   DESTRUKTURIRANJE   -    DRUGI NACIN	   ♥		*/


/*		...	within the parameters you can do destructuring !!!
 		We're destructuring the props right inside of the brackets !!!		-	   This is much cleaner !	
*/



const Card = ({id, name, email}) => {		/*	 const Card = (props) => {		-	  Destruktiranje na Prvi nacin !!!
																					Zamenimo 'props' sa {id, name, email} !!!
												 const {id, name, email} = props;	  -	   Destruktiranje na Prvi nacin !!! 	
											*/
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>		
			<img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
			<div> 
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}




export default Card;



/*
								  DESTRUKTURIRANJE		



 ♥	   DESTRUKTURIRANJE   -    PRVI NACIN	  ♥


const Card = (props) => {
	const {id, name, email} = props;		-	   Destruktiranje na Prvi nacin !!! 	
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>		
			<img src={`https://robohash.org/${id}?200x200`} alt='robots'/>		-	  Sad ne moramo da pisemo  {props.id}   !!!
			<div> 
				<h2> {name} </h2>		-	  Sad ne moramo da pisemo  {props.name}   !!!
				<p> {email} </p>		-	  Sad ne moramo da pisemo  {props.email}   !!!
			</div>
		</div>
	);
}						  					

							https://skolakoda.github.io/


https://skolakoda.github.io/javascript-destrukturiranje#:~:text=Destrukturiranje,vrednosti%20iz%20objekata%20i%20nizova.


DESTRUKTURIRANJE  -  rastavljanje složene strukture na sastavne delove !!!
					 U Javascriptu, pomoću operatora destrukturiranja (...) 
		  			 možemo raspakivati vrednosti iz objekata i nizova.


								const config = {
								  server: 'localhost',
								  port: '8080',
								  timeout: 900,
								}

								const {server, port} = config
								
								console.log(server, port)
*/



/*

const Card = (props) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>		
			<img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
			<div> 
				<h2> {props.name} </h2>
				<p> {props.email} </p>
			</div>
		</div>
	);
}



const Card = () => {
	return (

		<h1> RoboFriends </h1>			Ovde javlja  GRESKU, jer 'JSX' elementi moraju biti uokvireni jednim tagom !!!
										ERROR:  Adjacent JSX elements must be wrapped in an enclosing tag !!!			
		<div>
			<img src='https://robohash.org/test?200x200' alt=''/>
			<div> 
				<h2> Jane Doe </h2>
				<p> jane.doe@gmail.com </p>			-		We want DYNAMIC CARDS  !!!   :)
			</div>
		</div>
	);
}

*/



/*

PROBLEM:	<img src={'https://robohash.org/${props.id}?200x200'} alt='robots'/>	-	 NE RADI  !!!    ???

				If you remember in the ESX section we have 'TEMPLATE STRINGS'
				and because this is a 'template string' we have to WRAP it
				 in a CURLY BRACKET so it's a  JavaScript expression  !!!


RESENJE: 	Trebale su apostrofi nakoseni ulevo !!!		-	 Otvori oci ubuduce i na svaki detaljcic obrati paznju !!!

				  
				  https://dmitripavlutin.com/javascript-template-strings/

			The string interpolation in JavaScript is done by template literals
			(strings wrapped in backticks `) and ${expression} as a placeholder.
*/



/*	   https://robohash.org    -    Ovo je kopirano sa sajta,
									 a '/test' smo mi dodali !!!

		  Sa ovog sajta preuzimamo slike za robote !									 
		  Da bi izbacilo slike robota, dovoljno je da
		bilo sta otkucamo posle 'https://robohash.org/' !

		  Na primer, prvo smo ukucali 'test' i izbacilo
		nam je robota, a mogli smo ukucati bilo sta drugo,
					recimo, 'testtest'.

			Mozemo da stavimo i 'test?200x200' !!!			
*/	




					/*		---		TACHYONS		---		*/


/*							  https://tachyons.io

					~	  What is ... in tachnyons ?     ~



			These classes are used to define the border radius ... ... ...

					


https://tachyons.io/docs/layout/spacing/		-		ZAKON  !!!!!!



pa 	 -   PADDING ALL

ma 	 -   MARGIN ALL	

ba 	 -   BORDER ALL	

bw 	 -   BORDER WIDTH

	...



		tc   -   text center

		.tc  { text-align: center; }


			  	   Base:     t = text-align

			  Modifiers: 	 l = left
			    			 r = right
			    			 c = center
			    			 j = justify


  https://tachyons.io/docs/typography/text-align/





className='bg-light-green'		-		bg - background !





.dib { display: inline-block; }


.dib   -   This class is used to create the element in inline-block, 
     	   by declaring  display: inline-block;, that wrap around content inline.

     	   https://www.geeksforgeeks.org/css/tachyons-layout-display/




br3   -   This class is used to define the border radius of .5rem.
		
		  https://www.geeksforgeeks.org/css/tachyons-theming-border-radius/



			

			https://www.geeksforgeeks.org/css/tachyons-layout-spacing/


pa1 - pa7: This attribute is used to provide padding from all sides with the value of 1 to 7.
ma1 - ma7: This attribute is used to provide a margin from all sides with the value of 1 to 7.





grow	-	 In Tachyons, the 'grow' class is used to add a smooth scaling effect to an element when it is hovered over. 
			 The default behavior makes the element grow to 1.1 times its original size when you hover over it. 
			 In this, we will use the grow class to scale to 1.05% of its normal size on hover.

						https://www.geeksforgeeks.org/css/tachyons-theming-hovers/




shadow-5	-	 This class is used to create a box-shadow 4px from the top, 4px from the right, 
				 8px from the bottom and 0px from the left side.		

				 		.shadow-5 { box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 ); }

				 				T-R-B-L	   -    Top, Right, Bottom, Left	

				 		https://www.geeksforgeeks.org/css/tachyons-theming-box-shadow/

*/

