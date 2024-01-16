function hasNotNumber(string){
    return !/\d/.test(string);
}

function hasNotSpecialChars(string){
    return !/[!@#$%^&*(),.?":{}|<>]/g.test(string);
}

function hasEnoughChars(string, amount){
    return string.length >= amount;
}

function validName(name){
    return hasNotNumber(name) && hasNotSpecialChars(name) && hasEnoughChars(name, 3);
}