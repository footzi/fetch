const buttonXHR = document.querySelector('.send-xhr');
const form = document.querySelector('form');

buttonXHR.addEventListener('click', () => {
    event.preventDefault();
    sendXHR();
})

function sendXHR() {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', '/test');

    // Не понятно нужен ли
    // xhr.onloadstart = function() {
    //     console.log('перед отправкой запроса');
    // }

    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            } else if (xhr.status === 404) {
                console.error(`service not found`);
            } else {
                console.error('other error');
            }
        }
    }

    xhr.send(formData);
}