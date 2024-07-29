const express = require( 'express' )
const mongoose = require( 'mongoose' );
const fs = require( 'fs' );
const app = express();
const port = process.env.PORT || 3000;
const courseRoutes = require('./routes/courseRoutes');

mongoose.connect( process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true} )
        .then( () => console.log( 'MongoDB connected' ) )
        .catch( err => console.log( err ) );


app.use('/courses', courseRoutes);


app.get( '/', ( req, res ) => {
	let message = 'it works'
	if ( process.env.NODE_ENV === 'production' ) {
		message += ' PROD!'
	} else {
		message += ' DEV!'
	}

	res.status( 200 ).send( message );
} );

app.get( '/read', ( req, res ) => {
	fs.readFile( './data/data.json', 'utf8', ( err, data ) => {
		if ( err ) {
			console.error( err );
			res.status( 500 ).send( 'Error reading file' );
		} else {
			res.send( JSON.stringify( data ) );
		}
	} );
} );

app.post( '/write', ( req, res ) => {
	const payload = req.body;
	fs.writeFileSync( './data/data.json', JSON.stringify( payload ), ( err ) => {
		if ( err ) {
			console.error( err );
			res.status( 500 ).send( 'Error writing to file' );
		} else {
			res.send( 'Payload written to file' );
		}
	} );
} );

app.listen( port, () => {
	console.log( `Server running at http://localhost:${port}/` );
} );
