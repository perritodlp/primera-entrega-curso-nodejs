const {cursos, listarCursos} = require('./cursos.js');
const {inscribirEstudiante} = require('./inscribir.js');

// Objeto con las opciones disponibles
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
    nombre: {
        demand: true,
        alias: 'n'
    }
};

// Usa yargs para permitir obtener las opciones ingresadas
const argv = require('yargs')
             .command('inscribir','Inscribe un estudiante', opciones)
             .argv;

// Capturamos el id del curso ingresado
let id_curso = argv.i;  

// Buscamos en el arreglo de cursos dado el id de curso ingresado           
let datos_curso = cursos.find( curso => curso.id === id_curso);  

// Si existe el curso ingresado
if( datos_curso ) {
    // Armamos un objeto con los datos ingresados del estudiante
    let estudiante = {
        nombre: argv.n,
        cedula: argv.c
    };

    // Inscribimos al estudiante guardando los datos en un archivo de texto
    inscribirEstudiante(datos_curso, estudiante);
} else {
    if( id_curso )
        console.log('Ha ingresado un ID que no corresponde a ningún curso');
    
    listarCursos();
}