export const modelDecisiones = {
    decision1: {
        titulo: 'Decisión 1',
        imagen: '/assets/carcel1.jpg',
        descripcion: 'Los personajes se encuentran encarcelados, ¿Desea abrir la puerta?',
        opciones: [
            {
                opcion: 'Si'
            },
            {
                opcion: 'No'
            }
        ],
        respuesta: 'Si',
        decision: 'decision2'
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
        decision: 'decision3'
    },
    decision3: {
        titulo: 'Decisión 3',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Los personajes están libres, por tanto se acercan al cadaver del guía y deciden...',
        opciones: [
            {
                opcion: 'Comerce al guía'
            },
            {
                opcion: 'Pelear con los canívales'
            },
            {
                opcion: 'Rociarle quipitos'
            }
        ],
        respuesta: 'Rociarle quipitos',
        decision: 'decisionBuena'
    },
    decisionBuena: {
        titulo: 'Sobreviviste, Felicitaciones!!!',
        imagen: '/assets/ganador.jpg',
        opciones: [
            {
                opcion: 'Salir'
            }
        ],
        respuesta: 'Salir'
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
