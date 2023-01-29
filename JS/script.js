
const api_url_1 = "https://randomuser.me/api/?results=10";

const htmlnombre = document.querySelector('#app');
const htmlimagen = document.querySelector('#img');



fetch('https://randomuser.me/api/?results=1')
    .then(response => response.text())
    .then(responseText => {
        let users = JSON.parse(responseText).results;
        console.log('Este es el objeto de usuarios', users);

        const jsv = users.map
            (results =>
                `<h1>${results.name.title}
                     ${results.name.first} 
                     ${results.name.last}<br> 
                   @ ${results.email}</h1>`)

            htmlnombre.innerHTML = `<ul>${jsv}</ul>`

        const img = users.map
            (results => `${results.picture.medium}`)

        htmlimagen.innerHTML = `<p>${img}</p>`

    });
