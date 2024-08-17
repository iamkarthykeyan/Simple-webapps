const yourname = document.getElementById('yourname')
const username = document.getElementById('username');
const email = document.getElementById('email-add');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

const form = document.getElementById('form');

const usererrortext = document.getElementById('user');
const nameerrortext = document.getElementById('name');
const emailerrortext = document.getElementById('email');
const passworderrortext = document.getElementById('pass');
const password1errortext = document.getElementById('pass1');
form.addEventListener('submit',(e)=>{

    // username
    if( username.value=== '' || username.value == null )
    {
        usererrortext.innerText="*Username is invalid*";
    }
    if(username.value.length>=1){
        usererrortext.innerText=" ";
    }
    else if(username.value){

    }

    //yourname
    if(yourname.value === '' || yourname.value == null){
        nameerrortext.innerText = "*Your-name cannot be empty*";
    }
    else {
        nameerrortext.innerText = "";
    }

    //password 
    if(password.value === '' || password.value == null){
        passworderrortext.innerHTML = "*Password cannot be empty*";
    }
    else if(password.value.length<6){
        passworderrortext.innerText = "*Atleast more than 6 characters*";
    }
    else if(password.value){
        passworderrortext.innerText="";
    }
   
    //password1
    
    if(password1.value === '' || password1.value == null)
    {
        password1errortext.innerText = "*Please Confirm your password*";
    }
    else if(password1.value!=password.value)
    {
        password1errortext.innerText = "*Password does not matched*";
    }
    else if(password1.value){
        password1errortext.innerText="";
    }

    //email

    if(email.value == null || email.value === ''){
       emailerrortext.innerText = "*Enter the Email address*";
    }
    else if(email.value){
        emailerrortext.innerText = "";
    }
    
    e.preventDefault();
    
})
