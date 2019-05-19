const cursos = [
    {
        id: 1,
        nombre: 'Algoritmos y programación', 
        duracion: 40,
        valor: 0
    },
    {
        id: 2,
        nombre: 'Estructuras de datos', 
        duracion: 60,
        valor: 50000
    },
    {
        id: 3,
        nombre: 'Programación orientada a objetos', 
        duracion: 80,
        valor: 80000
    }
];

// Función que permite listar los cursos disponibles, desplegando cada curso cada dos segundos
let listarCursos = () => {
    let i = 1;

    // Ciclo para imprimir los cursos disponibles
    for(let curso of cursos){    
        setTimeout(() => {
            console.log('Id: ' + curso.id + ' el curso se llama ' + curso.nombre + ' tiene una duración de ' + curso.duracion + ' horas y un valor de $' + curso.valor);
        }, i++*2000);
    }
};

module.exports = {
    cursos,
    listarCursos
};
