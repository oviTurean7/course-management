const express = require('express');
const Course = require( "../models/Course" );
const router = express.Router();


router.post( '/save', async ( req, res ) => {
	const {name, type, points} = req.body;

	try {
		const course = new User( {name, type, points} );

		await course.save()

		console.log( 'Success' );
	} catch ( e ) {
		console.error( e )
		res.status( 500 ).send( 'Server error' );
	}
} );

router.get( '/', async ( req, res ) => {

	console.log('asdasdasdasd');
	try {
		const courses = await Course.find();
		res.json( courses );
	} catch ( err ) {
		console.error( err.message );
		res.status( 500 ).send( 'Server error' );
	}
} );

module.exports = router;
