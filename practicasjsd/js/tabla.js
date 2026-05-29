// OBJETO
var yo = {nombre: "Yolotzin", apellido: "Silva", edad: 18, telefono: "7771234567", matricula: "20253ds154", imagen: "https://static.wikia.nocookie.net/gatopedia/images/2/2e/El_gatoo.png/revision/latest/thumbnail/width/360/height/360?cb=20230103150310&path-prefix=es"};

// BASE DE DATOS
var bd_alumnos = [

    yo,{nombre: "Monse", apellido: "Lopez", edad: 18, telefono: "7771112233", matricula: "20253ds100", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-E4jirQtrSahH9SEMi0x9z-YLFDLk86roQ&s"},

    {nombre: "Alan", apellido: "Perez", edad: 19, telefono: "7774445566", matricula: "20253ds114", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFkTznrhhMW79aoqEemv2aZLZWxBKhYZI6A&s"}
];

// FUNCION PARA PINTAR ALUMNOS
function add_alumno(){

    // AGARRAR TABLA
    let tabla = document.getElementById("tabla_alumnos");

    // CREAR FILA
    let fila = document.createElement("tr");

    // SACAR ALUMNO
    let alumno = bd_alumnos.pop();

    // AGREGAR DATOS
    fila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.apellido}</td>
        <td>${alumno.edad}</td>
        <td>${alumno.telefono}</td>
        <td>${alumno.matricula}</td>
        <td>
            <img width="50" src="${alumno.imagen}" />
        </td>
    `;

    // METER FILA A TABLA
    tabla.appendChild(fila);
}

// EVENTO BOTON PINTAR
document.getElementById("agregar")
    .addEventListener("click", add_alumno);


// FUNCION CREAR ALUMNO
function create_alumno(){

    let nombre = document.getElementById("nombre").value;

    let apellido = document.getElementById("apellido").value;

    let edad = document.getElementById("edad").value;

    let telefono = document.getElementById("telefono").value;

    // NUEVO OBJETO
    let nuevo_alumno = {

        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        matricula: "",
        imagen: ""

    };

    // GUARDAR EN ARRAY
    bd_alumnos.push(nuevo_alumno);

    // LIMPIAR FORMULARIO
    document.getElementById("formulario").reset();
}

// EVENTO BOTON CREAR
document.getElementById("create").addEventListener("click", create_alumno);
document.getElementById("create_alumno").addEventListener("click", create_alumno);