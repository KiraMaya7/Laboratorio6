function mostrarInfo(sede) {
    const info = {
        paris: `
            <p>Los Juegos Olímpicos de París 2024 marcaron la tercera vez que la capital francesa acogía este magno evento de verano, coincidiendo con el centenario de los Juegos de París 1924. Se distinguieron por un fuerte enfoque en la sostenibilidad, utilizando en gran medida sedes existentes y temporales, y por una innovadora ceremonia de apertura que tuvo lugar a lo largo del río Sena, en lugar del tradicional estadio. El programa olímpico incluyó el debut del breaking como nuevo deporte, mientras que el surf se celebró en Teahupo'o, Tahití (Polinesia Francesa). París 2024 también fue notable por alcanzar una igualdad de género total en cuanto a la cuota de atletas. Participaron alrededor de 10,500 atletas de más de 200 Comités Olímpicos Nacionales, además del Equipo Olímpico de Refugiados.</p>
        `,
        tokyo: `
            <p>Los Juegos Olímpicos de Tokio 2020 se celebraron en un contexto sin precedentes debido a la pandemia global de COVID-19. La mayoría de los eventos se llevaron a cabo sin espectadores y bajo estrictos protocolos sanitarios. A pesar de los desafíos, los Juegos simbolizaron la resiliencia y la unidad global. Se introdujeron nuevos deportes como el skateboarding, la escalada deportiva, el surf y el karate, mientras que el béisbol y el sóftbol regresaron al programa olímpico. Participaron aproximadamente 11,000 atletas de más de 200 Comités Olímpicos Nacionales y el Equipo Olímpico de Refugiados.</p>
        `,
        rio: `
            <p>Los Juegos Olímpicos de Río 2016 fueron los primeros celebrados en América del Sur. El evento trajo de vuelta el golf al programa olímpico después de 112 años y vio el debut del rugby sevens. Estos Juegos fueron escenario de actuaciones memorables, incluyendo las últimas participaciones olímpicas de leyendas como el nadador Michael Phelps y el velocista Usain Bolt, así como el deslumbrante debut de la gimnasta Simone Biles. A pesar de las preocupaciones previas relacionadas con el virus del Zika y la situación sociopolítica de Brasil, los Juegos se desarrollaron con éxito. Contaron con la participación de más de 11,000 atletas de 207 Comités Olímpicos Nacionales, incluyendo el debut de Kosovo y Sudán del Sur, y la primera aparición del Equipo Olímpico de Refugiados.</p>
        `,
        futbol: `
        <ul>
            <li><strong>Masculino:</strong> El fútbol masculino ha sido parte del programa olímpico de forma casi continua desde los Juegos de París 1900 (aunque su estatus como evento oficial del COI en las primeras ediciones es debatido, consolidándose en Londres 1908). Ha estado presente en todos los Juegos de Verano excepto en Los Ángeles 1932.</li>
            <li><strong>Femenino:</strong> El torneo de fútbol femenino se introdujo mucho más tarde, en los Juegos de Atlanta 1996.</li>
        </ul>
        `,
        baloncesto: `
        <ul>
            <li><strong>Masculino:</strong> El baloncesto masculino fue introducido como deporte oficial en los Juegos Olímpicos de Berlín 1936, aunque ya había sido un deporte de demostración en San Luis 1904.</li>
            <li><strong>Femenino:</strong> El torneo femenino se añadió en los Juegos de Montreal 1976.</li>
        </ul>
        `,
        criquet: `
        <p>La reincorporación del críquet después de 128 años es significativa, impulsada por la enorme popularidad global del deporte, especialmente en los países de la Commonwealth (como India, Australia, Inglaterra, Pakistán, entre otros) y su creciente atractivo en nuevos mercados. El formato T20, más corto y dinámico, se considera ideal para el programa olímpico.</p>
        `,
        judo: `
        <p>El 30 de julio de 2024, durante los Juegos Olímpicos de París 2024, Awiti pasó a la historia al convertirse en la primera atleta mexicana en ganar una medalla olímpica en la disciplina del judo, consiguiendo la plata tras caer en la final contra la eslovena Andreja Leški.</p>
        `,
        clavados: `
        <p>Osmar Olvera Ibarra (Ciudad de México, 5 de junio de 2004) es un clavadista mexicano, ganador de la medalla de plata en el trampolín de 3 m sincronizado y medalla de bronce en trampolín de 3 m individual en los Juegos Olímpicos de París 2024.</p>
        `,
        arco: `
        <p>Alejandra Valencia Trujillo (Hermosillo, Sonora, México, 17 de octubre de 1994) es una atleta mexicana especializada en tiro con arco. Es medallista de bronce en los Juegos Olímpicos de Tokio 2020 y en los Juegos Olímpicos de París 2024, tres veces medalla de oro en los Juegos Panamericanos y medallista de Plata en el Campeonato Mundial de Berlín 2023. Recibió el Premio Nacional del Deporte 2023</p>
        `
    };

    document.getElementById('modalContent').innerHTML = info[sede] || 'Información no disponible';
    const modal = new bootstrap.Modal(document.getElementById('modalInfo'));
    modal.show();
}
