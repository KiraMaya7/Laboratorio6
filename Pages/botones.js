function mostrarInfo(key) {
    const info = {

            
        // Para index.html
        rio: `
            <p>Los Juegos Olímpicos de Río 2016 fueron los primeros celebrados en América del Sur. El evento trajo de vuelta el golf al programa olímpico después de 112 años y vio el debut del rugby sevens. Estos Juegos fueron escenario de actuaciones memorables, incluyendo las últimas participaciones olímpicas de leyendas como el nadador Michael Phelps y el velocista Usain Bolt, así como el deslumbrante debut de la gimnasta Simone Biles.</p>
        `,
        tokyo: `
            <p>Los Juegos Olímpicos de Tokio 2020 se celebraron en un contexto sin precedentes debido a la pandemia global de COVID-19. La mayoría de los eventos se llevaron a cabo sin espectadores y bajo estrictos protocolos sanitarios. A pesar de los desafíos, los Juegos simbolizaron la resiliencia y la unidad global.</p>
        `,
        londres: `
            <p>Los Juegos Olímpicos de Londres 2012 marcaron la tercera vez que la capital británica albergaba los Juegos Olímpicos de Verano. Destacaron por su enfoque en la sostenibilidad y la innovación, con el icónico Estadio Olímpico y el legado de regeneración urbana en East London.</p>
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