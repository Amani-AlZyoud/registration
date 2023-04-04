// ^[a-zA-Z0-9]*$
// [0]{1}[7]{1}[0-9]{8}
// ^(?=.+[A-Za-z])(?=.+\d))[A-Za-z\d~!@#$%^&*()_+=/|]{8,}$


user = new User();
let show = document.getElementById("password");

function User(userName, userPassword, userEmail, userPhone) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userEmail = userEmail;
    this.userPhone = userPhone;
  }

  

const registrationForm = document.getElementById("contactForm");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();




       user.userName = event.target.username.value;
       user.userPassword = event.target.password.value;
       user.userEmail = event.target.emailAddress.value;
       user.userPhone = event.target.phoneNumber.value;


       

    
        validation();
            
        
    }
);

function validation(){
    show.type = "password";


if(user.userName == "" || /^[\s]+$/.test(user.userName)){
        alert("❗️ USERNAME IS REQUIRED!");
        return false;
    }

else if(user.userPassword == "" || /^[\s]+$/.test(user.userPassword)){
        alert("❗️ PASSWORD IS REQUIRED!");
        return false;
    }
else if(user.userEmail == "" || /^[\s]+$/.test(user.userEmail)){
        alert("❗️ EMAIL IS REQUIRED!");
        return false;
    }
else if(user.userPhone == "" || /^[\s]+$/.test(user.userPhone)){
        alert("❗️ PHONE NUMBRER IS REQUIRED!");
        return false;
    }



else if(!/^\S+$/.test(user.userName)){
alert("⚠️ VALIDATION ERROR: USERNAME MUST NOT CONTAIN ANY WHITESPACES!");
return false;
}

else if(user.userName === sessionStorage.getItem('UserName')){
    alert("✘ USERNAME IS ALREADY USED!");
    return false;
}



else if(!/^[\w\S\d]{8,}$/.test(user.userPassword)){
    alert("⚠️ VALIDATION ERROR: PASSWORD MUST CONTAIN AT LEAST 8 CHARACTERS!");
    return false;
}
else if(!/[0-9]/.test(user.userPassword)){
    alert("⚠️ VALIDATION ERROR: PASSWORD MUST CONTAIN AT LEAST 1 NUMBER!");
    return false;
}

else if(!/[A-Z]/.test(user.userPassword)){
    alert("⚠️ VALIDATION ERROR: PASSWORD MUST CONTAIN AT LEAST 1 UPPERCASE LETTER!");
    return false;
}

else if(!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(user.userPassword)){
    alert("⚠️ VALIDATION ERROR: PASSWORD MUST CONTAIN AT LEAST 1 SPECIAL CHARACTER!");
    return false;
}

else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.userEmail)){
    alert("⚠️ VALIDATION ERROR: EMAIL FORMAT IS NOT CORRECT!");
    return false;
}

else if(!/^07\d{8}$/.test(user.userPhone)){
    alert("⚠️ VALIDATION ERROR: THE PHONE NUMBER MUST CONTAIN 10 DIGITS AND START WITH 07!"); 
    return false;
}


else
alert("✔️ THE FORM WAS SUBMITTED SUCCESSFULLY!");

sessionStorage.setItem("UserName",user.userName);
sessionStorage.setItem("UserPassword",user.userPassword);
sessionStorage.setItem("UserEmail",user.userEmail);
sessionStorage.setItem("UserPhone",user.userPhone);
registrationForm.reset();
return true;

}


function myFunction() {
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
  }



