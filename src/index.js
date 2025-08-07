

        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import 'tachyons';  



        import { robots } from './robots';        /*      Da smo u fajlu 'robots.js' imali vise promenljivih, recimo,
                                                          da smo imali i promenljivu 'cats', tad bi stavili:

                                                               import { robots, cats } from './robots';
                                                  */
        import App from './containers/App.js';





    ReactDOM.render(
                    <App />                                                                
    , document.getElementById('root'));  

  





/*
    ReactDOM.render(

                    <CardList robots={robots}/>           -     'robots'  is equal the 'robots array' !!!
                                                                'CardList' is accepting a 'robots props'  !!!    
    , document.getElementById('root'));   

*/





        //   import registerServiceWorker from './registerServiceWorker';
        //   registerServiceWorker();     -     Ova linija je bila posle sledece !!!


