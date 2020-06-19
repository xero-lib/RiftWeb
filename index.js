const
	// Webserver, templating
	fileupload = require('express-fileupload'),
	express = require("express"),
	app = express(),
	hbs = require("express-handlebars").create({ defaultLayout: "main" }),
	// port = process.env.PORT || 3000,

	// // Environment
	env = app.get('env') || 'development',
	
	// // Security
	// fs = require('fs'),
	// key = fs.readFileSync('./ssl/private.key'),
	// ca = fs.readFileSync('./ssl/ca_bundle.crt'),
	// cert = fs.readFileSync('./ssl/certificate.crt'),

	// Body parser
	bodyParser = require('body-parser')//,

	// Login & Signup
	// nodemailer = require('nodemailer'),
	// { mailCreds } = require('./donotsay.json'),
	// email = nodemailer.createTransport({
	// 	service: 'Gmail',
	// 	auth: { user: mailCreds.user, pass: mailCreds.password }
	// }),

	// // Socket.io
	// server = require('https').createServer({ key: key, cert: cert }, app),
	// io = require('socket.io')(server),

	// Database, backend
	// url = "mongodb://localhost:27017/",
	// moment = require('moment'),
	// dbName = "riftDB",
	// mongoose = require('mongoose'),

	// // Schemas
	// schemas = ["Rift", "User", "Post", "Message", "Comment"]
	// ;

// schemas.forEach((e) => {
// 	let schemaName = e.toLowerCase() + 'Schema';
// 	global[schemaName] = require(`./models/${e.toLowerCase()}.model.js`)[schemaName];
// 	global[e] = mongoose.model(e, global[schemaName]);
//
// })
;

// App configuration
app.use(bodyParser.json())
app.use(express.json());
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(fileupload());

// // Connect to database
// mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
// 	if (!err) { console.log(`connection to mongoDB ${dbName} succeeded`) }
// 	else { console.log(`Error connecting to mongoDB ${err}`) }
// });

// // Development-only route definitions
// if (env === 'development') {
// 	app.get("/tests", (req, res) => { res.render("tests", {}) });
// 	app.get("/start", (req, res) => { res.redirect("start.html") });
// 	app.get("/emailTest", (req, res) => {
// 		res.render('email/verification', { name: "Test User" }, (err, html) => {
// 			if (err) console.log('error in email template');
// 			console.log('********* sending email to test user');
// 			email.sendMail({
// 				from: '"Rift App" <rift.donotreply@gmail.com>',
// 				to: 'crucio715@gmail.com',
// 				subject: 'Verify your new Rift account',
// 				html: html,
// 				generateTextFromHtml: true
// 			}, (err) => { console.log(err ? `error sending email: ${err}` : 'email sent!') })
// 		});
// 	})
// }

// // Primary route definitions
// app.get("/", (req, res) => {
// 	res.set("Content-Type", "text/html");
// 	res.render("landing", { isHome: true });
// });

// app.get("/rifts", (req, res) => {
// 	res.set("Content-Type", "text/html");
// 	Rift.find({}, (err, result) => res.render("rifts", { rifts: result })).lean().exec((err, docs) => err ? console.log(err) : docs)
// });

// app.get("/_", (req, res) => {
// 	res.redirect("/rifts");
// });

// app.get("/_/:riftName", (req, res) => {
// 	res.set("Content-Type", "text/html");
// 	Rift.findOne({ name: req.params.riftName }, (err, result) => {
// 		if (result) {
// 			console.log("found an entry: ", result);
// 			res.render("detail", { rift: result, isRiftDetail: true });
// 		} else {
// 			console.log(`didnt find entry: ${req.params.riftName}`);
// 			res.status(404);
// 			res.render("404", { invalidRift: true });
// 		}
// 	}
// 	).lean().exec((err, docs) => err ? console.log(err) : docs)

// });

// schemas.forEach((e) => {
// 	app.get(`/new${e}`, (req, res) => {
// 		res.render(`new${e}`, {});
// 	});
// });

// // Image upload handler
// app.post('/saveImage', (req, res) => {
// 	// const fileName = req.query.rift + '.jpg'
// 	const fileName = req.files.myFile.name
// 	const path = __dirname + '/public/img/banner/' + fileName
// 	const image = req.files.myFile

// 	image.mv(path, (error) => {
// 		if (error) {
// 			console.error(error)
// 			res.writeHead(500, {
// 				'Content-Type': 'application/json'
// 			})
// 			res.end(JSON.stringify({ status: 'error', message: error }))
// 			return
// 		}

// 		res.writeHead(200, {
// 			'Content-Type': 'application/json'
// 		})
// 		res.end(JSON.stringify({ status: 'success', path: '/img/banner/' + fileName }))
// 	})
// })

// // Error middleware
// app.use((req, res) => { res.status(404); res.render("404") });
// app.use((err, req, res, next) => {
// 	console.error(err.stack);
// 	res.status(500);
// 	res.send('500 - Server Error');
// });

// *******************************************************
// End of routes! Keep error handlers after primary routes
// *******************************************************

// ************************
// ***Socket definitions***
// ************************
// io.on('connection', (client) => {
// 	console.log('someone connected');
// 	client.on('create', (data) => {
// 		console.log('--socket.io new data--');
// 		console.log(data);
// 		switch (data.type) {
// 			case 'rift':
// 				let newRiftObject = {
// 					owner: 69420666069420,
// 					title: data.title,
// 					name: data.title,
// 					desc: data.desc,
// 					banner: `/img/banner/${data.title}.jpg`,
// 					roles: [],
// 					locale: "en_US",
// 					members: [69420666069420],
// 					creationDate: moment()
// 				}
// 				Rift.create(newRiftObject);
// 				break;
// 			case 'post':
// 				let newPostObject = {
// 					owner: 69420666069420,
// 					postID: 0,
// 					nsfw: false,
// 					title: "Do not say",
// 					content: `So this is a totally original post. Yep. Mhm.`,
// 					visibility: [
// 						"all"
// 					],
// 					awards: ["First post"],
// 					tags: [],
// 					votes: [
// 						{ 69420666069420: "up" },
// 						{ 12345678901234: "down" }
// 					],
// 					editedDate: "",
// 					creationDate: moment()
// 				}
// 				Post.create(newPostObject);
// 				break;
// 			case 'user':
// 				let newUserObject = {
// 					uid: 69420666069420,
// 					displayName: "Fashionable Stubble",
// 					email: "yoter@rift.works",
// 					userIcon: "/img/pfp/69420666069420.png",
// 					token: "234sdfgyj9dfg09idf15kasdf9q5q345kdfa93qj34ekj239",
// 					changes: {
// 						passwordChanges: [],
// 						userIconChanges: [],
// 						userNameChanges: [],
// 						locationChanges: []
// 					},
// 					password: "insert passwordhash here",
// 					roles: [{ name: "Yoter" }, { name: "Bibba" }],
// 					locale: "en_US",
// 					creationDate: moment()
// 				}
// 				User.create(newUserObject);
// 				break;
// 			case 'message':
// 				let newMessageObject = {
// 					author: 69420666069420,
// 					content: `Do not say do not say!`,
// 					reaction: [
// 						{ 69420666069420: ":lmao:" },
// 						{ 12345678901234: ":69420:" }
// 					],
// 					editedDate: "",
// 					creationDate: moment()
// 				}
// 				Message.create(newMessageObject);
// 				break;
// 			case 'comment':
// 				let newCommentObject = {
// 					author: 69420666069420,
// 					parentPost: 0,
// 					content: "Lmfao such a funny!",
// 					reaction: [],
// 					tags: [],
// 					nsfw: false,
// 					votes: [],
// 					editedDate: "",
// 					creationDate: moment()
// 				}
// 				Comment.create(newCommentObject);
// 				break;
// 			default:
// 				break;
// 		}
// 	});
// 	client.on('emailTest', (data) => {
// 		console.log('********* sending email to ' + data.recipient);
// 		email.sendMail({
// 			from: '"Rift App" <rift.donotreply@gmail.com>',
// 			to: data.recipient,
// 			subject: 'Verify your new Rift account',
// 			text: 'mcyotestve\'estaunayort'
// 		}, (err) => { console.log(err ? `error sending email: ${err}` : 'email sent!') })
// 	});
// });

server.listen(port, () => console.log(`${env} server listening on ${port}`));
