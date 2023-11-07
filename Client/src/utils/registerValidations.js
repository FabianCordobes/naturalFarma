export const isNameValid = (name) => {
    return name.length >= 3 && name.length <= 15 && /^[a-zA-Z]+$/.test(name);
  };
  
  export const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  export const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#\$%\^&*])(?=.{5,20})/;
    return passwordRegex.test(password);
  };