module.exports = {
  getError(errors, prop) {
    // props === 'email' || 'password' || etc
    try {
      return errors.mapped()[prop].msg;
    } catch (error) {
      return '';
    }
  }
};
