function mostrarInfo(key) {
    const info = {
        // Para index.html
        rio:`
        Los Juegos Olímpicos de Río de Janeiro 2016 se celebraron del 5 al 21 de agosto, siendo la primera vez que este evento tuvo lugar en Sudamérica. Participaron más de 11,000 atletas de 207 países en 306 eventos de 28 deportes. Estados Unidos lideró el medallero con 46 oros, destacando figuras como Michael Phelps, quien alcanzó un total de 28 medallas olímpicas, y Simone Biles, que ganó cuatro oros en gimnasia. Usain Bolt completó su "triple triple" al ganar oro en 100m, 200m y relevo 4x100m por tercera vez consecutiva.
        `,
        tokyo:`
        Los Juegos Olímpicos de Tokio 2020 se celebraron del 23 de julio al 8 de agosto de 2021, tras ser pospuestos un año debido a la pandemia de COVID-19. Contaron con la participación de 11,420 atletas de 206 países en 339 eventos de 33 deportes, incluyendo nuevos como skateboarding, escalada deportiva, surf y kárate.Estados Unidos lideró el medallero con 39 oros, seguido por China y Japón. Destacaron Simone Biles en gimnasia, quien priorizó su salud mental, y el podio más joven en la historia olímpica en skateboarding femenino, con atletas de 13 y 16 años.Los Juegos fueron reconocidos por su enfoque en la sostenibilidad, utilizando medallas hechas de materiales reciclados y camas de cartón reciclable para los atletas.
        `,
        londres:`
        Los Juegos Olímpicos de Londres 2012 se celebraron del 27 de julio al 12 de agosto, con la participación de 10,568 atletas de 204 países en 302 eventos de 36 deportes. Fueron los primeros en los que todas las delegaciones incluyeron al menos una mujer, y debutó el boxeo femenino como disciplina olímpica.Las ceremonias de apertura y clausura fueron espectaculares, con la participación de la reina Isabel II y artistas como Paul McCartney y las Spice Girls. El pebetero olímpico, diseñado por Thomas Heatherwick, consistía en 204 pétalos de cobre que representaban a cada nación participante.
        `,
        paris:`
        Las Olimpiadas de París 2024 se celebraron del 26 de julio al 11 de agosto de 2024 en París, Francia, marcando el regreso de los Juegos Olímpicos a la capital francesa después de un siglo. Fueron la 33ª edición de los Juegos Olímpicos de Verano, con la participación de 32 deportes, entre ellos el debut del breakdance como disciplina olímpica.

La ceremonia de apertura se realizó sobre el río Sena, un evento espectacular que ofreció un escenario único al aire libre, destacándose como una de las ceremonias más innovadoras de la historia olímpica. París 2024 también fue destacada por su enfoque en la sostenibilidad, ya que se implementaron medidas para minimizar el impacto ambiental, como el uso de instalaciones temporales y la renovación de infraestructuras existentes.

En cuanto a los resultados, Estados Unidos, China y Rusia dominaron el medallero, mientras que Francia, como país anfitrión, logró un rendimiento destacado, especialmente en disciplinas como el ciclismo y el judo. París 2024 también fue una edición notable por su énfasis en la paridad de género, con casi un 50% de atletas mujeres, y por sus esfuerzos para ser más inclusiva en cuanto a la participación de atletas paralímpicos.
        `,    
        // Para Pagina4.html
        Antiguos: `
            <p>Las primeras Olimpíadas se celebraron a partir del año 776 a. C. en la primera luna llena después del solsticio de verano (hacia mediados de julio) en honor a Zeus. El vencedor de la primera y única prueba, la carrera a pie del stadion, fue Koroibos de Elis y, a partir de entonces, se registraron todos los vencedores y se dio nombre a cada olimpíada, lo que nos proporcionó la primera cronología exacta del mundo griego antiguo. Una olimpíada no solo era el nombre del evento en sí, sino también del período entre los juegos. Durante una tregua panhelénica de tres meses, los atletas y hasta 40 000 espectadores venían de toda Grecia para participar en los Juegos de Olimpia. Más tarde, se organizarían otros juegos en otros lugares sagrados como Delfos, Istmia y Nemea, pero los Juegos Olímpicos seguirían siendo los más prestigiosos.</p>
        `,
        Modernos: `
            <h5>El renacimiento de los Juegos Olímpicos</h5>
            <p>Transcurrieron 15 siglos hasta que a finales del siglo XIX, la insistencia de Pierre de Frédy, barón de Coubertin, consiguió poner de nuevo en el mapa a los Juegos Olímpicos. Este noble francés se interesó desde muy joven por la historia, la educación y el deporte, y fue en el Instituto Parisino de Estudios Políticos (Sciences Po) donde se le ocurrió unir sus tres pasiones y revivir esta antigua tradición de la cultura griega. En junio de 1894, la Universidad de la Sorbona de París acogió un encuentro entre Coubertin y los representantes deportivos de 11 países. Este fue el germen que dio fruto a los planes de restauración de los Juegos Olímpicos modernos.</p>
        `,
        Simbolos: `
            <h5>Otros Símbolos</h5>
            <ul>
                <li><strong>Juramento Olímpico:</strong> Un discurso que pronuncian los atletas, los jueces y los entrenadores antes de la apertura de los Juegos, promoviendo los valores olímpicos.</li>
                <li><strong>Himno Olímpico:</strong> Una canción que se interpreta durante la ceremonia de apertura y cierre de los Juegos Olímpicos. </li>
                <li><strong>Corona de Olivos:</strong> Una tradición que se remonta a los Juegos Olímpicos de la antigüedad, otorgada a los ganadores de las competencias.</li>
            </ul>
        `,

        // Para Pagina2.html (Deportes)
        biatlon: `
            <p>Los atletas deben controlar su respiración y frecuencia cardíaca al máximo, ya que pasar del esfuerzo intenso del esquí al tiro requiere gran precisión.</p>
        `,
        bobsleigh: `
            <p>El equipo de Jamaica participó por primera vez en los Juegos Olímpicos de Invierno en 1988, y su historia inspiró la famosa película Cool Runnings.</p>
        `,
        combinada: `
            <p> Es el único deporte olímpico de invierno que aún no tiene participación femenina en los Juegos Olímpicos, aunque se han realizado competiciones femeninas a nivel internacional.</p>
        `,
        curling: `
            <p> Las piedras de curling están hechas de un granito especial que solo se encuentra en una isla de Escocia llamada Ailsa Craig.</p>
        `,
        esqui: `
            <p> En algunas pruebas, los atletas alcanzan alturas de hasta 20 metros en el aire durante los saltos.</p>
        `,
        alpino: `
            <p> Los esquiadores pueden alcanzar velocidades superiores a los 140 km/h, más rápido que muchos autos en carretera.</p>
        `,
        fondo: `
            <p> Es uno de los deportes más exigentes físicamente del mundo; los atletas pueden quemar más de 1,000 calorías por hora durante la competición.</p>
        `,
        hockey: `
            <p> El puck de hockey se congela antes de los partidos para reducir el rebote y aumentar la precisión en el juego.</p>
        `,
        luge: `
            <p> Es el deporte olímpico más rápido sin motor: los atletas pueden llegar a alcanzar velocidades superiores a los 140 km/h.</p>
        `,
        // Para Pagina3.html (Logros)
        judo: `
            <h5>Histórica Medalla en Judo</h5>
            <p>Awiti (México) ganó plata en París 2024, primera medalla mexicana en este deporte.</p>
        `,
        clavados: `
            <h5>Clavados</h5>
            <p>Osmar Olvera ganó plata y bronce en París 2024, consolidando a México como potencia.</p>
        `,
        arco: `
            <h5>Tiro con Arco</h5>
            <p>Alejandra Valencia obtuvo bronce en Tokio 2020 y París 2024, siendo referente mundial.</p>
        `
    };

    document.getElementById('modalContent').innerHTML = info[key] || 'Información no disponible';
    const modal = new bootstrap.Modal(document.getElementById('modalInfo'));
    modal.show();
}