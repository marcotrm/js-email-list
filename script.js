//DOM ELMS
const emailListElm = document.getElementById('email-list')
const generateBtnElm = document.getElementById('generate-btn')

//functions
function generateMail() {
    emailListElm.innerHTML = '<li>Loading...</li>';
    const randomMails = []
   
   for (let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
       randomMails.push(`<li>${response.data.response}</li>`)

       if (randomMails.length === 10) {
        emailListElm.innerHTML = randomMails.join('');
                }   
        } )
    }
}

generateMail();

//events
generateBtnElm.addEventListener('click', generateMail);