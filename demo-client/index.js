const axios = require( 'axios' );

axios.get( 'http://demo-server:3000/' )
     .then( res => {
	     console.log( res.data );
     } )
     .catch( err => {
	     console.log( err );
     } );
