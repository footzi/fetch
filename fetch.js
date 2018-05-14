const buttonFetch = document.querySelector('.send-fetch');

buttonFetch.addEventListener('click', () => {
    event.preventDefault();
    sendFetch();
})

function sendFetch() {
    const formData = new FormData(form);

    const settings = {
        method: 'post',
        body: formData,
        mode: 'cors',
        cache: 'default'
    }

    fetch('/test', settings)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject({
                    status: res.status,
                    text: res.statusText
                });
            }
        })
        .then(json => console.log(json))
        .catch(error => {
            if (error.status === 404) {
                console.error(`service not found= ${error.text}`);
            } else {
                console.error(`other error= ${error.text}`);
            }
        })
}