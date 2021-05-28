//RUTINA PARA CONSUMIR UN API USANDO JS

//1. identificar la url del servicio a consumir(¿Cuál es la dirección del servidor?)
let url="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US";

//2. Identificar si para consumir el API necesito un token
let token="Bearer BQAd2e1aAt2n-lUhqM1jYJordvQV9qyJrpMmvrTwsDCiEKhL4NqJGAQFi8OkC8l2HPJVh_NVCNBV2t0WE4YLHT2pPqAkhBBAz6LkDfo0p9YRWyc2XVRNdMSAHskjiHdaRIynNkdwXERtnx2ze-A";

//3. Configurar el metodo http, las cabeceras y el body de la peticion a enviar
let peticion={

    method:"GET",
    headers:{Authorization:token}

}

//4. Crear un llamado al servidor y le llevamos nuestros parametros
fetch(url,peticion)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(datosLlegada){

        console.log(datosLlegada); //ACCEDIANDO AL OBJETO DE LLEGADA
        console.log(datosLlegada.tracks); //arreglo de 10 elementos
        console.log(datosLlegada.tracks[0]);
        console.log(datosLlegada.tracks[0].name);
        console.log(datosLlegada.tracks[0].preview_url);
        console.log(datosLlegada.tracks[0].album.images[0].url);

        let canciones=datosLlegada.tracks;
        pintarDatos(canciones);

    })

//5. Pintando las canciones en el HTML
function pintarDatos(canciones){

   let contenedorPadre=document.getElementById("contenedorPadre");

   //Recorremos el arreglo de canciones:
   canciones.map(function(cancion){

        //CREO UN DIV CON LA CLASE COL
        let columna=document.createElement('div');
        columna.classList.add("col");

        //CREO UN DIV CON LA CLASE CARD H-100
        let tarjeta=document.createElement('div');
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        //IMAGEN DE LA TARJETA
        let imagen=document.createElement('img');
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        //TITULO DE LA TARJETA
        let titulo=document.createElement('h3');
        titulo.classList.add("text-center");
        titulo.textContent=cancion.name;

        //CANCION DE LA TARJETA
        let audio=document.createElement('audio');
        audio.classList.add("w-100");
        audio.setAttribute("controls","");
        audio.src=cancion.preview_url;

        //ANIDAMOS COMPONENTES

        //EL TITULO ESTA POR DENTRO DE LA TARJETA
        tarjeta.appendChild(titulo);

        //LA FOTO ESTA POR DENTRO DE LA TARJETA
        tarjeta.appendChild(imagen);

        //EL AUDIO ESTA DENTRO DE LA TARJETA
        tarjeta.appendChild(audio);

        //LA TARJETA ESTA POR DENTRO DE LA COLUMNA
        columna.appendChild(tarjeta);

        //LA COLUMNA ESTA POR DENTRO DE LA FILA
        contenedorPadre.appendChild(columna);



   });



}
