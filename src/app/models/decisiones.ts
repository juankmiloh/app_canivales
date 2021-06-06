export const modelDecisiones = {
    decision0: {
        titulo: 'Decision 0',
        imagen: '/assets/decision0.jpg',
        descripcion: '¿Cuá es el  mejor momento para huir?',
        opciones: [
            {
                opcion: 'En la tarde, ya que la mujer tiene problemas de visión'
            },
            {
                opcion: 'En la noche, dado que el hombre que sabe de supervivencia es obeso'
            },
            {
                opcion: 'Al amanecer, dado que hay luz tenue y los canibales se encuentran en su nivel mas profundo de sueño'
            }
        ],
        respuesta: 'Al amanecer, dado que hay luz tenue y los canibales se encuentran en su nivel mas profundo de sueño',
        respuesta2: 'En la noche, dado que el hombre que sabe de supervivencia es obeso',
        siguienteDecision: 'decision1',
        siguienteDecision2: 'decision17',
        tipoDecision: 'En curso',
        progreso: 6
    },
    decision1: {
        titulo: 'Decisión 1',
        imagen: '/assets/decision1.jpg',
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
        progreso: 12
    },
    decision2: {
        titulo: 'Decisión 2',
        imagen: '/assets/decision2.png',
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
        progreso: 18
    },
    decision3: {
        titulo: 'Decisión 3',
        imagen: '/assets/decision3.jpg',
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
        progreso: 24
    },
    decision4: {
        titulo: 'Decisión 4',
        imagen: '/assets/decision4.jpg',
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
        imagen: '/assets/decision5.jpg',
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
        progreso: 36
    },
    decision6: {
        titulo: 'Decisión 6',
        imagen: '/assets/decision6.jpg',
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
        progreso: 42
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
        progreso: 48
    },
    decision8: {
        titulo: 'Decisión 8',
        imagen: '/assets/decision8.jpg',
        descripcion: 'Aún quedan algunos caníbales despiertos y muchos otros haciendo guardía, ellos deberían...',
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
        progreso: 54
    },
    decision9: {
        titulo: 'Decisión 9',
        imagen: '/assets/decision9.jpg',
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
        progreso: 60
    },
    decision10: {
        titulo: 'Decisión 10',
        imagen: '/assets/decision10.jpg',
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
        progreso: 66
    },

    decision11: {
        titulo: 'Decisión 11',
        imagen: '/assets/decision11.jpg',
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
        siguienteDecision: 'decision12',
        tipoDecision: 'En curso',
        progreso: 72
    },
    decision12: {
        titulo: 'Decisión 12',
        imagen: '/assets/decision12.jpg',
        descripcion: 'La mujer y el traductor logran persuadir a los canibales salir del refugio de la tribu acompañados de un miembro de la tribu ¿hacia donde se dirigen?',
        opciones: [
            {
                opcion: 'Se dirigen a un punto de encuentro previamente acordado al revisar el mapa de la region'
            },
            {
                opcion: 'Se dirigen a buscar la cura del envenenamiento'
            },
            {
                opcion: 'Se van corriendo en circulos'
            }
        ],
        respuesta: 'Se dirigen a un punto de encuentro previamente acordado al revisar el mapa de la region',
        siguienteDecision: 'decision13',
        tipoDecision: 'En curso',
        progreso: 78
    },
    decision13: {
        titulo: 'Decisión 13',
        imagen: '/assets/decision13.png',
        descripcion: 'Mientras tanto el hombre que sabe supervivencia y el hombre que conoce la zona son encerrados de nuevo, ¿cual sera la nueva estrategia de escape?',
        opciones: [
            {
                opcion: 'Convertirse en amigos de la tribu para que les de comida '
            },
            {
                opcion: 'Esperar a que regresen los compañeros '
            },
            {
                opcion: 'Esperar que caiga la noche y proyectar sombras con una linterna y disuadir a la tribu'
            }
        ],
        respuesta: 'Esperar que caiga la noche y proyectar sombras con una linterna y disuadir a la tribu',
        siguienteDecision: 'decision14',
        tipoDecision: 'En curso',
        progreso: 84
    },
    decision14: {
        titulo: 'Decisión 14',
        imagen: '/assets/decision14.jpg',
        descripcion: 'La tribu vio las sombras y salio del refugio a revisar con quien se encontraba , ¿cual es el siguiente paso de los capturados?',
        opciones: [
            {
                opcion: 'Salir de la jaula y comer un poco'
            },
            {
                opcion: 'Abrir la puerta de nuevo con la cuchara y correr en direccion opuesta donde esta la tribu'
            },
            {
                opcion: 'Esperar a que regresen los compañeros'
            }
        ],
        respuesta: 'Abrir la puerta de nuevo con la cuchara y correr en direccion opuesta donde esta la tribu',
        siguienteDecision: 'decision15',
        tipoDecision: 'En curso',
        progreso: 90
    },
    decision15: {
        titulo: 'Decisión 15',
        imagen: '/assets/decision15.jpg',
        descripcion: 'Los hombres han logrado escapar hacia donde se dirigen',
        opciones: [
            {
                opcion: 'Se dirigen al punto de encuentro con los otros compañeros'
            },
            {
                opcion: 'Al infinito y mas alla'
            },
            {
                opcion: 'Volveran a la jaula '
            }
        ],
        respuesta: 'Se dirigen al punto de encuentro con los otros compañeros',
        siguienteDecision: 'decision16',
        tipoDecision: 'En curso',
        progreso: 96
    },
    decision16: {
        titulo: 'Decisión 16',
        imagen: '/assets/decision16.jpg',
        descripcion: 'Los hombres estan cerca del punto de encuentro pero alcanzan a ver que a sus compañeros aun los acompaña el miembro de la tribu ¿Como lograran escapar?',
        opciones: [
            {
                opcion: 'Huyendo únicamente ellos 2'
            },
            {
                opcion: 'Sobornando al hombre de la tribu'
            },
            {
                opcion: 'Asesinando al hombre de la tribu y siguiendo el plan de escape'
            }
        ],
        respuesta: 'Asesinando al hombre de la tribu y siguiendo el plan de escape',
        siguienteDecision: 'decisionBuena',
        tipoDecision: 'Final',
        progreso: 99
    },


    decision17: {
        titulo: 'Decisión 1',
        imagen: '/assets/decision1_alternativa.png',
        descripcion: 'Es de noche y despues de abrir la puerta de la celda un guardia los descubre que deben hacer ? ',
        opciones: [
            {
                opcion: 'Lo asesinan y continuan su escape'
            },
            {
                opcion: 'El hombre que sabe el lenguaje se pone a hablar con el mientras los demas escapan'
            },
            {
                opcion: 'Regresan a su celda '
            }
        ],
        respuesta: 'Lo asesinan y continuan su escape',
        siguienteDecision: 'decision18',
        tipoDecision: 'En curso',
        progreso: 20
    },

    
    decision18: {
        titulo: 'Decisión 2',
        imagen: '/assets/decision2_alternativa.png',
        descripcion: 'Para continuar su escape  que crees que deberia hacer con el cuerpo del guardia ? ',
        opciones: [
            {
                opcion: 'Enterrarlo con Dios manda'
            },
            {
                opcion: 'Dejarlo a la entrada de la celda con una nota , escrita por el hombre que sabe el idioma de la tribu'
            },
            {
                opcion: 'La mujer que sabe medicina , decide hacerle una pequeña curación'
            }
        ],
        respuesta: 'Dejarlo a la entrada de la celda con una nota , escrita por el hombre que sabe el idioma de la tribu',
        siguienteDecision: 'decision19',
        tipoDecision: 'En curso',
        progreso: 40
    },

 
    decision19: {
        titulo: 'Decisión 3',
        imagen: '/assets/decision3_alternativa.png',
        descripcion: 'Que nota crees qeu deberian dejarle? ',
        opciones: [
            {
                opcion: 'Una oración'
            },
            {
                opcion: 'Unas disculpas lementando el hecho'
            },
            {
                opcion: 'Una amenaza para que no intenten seguirlos y le rocian Quipitos como prueba de su arma'
            }
        ],
        respuesta: 'Una amenaza para que no intenten seguirlos y le rocian Quipitos como prueba de su arma',
        siguienteDecision: 'decision20',
        tipoDecision: 'En curso',
        progreso: 60
    },
    
    decision20: {
        titulo: 'Decisión 4',
        imagen: '/assets/decision4_alternativa.png',
        descripcion: 'Estan  a punto de salir de area de los canibales y el hombre que conoce la zona ,sufre un episodio de Alzhéimer, que deben hacer? ',
        opciones: [
            {
                opcion: 'Sentarse a esperar que se le pase'
            },
            {
                opcion: 'Regresar y preguntar la salida'
            },
            {
                opcion: 'Continuar avanzando  en direccion opuesta a la tribu'
            }
        ],
        respuesta:  'Continuar avanzando  en direccion opuesta a la tribu',
        siguienteDecision: 'decision21',
        tipoDecision: 'En curso',
        progreso: 70
    },

    
    decision21: {
        titulo: 'Decisión 5',
        imagen: '/assets/decision5_alternativa.png',
        descripcion: 'La mujer, que tiene poca vision , cae en un hueco que  deberian hacer ',
        opciones: [
         
            {
                opcion: 'El hombre que sabe de subervivencia idear un lazo para sacarla'
            },
            {
                opcion: 'Matarla y seguir el camino'
            }
        ],
        respuesta:  'El hombre que sabe de subervivencia idear un lazo para sacarla',
        respuesta2:  'Matarla y seguir el camino',
        siguienteDecision: 'decision22',
        siguienteDecision2: 'decision23',
        tipoDecision: 'En curso',
        progreso: 77
    },



    decision22: {
        titulo: 'Decisión 6',
        imagen: '/assets/decision6_alternativa2.png',
        descripcion: 'Hacen mucho ruido al sacar a la mujer de hueco y son descubiertos por un miembro de la tribu. que deben hacer? ',
        opciones: [
            {
                opcion: 'La mujer con sus encantos y el hombre que sabe la lengua tratar de persuadir al miembro de la tribu'
            },
            {
                opcion: 'Tratar de huir lo mar  rapido posible'
            }
        ],
        respuesta:  'La mujer con sus encantos y el hombre que sabe la lengua tratar de persuadir al miembro de la tribu',
        siguienteDecision: 'decision13',
        tipoDecision: 'En curso',
        progreso: 78
    },

    decision23: {
        titulo: 'Decisión 6',
        imagen: '/assets/decision6_alternativa.png',
        descripcion: 'Despues de matar a la mujer para evitar que se quedara gritando .  Que deben hacer',
        opciones: [
            {
                opcion: ' Llorar y culparse por lo sucedido'
            },
            {
                opcion: 'Rociarle  el  resto de quipitos como continuacion de la amenaza y  seguir su camino'
            }
         
        ],
        respuesta: 'Rociarle  el  resto de quipitos como continuacion de la amenaza y  seguir su camino',
        siguienteDecision: 'decisionBuena',
        tipoDecision: 'Final',
        progreso: 99
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
        siguienteDecision: 'decision0'
    }
};
