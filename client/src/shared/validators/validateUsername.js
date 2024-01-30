export const validateUsername = (username) => {
    //usern should between 3 and 8 character
    const regex = /^\S{3,8}$/;

    return regex.test(username);
};

export const usernameValidationMessage =
    'Usernane should have 3 and 8 characters. No spaces are allowed.';
