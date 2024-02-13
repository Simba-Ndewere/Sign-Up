const form = document.getElementById("form");
const fullname = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
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

const validateInputs = () => {
  
    const nameValue = fullname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'username is required');
    }else{
        setSuccess(username);
    }

    if(numberValue === ''){
        setError(number, 'phone number is required');
    }else if (!isPhoneNumberValid(numberValue)){
        setError(number, 'provide a valid UK phone number');
    }else{
        setSuccess(number);
    }

    if(nameValue === ''){
        setError(fullname, 'fullname is required');
    }else{
        setSuccess(fullname);
    }

    if(emailValue === ''){
        setError(email, 'email is required');
    }else if (!isValidEmail(emailValue)){
        setError(email, 'provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'password is required');
    }else if(passwordValue.length < 8){
        setError(password, "password must be at least 8 characters");
    }else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'please confirm your password');
    }else if(password2Value !== passwordValue){
        setError(password2, "password doesn't match");
    }else{
        setSuccess(password2);
    }
};



