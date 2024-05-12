const registlogin =document.querySelector('.regist-login');
const loglink = document.querySelector('.login-link');
const wraap =document.querySelector('.wraap');

const inlogEmail =document.getElementById('email');
const inlogPass =document.getElementById('password');
const  logbtn =document.getElementById('logbtn');
const error=document.getElementById('error')


const userN =document.getElementById('userN');
const emailR =document.getElementById('emailR');
const passR =document.getElementById('passR');
const signUp =document.getElementById('signUp');
const lastN=document.getElementById('lastN')
const alertmass=document.getElementById('alertmass')

let user=[];

registlogin.onclick = () =>{
    wraap.classList.add('active')
};

loglink.onclick = () =>{
    wraap.classList.remove('active')
};

function nonevlu(){
    wraap.style.display="none"
}

// function addvalue(){
//     nonevlu()
// }

if(localStorage.getItem('users')!=null){
    user=JSON.parse(localStorage.getItem('users'));

}

function signup(){
    let data={
        username: userN.value,
        lastname:lastN.value,
        Email:emailR.value,
        Password:passR.value,
    }
    if(test()==true){
        alert('check inputs must full all inputs please')
    }else{
        if(checkE()==true){
            alert("Email Already Exit")

        }else{
            alertm();
    user.push(data);
    localStorage.setItem("users",JSON.stringify(user));
    clearF();
  
    }
    }
}
// }

function alertm(){
    alertmass.classList.replace('d-none','d-block');
    alertmass.style.color='green'
}

function test(){
    if(userN.value=='' ||  emailR.value==''||  passR.value==''){
        return true;

    }else
    return false;
}

function clearF(){
    userN.value=''
    emailR.value=''
    passR.value=''
    lastN.value=''
}

function checkE(){
    for(let i=0; i<user.length; i++){
        if(user[i].Email==emailR.value){
            return true;
        }
    }
}

// function validation(){

// }

signUp.addEventListener('click',signup)


function login(){

    if(inlogEmail.value==''||inlogPass.value ==''){
        geterror('No value Please enter inputs','red')
    }else{
        if(checkEmailpass() == true){ 
            nonevlu()
        }else{
            geterror('Email or password not corect','red')
        }
    }
    clearFlo()
}
function checkEmailpass(){
    for(var i=0; i<user.length ;i++){
        if(user[i].Email==inlogEmail.value && user[i].Password==inlogPass.value ){
            return true;
        }

    }
}

function geterror(text,color){
    error.classList.replace('d-none','d-block');
    error.innerHTML=text;
    error.style.color=color;

}

function clearFlo(){
    inlogEmail.value='';
    inlogPass.value=''
}

logbtn.addEventListener('click',login)





// function valiEmail(){
//     let regexEmail=/^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$/;
    
//     if(inlogEmail.value.match(regexEmail)){
//             inlogEmail.style.border="2px solid green";
//             inlogEmail.focuse();
//             return true
//         }else{
//             inlogEmail.style.border="2px solid red";
//             return false
//         }
    
//     }
    
//     function valipass(){
//         let redxpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
//         if( inlogPass.value.match(redxpass)){
//             inlogPass.style.border="2px solid green";
//             return true;
//         }else{
//             inlogPass.style.border="2px solid red";
//             return false
//         }
//     }