alert('If you refresh the data well dealet');

function checkfortext(name){
    return /[a-z]/.test(name);
}
function checkfornumber(pass){
    return /[0-9]/.test(pass);
}

let name = document.querySelector('#name');

let age = document.querySelector('#age');

document.forms[0].onsubmit=function(event){
if (checkfortext(name.value) == false || checkfortext(email.value) == false)
{
    event.preventDefault();
    alert("please enter text");
}
else if (checkfornumber(age.value)== false)
{
    event.preventDefault();
    alert("Only Numbers allowed in age Field");

}

}
