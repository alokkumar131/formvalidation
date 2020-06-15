const btn = document.querySelector('.btn');
const  validateName= function(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if(!re.test(name.value)){
       name.classList.add('is-invalid');
       return false;
    }else{
        name.classList.remove('is-invalid');
      
        return true;
    }
}
const  validateZip = function(){
    const zip = document.getElementById('zip');
    //const re = /^[0-9]{6}$/;
    const re = /^[0-9]{6}(-[0-9]{4})?$/;
    if(!re.test(zip.value)){
       zip.classList.add('is-invalid');
   
       return false;
    }else{
       zip.classList.remove('is-invalid');
  
       return true;
    }
}
const validateEmail =function(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
       email.classList.add('is-invalid');
    }else{
       email.classList.remove('is-invalid');
      
       return true;
    }
}
var validatePhone =function(){
       const email = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if(!re.test(phone.value)){
       phone.classList.add('is-invalid');
       return false;
    }else{
       phone.classList.remove('is-invalid');
       return true;
    } 
}






//Form blur event list
document.getElementById('name').addEventListener('keyup', validateName);document.getElementById('zip').addEventListener('keyup', validateZip);document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('phone').addEventListener('keyup', validatePhone);
