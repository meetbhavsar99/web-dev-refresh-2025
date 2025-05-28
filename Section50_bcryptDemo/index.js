const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};
// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('Correct password. Logging you in!');
  } else {
    console.log('Try again!');
  }
};

// hashPassword('monkey');
login('monkey', '$2b$12$KhQSbk8g1006K1yqc3QiAuf6u.D2gJbB3FQ9zC4oG3ofN9.VW0ity');
