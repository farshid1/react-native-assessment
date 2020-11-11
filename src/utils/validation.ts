const NUMBER_OF_CHARACTERS = 1;

export const validateInputs = (login: string, password: string) => {
  return login.length > NUMBER_OF_CHARACTERS && password.length > NUMBER_OF_CHARACTERS;
};
