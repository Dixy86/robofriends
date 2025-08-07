/*

		https://engleski.club/citati-na-engleskom


		https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
		https://medium.com/@miotra/uop%C5%A1teno-o-state-i-props-714f638d8034

		https://www.webprogramiranje.org/javascript-objekat-osnove/

*/		


/*
		"Scroll" isn't a self closing component, it wraps component !!!
		So, how can we tell "Scroll" to "Hey, just render whatever's inside of you."?

								props
								state
								children

		"Scroll" can use "children" as a way to render its children  !!!

					Every "props" object has children  !!!


		
		The 'children' is a special prop that React passes automatically to your components !!!
*/		



import React from 'react';


const Scroll = (props) => {
	//		return <h1> Hi </h1>
	//		console.log('props  -->  ', props.children);
	//		return props.children;

	return (
		<div style={{ overflow: 'scroll', border: '5px solid black', height: '500px' }}>
			{props.children}
		</div>
	);
};



export default Scroll;

