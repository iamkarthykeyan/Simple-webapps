const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email')
const username = document.getElementById('username');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit',e  => {
          e.preventDefault();

          validateform();
});

// functions error

const setError = (element,message)=>{
    const content = element.parentElement;
    const errorDisplay = content.querySelector('.error');

    errorDisplay.innerText = message;
    content.classList.add('error');
    content.classList.remove('success');
}

// functions success

const setsuccess = (element,message)=>{
    const content = element.parentElement;
    const errorDisplay = content.querySelector('.error');

    errorDisplay.innerText=message;
    content.classList.add('success');
    content.classList.remove('error');
}

function validateform(){
    const firstNameValue = firstname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();
    
    
    if(usernameValue === ''){
        setError(username, "Username is not valid");
    }
    else{
        setsuccess(username,"Username valid");
    }
}