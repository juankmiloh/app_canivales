export const modelDecisiones = {
    decision1: {
        titulo: 'Decisión 1',
        imagen: '/assets/prisioneros.png',
        descripcion: 'Los personajes se encuentran prisioneros, ¿Desea abrir la puerta?',
        opciones: [
            {
                opcion: 'Si'
            },
            {
                opcion: 'No'
            }
        ],
        respuesta: 'Si',
        decision: 'decision2',
        progreso: 30
    },
    decision2: {
        titulo: 'Decisión 2',
        imagen: '/assets/herramienta.png',
        descripcion: 'Seleccione una herramienta para abrir la puerta',
        opciones: [
            {
                opcion: 'Cuchara'
            },
            {
                opcion: 'Mano'
            },
            {
                opcion: 'Pie'
            }
        ],
        respuesta: 'Cuchara',
        decision: 'decision3',
        progreso: 60
    },
    decision3: {
        titulo: 'Decisión 3',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Los personajes están libres, por tanto se acercan al cadaver del guía y deciden...',
        opciones: [
            {
                opcion: 'Comerselo'
            },
            {
                opcion: 'Pelear con los canívales'
            },
            {
                opcion: 'Rociarle quipitos'
            }
        ],
        respuesta: 'Rociarle quipitos',
        decision: 'decision4',
        progreso: 70
    },
    decision4: {
        titulo: 'Decisión 4',
        imagen: '/assets/',
        descripcion: 'otra decision',
        opciones: [
            {
                opcion: 'Comerselo'
            },
            {
                opcion: 'Pelear con los canívales'
            }
        ],
        respuesta: 'Comerselo',
        decision: 'decisionBuena',
        progreso: 80
    },
    decisionBuena: {
        titulo: 'Felicitaciones, sobreviviste!!!',
        imagen: '/assets/ganador.jpg',
        opciones: [
            {
                opcion: 'Guardar'
            }
        ],
        respuesta: 'Guardar',
        progreso: 100
    },
    decisionMuerte: {
        titulo: 'Mala decisión',
        imagen: '/assets/muerto.jpg',
        opciones: [
            {
                opcion: 'Reintentar'
            }
        ],
        respuesta: 'Reintentar',
        decision: 'decision1'
    }
};
