const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const emailMsg = document.querySelector(".email-msg");
const password = document.querySelector(".password");
const passwordMsg = document.querySelector(".password-msg");
const submitBtn = document.querySelector(".claim-btn");
const submitMsg = document.querySelector(".submit-msg")

submitBtn.addEventListener("click", clickHandler);


function clickHandler(event){
  event.preventDefault();
  emailMsg.innerText = "";
  passwordMsg.innerText = "";
  const firstnameValue = firstName.value;
  const lastnameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  let ifSendData = true;


  if(emailValue.length === 0 || emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1){
    emailMsg.innerText = "Please enter a valid Email"
    ifSendData = false; 
}
if(passwordValue.length === 0){
    passwordMsg.innerText = "Please enter your password";
    ifSendData = false;
} else if(passwordValue.length <= 5 ){
    passwordMsg.innerText = "The password must be at least 5 characters ";
    ifSendData = false;
}

if(ifSendData){
         const body= JSON.stringify({
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue
    })
    const headers = {
        "Content-Type" : "application/json"
    }
   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST" ,
    body: body,
    headers: headers
   })
     .then((response) => {
    if(response.ok){
        submitMsg.innerText = "submitted successfully"
     }
   })
 }
}

  
