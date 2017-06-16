import express from 'express';
import mongodb from 'mongodb';

const app = express();
const PORT = 8080;
const dbUrl = 'mongodb://localhost:27017/crudwithredux';

// Connect to MongoDB Database
// Then run Express Server @ port 8080
mongodb.MongoClient.connect(dbUrl, (err, db) => {

	if (err) {
		console.log(`----- FAILED TO CONNECT TO MONGODB`);
		return;
	}

	console.log(`----- CONNECTED TO MONGODB @ ${dbUrl}`);

	// START THE SERVER
	app.listen(PORT, () => console.log(`----- SERVER ONLINE @ localhost:${PORT}`));
	
	// DEFINE SOME ROUTES
	app.get('/', (req, res) => {
		res.send('<h1>Home Page</h1>');
	});

	app.get('/api/games', (req, res) => {
		if (err) throw err;

		db.collection('games').find({}).toArray((err, games) => {
			if (err) throw err;

			res.json({ games });
		})
	});

	// app.post('/api/games', (req, res) => {
	// 	if (err) throw err;

	// 	res.json({});

	// 	// db.collection('games').find({}).toArray((err, games) => {
	// 	// 	if (err) throw err;

	// 	// 	res.json({ games });
	// 	// })
	// });

	app.use((req, res) => {
		res.status(404).json({
			errors: {
				global: 'Still working on it. Please try again later when we implement it'
			}
		});
	});

});
