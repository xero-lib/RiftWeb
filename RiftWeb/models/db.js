// MongoDB stuff
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

// Mongoose stuff
const mongoose = require('mongoose');
const dbName = "riftDB";

mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
	if (!err) { console.log(`connection to mongoDB ${dbName} succeeded`) }
	else { console.log(`Error connecting to mongoDB ${err}`) }
});

var { riftSchema } = require('./rift.model.js');
var Rift = mongoose.model('Rift', riftSchema);

/*
let sampleRiftObject = {
	owner: 69420,
	title: "Node.js Rift",
	name: "nodejs",
	desc: "Discussions about Node.js",
	banner: "/img/banner/nodejs.jpg",
	roles: [{ name: "Role 1", epic: true }, { name: "Role 2", epic: false }, { name: "Role 3", epic: true }],
	locale: "en_US",
	members: [123, 456, 789]
}
*/

module.exports.riftCrud = {
	create: function (object) {
		Rift.create(object);
	},
	read: function (riftName) {
		Rift.find({ name: riftName }, (err, result) => {
			if (err) { return err; }
			else { return result; }
			// else { console.log(result[0]['rifts']) }
		});
	},
	update: function () { },
	delete: function () { },
	forEach: async function () {
		await (function () {
			return Rift.find({}, (err, results) => {
				// ret = results;
				// console.log(ret);
				return results;
			}).exec()
		})()
	}
}


//riftCrud.create(newRiftObject);
//riftCrud.read("nodejs");

// const
// 	save = (object) => {
// 		object.save((err, doc) => {
// 			if (!err) {
// 				console.log("no error");
// 			} else {
// 				if (err.name == "ValidationError") {
// 					handleValidationError(err, req.body);
// 					res.end("rip you got a DB error");
// 					// ***FIX THIS BEFORE PROD***
// 					// IMPORTANT
// 					// YOU NEED MORE CODE HERE BRUH
// 				}
// 			}
// 		});
// 	},
// 	insert = (type, req, res) => {
// 		switch (type) {
// 			case rift:
// 				var riftToAdd = new Rift();
// 				riftToAdd.owner = req.body.newOwner;
// 				riftToAdd.owner_id = req.body.owner_id;
// 				riftToAdd.locale = req.body.locale;
// 				riftToAdd.title = req.body.newTitle;
// 				riftToAdd.name = req.body.newName;
// 				riftToAdd.desc = req.body.newDesc;
// 				riftToAdd.banner = req.body.newBanner;
// 				riftToAdd.icon = req.body.newIcon;
// 				riftToAdd.creationDate = moment.creationDate;

// 				console.log("new rift created");
// 				break;
// 			case user:
// 				var userToAdd = new User();
// 				userToAdd.email = req.body.email;
// 				userToAdd.userName = req.body.userName;
// 				userToAdd.descriminator = descriminator.newUser.generate();
// 				//userToAdd.icon = req.reactUpload.image(500px, 500px ?crop && ?cropMin 100px, 100px);
// 				userToAdd.locale = client.browser.getLocal();
// 				userToAdd.creationDate = moment.creationDate; 1

// 				console.log("new user created");
// 				break;
// 			case post:
// 				var postToAdd = new Post();
// 				postToAdd.owner = req.body.newOwner;
// 				postToAdd.title = req.body.newContent;
// 				postToAdd.edited = req.body.edited;
// 				postToAdd.time;
// 				console.log("new post created");
// 				break;
// 			default:
// 				console.log("invalid DB insertion type");
// 				break;
// 		}
// 	}
