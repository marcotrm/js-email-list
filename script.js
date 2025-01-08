function generateMail () {
    const mails = []   

   for (let i = 0; i < 10; i++){
        axios.get('https:flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
        mails.push(response.data.response)
    })
}
}