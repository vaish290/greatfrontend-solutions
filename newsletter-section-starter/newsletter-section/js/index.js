// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.



const emailele=document.getElementById("email");
const subscribebtn=document.getElementById("subscribers");
const displaymsg=document.getElementById("display");
const formele=document.getElementById("formdata");

const emaildisplayele=document.getElementById("emaildisplay"); 

const toast=document.getElementById("toast");
const toastbanner=document.getElementById("toast-banner");
const toastmessage=document.getElementById("toast-message");

formele.addEventListener("submit",async (e)=>{
    e.preventDefault();
    function validateEmail(email) { 
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email.trim());
    }

    
    async function subscribeEmail(email){
    const response=await fetch("http://localhost:3000/subscribe",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    });
    return response.json();
}

    function showToast(message,type){
        toast.classList.remove("hidden");
        if(type==="success"){
                toast.classList.remove("bg-red-200/30")
                toast.classList.add("bg-green-200/30")
                toastbanner.classList.remove("text-red-500");
                toastbanner.classList.add("text-green-500");
                toastbanner.innerText="Success";
                toastmessage.classList.remove("text-red-500");
                toastmessage.classList.add("text-green-500");
                toastmessage.innerText="Subscription successful. Please check your inbox to confirm.";
        }
        else{
                toast.classList.remove("bg-green-200/30")
                toast.classList.add("bg-red-200/30")
                toastbanner.classList.remove("text-green-500");
                toastbanner.classList.add("text-red-500");
                toastbanner.innerText="Error";
                toastmessage.classList.remove("text-green-500");
                toastmessage.classList.add("text-red-500");
                toastmessage.innerText=message;
        }
        setTimeout(()=>{
            toast.classList.add("hidden");
        },3000);
    }

    try{
        if (emailele.value.length==0){
            emaildisplayele.innerText="Email field cannot be empty";
            emaildisplayele.style.color="red";
            throw new Error("Failed to subscribe. Please enter a valid email address");
        }

        if (!validateEmail(emailele.value)) {
            emaildisplayele.innerText="Enter valid Email";
            emaildisplayele.style.color="red";
            throw new Error("Failed to subscribe. Please enter a valid email address");
    }
        if (!validateEmail(emailele.value)) {
            throw new Error("Failed to subscribe. Please enter a valid email address");
        }
        const result=await subscribeEmail(emailele.value);
        
        if(result.ok){
                showToast(result.message,"success");     
        }
        else{
                showToast(result.error,"error");
            }
        }
        catch(error){
            showToast(error.message,"error");
        }
        formele.reset()
        });
    
   
    



