

window.onload = function getUser() {
    const myObj = fetch(' https://randomuser.me/api/ ')
        .then(response => response.json())
        .then(json => console.log(json));
    let text = "";
    for (const x in myObj) {
        text += myObj[x] + ", ";
    }
    document.getElementById("direccion").innerHTML = text;
}
/*
    const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
    const myArr = JSON.parse(text);
    document.getElementById("demo").innerHTML = myArr[0];


/*
document.getElementById("direccion").innerHTML =` ${myObj.Array(1)}`;

/*


    const obj = JSON.parse(myObj);
    console.log(obj);




fetch(' https://randomuser.me/api/ ')
     .then(response => response.json())
     .then(json => console.log(json))   



<script>
     jQuery.ajax({
         url: 'https://randomuser.me/api/',
         dataType: 'json',
         success: function (data) {
             console.log(data);
         }
     });

 </script>
*/
/*
 <script>
     //leer pagina desarrollo web para entender esto

     fetch('https://randomuser.me/api/?results=10')
         .then(response => {
             if (response.status == 200) {
                 return response.text();
             } else {
                 throw "Respuesta incorrecta del servidor"
             }
         })
         .then(responseText => {
             let users = JSON.parse(responseText).results;
             console.log('Este es el objeto de usuarios', users);
         })
         .catch(err => {
             console.log(err);
         });
 </script>

*/

/*REVISAR ESTA INFO ACA*/

/*
document.getElementById('boton').onclick 
= function () {
    console.log("Capturamos el evento clic");
    document.getElementById("demo").innerHTML 
    = "Estamos probando de cambiar el texto con javaScript";
}

document.addEventListener('click', function() {
    console.log("Hola mundo");
    document.getElementById("demo").innerHTML 
    = "Estamos probando de cambiar el texto con javaScript";
})
*/
/*
document.getElementById('boton').addEventListener('click', function() {
    console.log("Hola mundo");
    document.getElementById("demo").innerHTML 
    = "Estamos probando de cambiar el texto con javaScript";
});

document.getElementById('boton_fondo').addEventListener('click', function() {
    document.body.style.backgroundColor = '#FF0000';
    
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'coral';
    
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
    
});

const collection = document.getElementsByClassName('parrafo');
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor= 'yellow';
};

*/

