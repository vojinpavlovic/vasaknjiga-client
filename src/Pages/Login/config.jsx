export const Inputs = {
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
        },
        errors: {
            'required': {
                type: 'custom',
                message: 'Ovo polje mora sadrzati neku vrednost!'
            },
            'minLength' : {
                type: 'custom',
                message: 'Ovo polje mora sadrzati minimalno 8 karaktera'
            },
        }
    }
}

export const LoginErrors = {
    "invalid-credentials": {
        type: "custom",
        message: "Podaci koji ste uneli nisu tacni"
    },
    "internal-error": {
        type: "custom",
        message: "Oops. Zao nam je, desila se greska na serveru."
    },
    "not-found": {
        type: "custom",
        message: `
            Desila se greska koju ne poznajemo. 
            Bili bi Vam jako zahvalni ako otvorite inspect element (F12 dugme)
            Odete u konzolu, slikate i posaljete nam na mail greske@vasaknjiga.com.
            Hvala unapred <3
        `
    }
}

export const Locales = {
    title: "Dobrodosao nazad",
    subtitle: "Unesite vase podatke kako bi ste se ulogovali",
    register: 'Nemate korisnicki nalog?',
    registerBtn: 'Registruj se'
}