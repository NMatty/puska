//!Module-ok importálása
const express = require('express'); //?npm install express
const session = require('express-session'); //?npm install express-session
const path = require('path');
const fs = require('fs');

const app = express();
const router = express.Router();
//!SQL Queries importálása
const db = require(path.join(__dirname + '/sql/db-queries'));

//!Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (request, file, callback) => {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

//!Beállítások
const ip = '127.0.0.1';
const port = process.env.PORT || 8080;
//? const port = 3000 

//!Session beállítása:
app.use(
    session({
        secret: 'titkos_kulcs', //?Ezt generálni kell a későbbiekben
        resave: false,
        saveUninitialized: true
    })
);

//!Routing
//?Főoldal:
router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/public/html/bootstrap.html'));
});

app.use(express.json());
//!API végpont
app.get('/api/selectall', (request, response) => {
    db.selectAll()
        .then((data) => {
            response.json(data);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
});

//!Szerver futtatása
app.use(express.static('public')); //?public mappa tartalmának betöltése az oldal működéséhez
app.use('/', router);

app.listen(port, () => {
    console.log('Szerver elérhetősége: ' + port);
});
//!Amikor local-ba akarsz dolgozni
// app.listen(port, ip, () => {
//     console.log('Szerver elérhetősége: ' + ip + ':' + port);
// });

//?Szerver futtatása terminalból: npm run start (Ehhez kell a következő: npm install nodemon --save-dev)
//?Szerver leállítása (MacBook és Windows): Control + C
//?Terminal ablak tartalmának törlése (MacBook): Command + K
