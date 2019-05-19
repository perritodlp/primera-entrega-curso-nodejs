const fs = require('fs');

// Función que permite ir agregando los datos de los estudiantes inscritos, en un archivo de texto
let inscribirEstudiante = (curso, estudiante) => {
    let {nombre, cedula} = estudiante;
    let {nombre: nombre_curso, duracion, valor } = curso;

    texto = 'El estudiante ' + nombre + '\n' +
            'con cédula: ' + cedula + '\n' +  
            'se ha matriculado en el curso de nombre ' + nombre_curso + ' ' +
            'con una duración de ' + duracion + ' ' +
            'y un valor de ' + valor + '\n\n';
    
    // Agrega al final del archivo, el nuevo estudiante inscrito
    fs.appendFile('estudiantes.txt', texto, (err) => {
        if ( err) throw err;
        console.log('Se ha creado el archivo');
    });           
};

module.exports = {
    inscribirEstudiante
};