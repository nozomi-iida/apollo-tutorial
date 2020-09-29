module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmpassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!email.match(regEx)) {
      errors.email = 'Eamil must be a valid email address';
    }
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  } else if (password !== confirmpassword) {
    errors.confirmpassword = 'Passwords must match';
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (
  username,
  password
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}
