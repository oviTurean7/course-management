const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	points: { type: Number, required: true }
});

module.exports = mongoose.model('Course', CourseSchema);
