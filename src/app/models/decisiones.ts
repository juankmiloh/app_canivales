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
        siguienteDecision: 'decision2',
        tipoDecision: 'En curso',
        progreso: 10
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
        siguienteDecision: 'decision3',
        tipoDecision: 'En curso',
        progreso: 15
    },
    decision3: {
        titulo: 'Decisión 3',
        imagen: '/assets/decision3.png',
        descripcion: 'Los personajes están libres, ¿Qué deberían hacer?',
        opciones: [
            {
                opcion: 'Realizar un plan entre ellos'
            },
            {
                opcion: 'Pelear con los Caníbales'
            },
            {
                opcion: 'Ir por algo de comer'
            }
        ],
        respuesta: 'Realizar un plan entre ellos',
        siguienteDecision: 'decision4',
        tipoDecision: 'En curso',
        progreso: 20
    },
    decision4: {
        titulo: 'Decisión 4',
        imagen: '/assets/decision5.png',
        descripcion: 'Al momento de realizar el plan, el hombre que conoce la zona decide...',
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
        siguienteDecision: 'decision5',
        tipoDecision: 'En curso',
        progreso: 30
    },
    decision5: {
        titulo: 'Decisión 5',
        imagen: '/assets/decision4.png',
        descripcion: 'Con el mapa de la región, ¿Qué deberían hacer?',
        opciones: [
            {
                opcion: 'Buscar algo de cenar'
            },
            {
                opcion: 'Conocer la ruta de escape'
            },
            {
                opcion: 'Conocer el hospedaje de los caníbales'
            }
        ],
        respuesta: 'Conocer la ruta de escape',
        siguienteDecision: 'decision6',
        tipoDecision: 'En curso',
        progreso: 40
    },
    decision6: {
        titulo: 'Decisión 6',
        imagen: '/assets/decision6.png',
        descripcion: '¿Qué deberían tener en cuenta al conocer la ruta de escape?',
        opciones: [
            {
                opcion: 'Si hay caníbales guardianes o vigilantes'
            },
            {
                opcion: 'Si existen medios de transporte modernos'
            },
            {
                opcion: 'Si pueden dividirse y escapar por separado'
            }
        ],
        respuesta: 'Si hay caníbales guardianes o vigilantes',
        siguienteDecision: 'decision7',
        tipoDecision: 'En curso',
        progreso: 50
    },
    decision7: {
        titulo: 'Decisión 7',
        imagen: '/assets/decision7.png',
        descripcion: 'Al conocer la ruta y los obstaculos para escapar, ¿Qué deberían hacer?',
        opciones: [
            {
                opcion: 'Volver a la celda y dormir un rato'
            },
            {
                opcion: 'Escapar durante la tarde luego de la hora del almuerzo'
            },
            {
                opcion: 'Ejecutar el plan de escape ahora mismo'
            }
        ],
        respuesta: 'Ejecutar el plan de escape ahora mismo',
        siguienteDecision: 'decision8',
        tipoDecision: 'En curso',
        progreso: 60
    },
    decision8: {
        titulo: 'Decisión 8',
        imagen: '/assets/decision8.png',
        descripcion: 'Si aún quedan algunos caníbales despiertos y muchos otros haciendo guardía, ellos deberían...',
        opciones: [
            {
                opcion: 'Planear una estrategía para engañarlos'
            },
            {
                opcion: 'Jugar ajedrez con ellos'
            },
            {
                opcion: 'Tener una charla cálida y amable con ellos'
            }
        ],
        respuesta: 'Planear una estrategía para engañarlos',
        siguienteDecision: 'decision9',
        tipoDecision: 'En curso',
        progreso: 70
    },
    decision9: {
        titulo: 'Decisión 9',
        imagen: '/assets/decision9.png',
        descripcion: 'Dentro de la estrategia se acercan al cadaver del guía y deciden...',
        opciones: [
            {
                opcion: 'Comérselo'
            },
            {
                opcion: 'Pelear con los caníbales'
            },
            {
                opcion: 'Rociarle Quipitos'
            }
        ],
        respuesta: 'Rociarle Quipitos',
        siguienteDecision: 'decision10',
        tipoDecision: 'En curso',
        progreso: 80
    },
    decision10: {
        titulo: 'Decisión 10',
        imagen: '/assets/decision10.png',
        descripcion: 'Dentro de la estrategia de engaño, ¿Cuál sería el siguiente paso?',
        opciones: [
            {
                opcion: 'Grabar en ese escenario el siguiente comercial de Quipitos'
            },
            {
                opcion: 'Salir corriendo del área'
            },
            {
                opcion: 'Tentar a los caníbales a probar los Quipitos'
            }
        ],
        respuesta: 'Tentar a los caníbales a probar los Quipitos',
        siguienteDecision: 'decision11',
        tipoDecision: 'En curso',
        progreso: 90
    },
    decision11: {
        titulo: 'Decisión 11',
        imagen: '/assets/decision11_1.png',
        descripcion: 'Los caníbales se ven sorprendidos por los Quipitos pensando que están envenenados, el siguiente paso es:',
        opciones: [
            {
                opcion: 'Persuadir a los caníbales de un verdadero envenenamiento'
            },
            {
                opcion: 'Explicarles que todo es una estrategia para escapar'
            },
            {
                opcion: 'Compartir más Quipitos y pasar un momento agradable'
            }
        ],
        respuesta: 'Persuadir a los caníbales de un verdadero envenenamiento',
        siguienteDecision: 'decisionBuena',
        tipoDecision: 'Final',
        progreso: 95
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
        siguienteDecision: 'decision1'
    }
};
