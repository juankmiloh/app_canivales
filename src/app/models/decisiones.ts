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
        descripcion: 'Los personajes están libres, ¿Qué deben hacer?',
        opciones: [
            {
                opcion: 'Realizar un plan entre ellos'
            },
            {
                opcion: 'Pelear con los canívales'
            },
            {
                opcion: 'Ir por algo de comer'
            }
        ],
        respuesta: 'Realizar un plan entre ellos',
        decision: 'decisionBuena',
        progreso: 80
    },
    decision4: {
        titulo: 'Decisión 4',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Al realizar el plan <nombre> decide...',
        opciones: [
            {
                opcion: 'Dormir un rato'
            },
            {
                opcion: 'Hablar de historias del pasado'
            },
            {
                opcion: 'Mostrarles el mapa de la región'
            }
        ],
        respuesta: 'Mostrarles el mapa de la región',
        decision: 'decisionBuena',
        progreso: 80
    },
    decision5: {
        titulo: 'Decisión 5',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Con el mapa de la región, ¿Qué deberían hacer?',
        opciones: [
            {
                opcion: 'Buscar algo de cenar'
            },
            {
                opcion: 'Conocer la ruta de escape'
            },
            {
                opcion: 'Conocer el hospedaje de los canívales'
            }
        ],
        respuesta: 'Conocer la ruta de escape',
        decision: 'decisionBuena',
        progreso: 80
    },
    decision6: {
        titulo: 'Decisión 6',
        imagen: '/assets/decision3.jpg',
        descripcion: '¿Qué deberían tener en cuenta al concoer la ruta de escape?',
        opciones: [
            {
                opcion: 'Sí hay canívales de guardias'
            },
            {
                opcion: 'Sí existen medios de transporte modernos'
            },
            {
                opcion: 'Sí pueden dividirse y escapar por separado'
            }
        ],
        respuesta: 'Sí hay canívales de guardias',
        decision: 'decisionBuena',
        progreso: 80
    },
    decision7: {
        titulo: 'Decisión 7',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Al conocer la ruta y los obstaculos para escapar, ¿Qué deberían hacer?',
        opciones: [
            {
                opcion: 'Volver a la celda y dormir un rato'
            },
            {
                opcion: 'Escapar durante la tarde luego de la hora del almuerzo'
            },
            {
                opcion: 'Escapar ahora mismo'
            }
        ],
        respuesta: 'Escapar ahora mismo',
        decision: 'decisionBuena',
        progreso: 80
    },
    decision8: {
        titulo: 'Decisión 8',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Sí aún quedan algunos canívales despiertos y muchos otros haciendo guardía, ellos deberían...',
        opciones: [
            {
                opcion: 'Planear una estrategia para engañarlos'
            },
            {
                opcion: 'Jugar ajedrez con ellos'
            },
            {
                opcion: 'Tener una charla cálida y amable con ellos'
            }
        ],
        respuesta: 'Planear una estrategía para engañarlos',
        decision: 'decisionBuena',
        progreso: 80
    },
    decision9: {
        titulo: 'Decisión 9',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Dentro de la estrategia se acercan al cadaver del guía y deciden...',
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
        decision: 'decisionBuena',
        progreso: 80
    },
    decision10: {
        titulo: 'Decisión 10',
        imagen: '/assets/decision3.jpg',
        descripcion: 'Dentro de la estrategia de engaño, ¿Cuál sería el siguiente paso?',
        opciones: [
            {
                opcion: 'Grabar en ese escenario el siguiente comercial de Kipitos'
            },
            {
                opcion: 'Salir corriendo del área'
            },
            {
                opcion: 'Tentar a los canívales a probar los Kipitos'
            }
        ],
        respuesta: 'Tentar a los canívales a probar los Kipitos',
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
