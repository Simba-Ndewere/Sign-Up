const form = document.getElementById("form");
const fullname = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
    e.preventDefault();

    for (let a = 0; a <= 6; a++) {
        validateInputs(a);
    }
});

const setError = (element, message) => {
    const input_box = element.parentElement;
    const errorDisplay = input_box.querySelector(".error");

    errorDisplay.innerText = message;
    input_box.classList.add("error");
    input_box.classList.remove("success");
}

const setSuccess = element => {
    const input_box = element.parentElement;
    const errorDisplay = input_box.querySelector(".error");

    errorDisplay.innerText = '';
    input_box.classList.add("success");
    input_box.classList.remove("error");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isPhoneNumberValid = number => {
    const re = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return re.test(String(number).toLowerCase());
}

const validateInputs = (num) => {

    const nameValue = fullname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    switch (num) {
        case 0: if (usernameValue === '') {
            setError(username, 'username is required');
        } else {
            setSuccess(username);
        }
            break;

        case 1: if (numberValue === '') {
            setError(number, 'phone number is required');
        } else if (!isPhoneNumberValid(numberValue)) {
            setError(number, 'provide a valid UK phone number');
        } else {
            setSuccess(number);
        }
            break;

        case 2: if (nameValue === '') {
            setError(fullname, 'fullname is required');
        } else {
            setSuccess(fullname);
        }
            break;

        case 3: if (emailValue === '') {
            setError(email, 'email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'provide a valid email address');
        } else {
            setSuccess(email);
        }
            break;

        case 4: if (passwordValue === '') {
            setError(password, 'password is required');
        } else if (passwordValue.length < 8) {
            setError(password, "password must be at least 8 characters");
        } else {
            setSuccess(password);
        }
            break;

        case 5: if (password2Value === '') {
            setError(password2, 'please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(password2, "password doesn't match");
        } else {
            setSuccess(password2);
        }
            break;

        case 6: validateGender();
            break;
    }
};

function validateGender() {
    console.log("clicked");
    let genderRadios = document.getElementsByName('gender');
    let isValid = false;
    const genderDetails = document.querySelector(".gender-details")
    const errorDisplay = genderDetails.querySelector(".error");

    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            isValid = true;
            break;
        }
    }

    if (!isValid) {
        errorDisplay.innerText = "Please select gender";
        genderDetails.classList.add("error");
    } else {
        errorDisplay.innerText = "";
    }
}



