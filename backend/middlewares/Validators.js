module.exports = {
    emailValidator: [
        { validator: email => email.length > 2, msg: 'Email ID provided is too short' },
        // { validator: onlyLettersAllow, msg: 'Only Letters' }
    ],
    passwordValidator: [
        { validator: password => password.length > 2, msg: 'Password provided is too short' },
        // { validator: onlyLettersAllow, msg: 'Only Letters' }
    ]
}