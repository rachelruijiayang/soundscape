var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';

/* MongoClient helper creates connection to MongoDB
takes the uri connection string (tells driver which MongoD to connect to)

function(error, db) is implemented below
it gets "called" upon connecting to the MongoD
*/
mongodb.MongoClient.connect(uri, function(error, db) {
	// if error occurs, log and exit
	if (error) {
		console.log(error);
		process.exit(1);
	}

	// access sample collection
	db.collection('sample').insert({ x: 1}, function(error, result) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		
		/* toArray loops over all of the entries in the database and
		returns the entries in the form of an array in the callback
		*/
		db.collection('sample').find().toArray(function(error, docs) {
			if (error) {
				console.log(error);
				process.exit(1);
			}

			console.log('Found docs: ');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		});
	});
});