function mostrarInfo(key) {
    const info = {

            
        // Para index.html
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
        futbol: `
            <h5>Fútbol Olímpico</h5>
            <ul>
                <li><strong>Masculino:</strong> Presente desde París 1900</li>
                <li><strong>Femenino:</strong> Introducido en Atlanta 1996</li>
            </ul>
        `,
        baloncesto: `
            <h5>Baloncesto Olímpico</h5>
            <ul>
                <li><strong>Masculino:</strong> Desde Berlín 1936</li>
                <li><strong>Femenino:</strong> Desde Montreal 1976</li>
            </ul>
        `,
        criquet: `
            <h5>Críquet</h5>
            <p>Reintroducido en París 2024 después de 128 años. Formato T20 para mayor dinamismo.</p>
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