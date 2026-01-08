// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const formele=document.getElementById("loginform");

const submitele=document.getElementById("submit");

submitele.addEventListener("click",function(e){

     e.preventDefault();
    const emailele=document.getElementById("email");
    const emailerrorle=document.getElementById("emailerror");
    const nameele=document.getElementById("name");
    const nameerrorle=document.getElementById("nameerror");
    const passwordele=document.getElementById("password");
    const passerrorele=document.getElementById("passerror");

    if(emailele.value.length==0){
        emailerrorle.textContent="Email cannot be empty";
        emailele.style.border="2px solid red";
    }
    if (nameele.value.length==0){
        nameerrorle.innerHTML="Name cannot be empty";   
        nameele.style.border="2px solid red";
    }

    const passres=validatepassword(passwordele.value);

    passerrorele.innerText=passres.message;
    passwordele.style.border=passres.isvalid ?"2px solid green":" 2px solid red";
    function validatepassword(password){
        const constrain={
            minlen:8,
            isupper:/[A-Z]/.test(password),
            islower:/[a-z]/.test(password),
            isnumeric:/[0-9]/.test(password),
            isspecial:/[!@#$%^&*(),.?":{}|<>]/.test(password)

        }
        const error=[]
        if (password.length<constrain.minlen){
            error.push(`atleast ${constrain.minlen} characters`);
        }
        if(!constrain.isupper){
            error.push("atleast one uppercase letter");
        }
        if(!constrain.islower){
            error.push("atleast one lowercase letter");
        }
        if(!constrain.isnumeric){
            error.push("atleast one number");
        }
        if(!constrain.isspecial){
            error.push("atleast one special character");
        }
        return{
            valid:error.length==0,
            message:error.join("\n ")
        }
    }
    
})