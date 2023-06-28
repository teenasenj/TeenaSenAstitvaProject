const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.post('/signup', db.chemist_signup);

app.post('/adding_operator', db.adding_operator);

app.get('/login', db.getLoginUsers);

app.get('/adding_operator/:id', db.operator_id);
app.get('/adding_operator', db.operator);
// app.get('/login', db.getUsers);
// app.post('/login', db.loginget);
// app.get('/login', db.login);
app.get('/login/:id', db.login_id);
app.get('/signup', db.getUsersChemist);
// app.get('/signup', db.chemist_signup);
app.get('/signup/:id', db.getUserById);
 app.post('/login', db.createUser);
// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
