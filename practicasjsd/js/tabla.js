//ESTO ES UN OBJETO
var yo = {
    nombre: "Yolotzin",
        edad: 18,
    matricula: "20253ds154",
    imagen: "https://static.wikia.nocookie.net/gatopedia/images/2/2e/El_gatoo.png/revision/latest/thumbnail/width/360/height/360?cb=20230103150310&path-prefix=es"
};

var bd_alumnos = [
  yo,
    {nombre: "Monse",edad: 18, matricula: "20253ds100",imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-E4jirQtrSahH9SEMi0x9z-YLFDLk86roQ&s" },
    {nombre: "Alan",edad: 19, matricula: "20253ds114",imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFkTznrhhMW79aoqEemv2aZLZWxBKhYZI6A&s" },
    {nombre: "Santi", edad: 18, matricula: "20253ds099",imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBENUeQwsc7xfWZi5rYs3PYwfqtHgYAxDnYA&s" },
    {nombre: "Alex", edad: 19, matricula: "20253ds109",imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr70NLiUlIiSelDwAlz5XcXVv5s9zP5eMEw&s" },
    {nombre: "Axel Ernesto", edad: 20, matricula: "20253ds115",imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOOSRtKKvqpMqfvKuAdslEDvpp1ot38dLXw&s" },
];

function add_alumno(){
    //1. AGARRAR LA TABLA
    let tabla = document.getElementById("tabla_alumnos");
    //2. CREAR UN ELEMENTO (NO EXISTE)
    let fila = document.createElement("tr");
    //<tr></tr>
    //2.1 AGREGAR LA INFORMACION A LA FILA
    let alumno = bd_alumnos.pop();
    fila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.edad}</td>
        <td>${alumno.matricula}</td>
        <td><img width="50" src="${alumno.imagen}" /></td>
    `;
    //3. AGREGAR EL ELEMENTO EN LA TBALA
    tabla.appendChild(fila);
}

document.getElementById("agregar").addEventListener("click", add_alumno);

function create_alumno(){

    let nombre = document.getElementById("nombre").value;
    let nuevo_alumno = {nombre: nombre, edad: 0, matricula: "", imagen: ""};
    bd_alumnos.push(nuevo_alumno);
    document.getElementById("formulario").reset();
}

document.getElementById("create").addEventListener("click", create_alumno);
document.getElementById("create_alumno").addEventListener("click", create_alumno);