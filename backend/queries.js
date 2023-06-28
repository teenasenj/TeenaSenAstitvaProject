const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'loginconnection',
  password: 'avantnet',
  port: 5433,
});


// fetch all records for login
// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM login ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };


// fetch all records for login

const getLoginUsers = (request, response) => {
  pool.query('SELECT * FROM login ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};





//fetch data using id in signup
const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM signup WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


//fetch all data in signup
const getUsersChemist = (request, response) => {
  pool.query('SELECT * FROM signup ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// fetch records by id for login_id
const login_id = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM login WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



//Admin screen login post data
const createUser = (request, response) => {
  const {email, password, usertype } = request.body;

  pool.query(
    'INSERT INTO login ( email, password, usertype) VALUES ($1, $2, $3) RETURNING *',
    [email, password, usertype],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


//chemist signup post data
const chemist_signup = (request, response) => {
  const { shopname,firstname, lastname, dob, licenceno, qualification, email, phoneno, drivinglicenceno, address, state, country, chemistlicence, drivinglicence, chemistphoto} = request.body;
  pool.query(
    'INSERT INTO signup ( shopname, firstname, lastname, dob, licenceno, qualification, email, phoneno, drivinglicenceno, address, state, country, chemistlicence, drivinglicence, chemistphoto) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING * ',
    [shopname, firstname, lastname, dob, licenceno, qualification, email, phoneno, drivinglicenceno, address, state, country, chemistlicence, drivinglicence, chemistphoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}


//opertor post data
const adding_operator = (request, response) => {
  const { firstname, lastname, dob,  qualification, email, phoneno,  address} = request.body;
  pool.query(
    'INSERT INTO adding_operator (  firstname, lastname, dob, qualification, email, phoneno,  address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [ firstname, lastname, dob, qualification, email, phoneno,  address],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}


// operator fetch by id 

const operator_id = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM adding_operator WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


//fetch all data in operator
const operator = (request, response) => {
  pool.query('SELECT * FROM adding_operator ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// Admin screen login 
const login = (request, response) => {
  const { email, password,  usertype} = request.body;
  pool.query('INSERT INTO login (email, password,  usertype) VALUES ($1, $2, $3) RETURNING *',
    [ email, password,  usertype],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}





// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };



// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };

module.exports = {
  // getUsers,
  operator,
  getUserById,
  login_id,
  createUser,
  chemist_signup,
  adding_operator,
  operator_id,
  getUsersChemist,
  login,
  getLoginUsers


  // updateUser,
  // deleteUser,
};
