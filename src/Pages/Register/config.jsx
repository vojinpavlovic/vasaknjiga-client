export const Inputs = {
    firstname: {
        placeholder: 'Unesite vase ime',
        options: {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[ a-zA-Z\-/']+$/
        },
        errors: {
            'pattern' : {
                type: 'custom',
                message: 'Nepravilno ime, primer: Pavlovic'
            },
            'required': {
                type: 'custom',
                message: 'Ovo polje mora sadrzati neku vrednost!'
            },
            'minLength' : {
                type: 'custom',
                message: 'Polje mora sadrzati minimalno 3 karaktera'
            },
            'maxLength' : {
                type: 'custom',
                message: `Polje moze sadrzati maksimalno 25 karaktera`
            }, 
        }
    },
    lastname: {
        placeholder: 'Unesite vase prezime',
        options: {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[ a-zA-Z\-/']+$/
        },
        errors: {
            'pattern' : {
                type: 'custom',
                message: 'Nepravilno prezime, primer: Pavlovic'
            },
            'required': {
                type: 'custom',
                message: 'Ovo polje mora sadrzati neku vrednost!'
            },
            'minLength' : {
                type: 'custom',
                message: 'Polje mora sadrzati minimalno 3 karaktera'
            },
            'maxLength' : {
                type: 'custom',
                message: `Polje moze sadrzati maksimalno 25 karaktera`
            }, 
        }
    },
    email: {
        placeholder: 'Unesite vasu email adresu',
        options: {
            required: true,
            minLength: 6,
            maxLength: 40,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        errors: {
            'pattern' : {
                type: 'custom',
                message: 'Nepravilna email adresa, primer: email@domena.com'
            },
            'required': {
                type: 'custom',
                message: 'Ovo polje mora sadrzati neku vrednost!'
            },
            'minLength' : {
                type: 'custom',
                message: 'Polje mora sadrzati minimalno 6 karaktera'
            },
            'maxLength' : {
                type: 'custom',
                message: `Polje moze sadrzati maksimalno 40 karaktera`
            }, 
        }
    },
    password: {
        placeholder: 'Unesite lozinku',
        options: {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        },
        errors: {
            'pattern' : {
                type: 'custom',
                message: 'Lozinka mora sadrzati minimum 8 karaktera, slova, broj i specijalne karaktere'
            },
            'required': {
                type: 'custom',
                message: 'Ovo polje mora sadrzati neku vrednost!'
            },
            'minLength' : {
                type: 'custom',
                message: 'Lozinka mora sadrzati minimum 8 karaktera, slova, broj i specijalne karaktere'
            },
        }
    },
    confirmPassword: {
        placeholder: 'Potvrdite lozinku',
        options: {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        },
        errors: {
            'pattern' : {
                type: 'custom',
                message: 'Lozinka mora sadrzati minimum 8 karaktera, slova, broj i specijalne karaktere'
            },
            'required': {
                type: 'custom',
                message: 'Ovo polje mora sadrzati neku vrednost!'
            },
            'minLength' : {
                type: 'custom',
                message: 'Lozinka mora sadrzati minimum 8 karaktera, slova, broj i specijalne karaktere'
            },
            'notMatch': {
                type: 'custom',
                message: 'Niste potvrdili lozinku!'
            }
        }
    }
}

export const Locales = {
    title: "Napravite Nalog",
    login: 'Imate korisnicki nalog?',
    loginBtn: 'Prijavi se'
}