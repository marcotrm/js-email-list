//DOM ELMS
const emailListElm = document.getElementById('email-list')
const generateBtnElm = document.getElementById('generate-btn')

//functions
function generateMail() {

    emailListElm.innerHTML = '';
   
   for (let i = 0; i < 10; i++){
    axios.get('https:flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
        emailListElm.innerHTML += `<li>${response.data.response}</li>`
    })
    }
}

generateMail();

//events
generateBtnElm.addEventListener('click', generateMail);