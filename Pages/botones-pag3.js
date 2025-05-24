function mostrarInfoMed(key) {
    const info = {

            
        // Primera fila
        clavados: `
            <p class="h5"><strong>Total de medallas: </strong>17</p>
            <ul>
                <li>🥇 1 oro</li>
                <li>🥈 8 platas</li>
                <li>🥉 8 bronces</li>
            </ul>
            <p>Es el deporte más exitoso de México en los Juegos Olímpicos. Ha generado medallas de forma constante desde Sídney 2000. México es reconocido a nivel mundial por la calidad técnica de sus clavadistas, y ha ocupado podios en pruebas individuales y sincronizadas.</p>
        `,
        boxeo: `
            <p class="h5"><strong>Total de medallas: </strong>14</p>
            <ul>
                <li>🥇 2 oro</li>
                <li>🥈 4 platas</li>
                <li>🥉 8 bronces</li>
            </ul>
            <p>México tiene una rica tradición boxística en el ámbito olímpico. La mayoría de sus medallas se obtuvieron entre 1932 y 1988. A pesar de la caída en logros recientes, el boxeo sigue siendo un pilar del deporte mexicano.</p>
        `,
        atletismo: `
            <p class="h5"><strong>Total de medallas: </strong>11</p>
            <ul>
                <li>🥇 3 oro</li>
                <li>🥈 6 platas</li>
                <li>🥉 2 bronces</li>
            </ul>
            <p>Las medallas se han conseguido principalmente en pruebas de marcha y maratón. Fue el deporte con el que México logró sus primeras medallas olímpicas (años 30) y ha tenido íconos de talla mundial en este campo.</p>
        `,

        // Segunda fila
        taekwondo: `
            <p class="h5"><strong>Total de medallas: </strong>7</p>
            <ul>
                <li>🥇 2 oro</li>
                <li>🥈 1 platas</li>
                <li>🥉 4 bronces</li>
            </ul>
            <p>Aunque es un deporte relativamente nuevo en los Juegos Olímpicos (debut oficial en Sídney 2000), ha sido muy fructífero para México. La continuidad en el alto rendimiento y programas juveniles lo mantienen como una apuesta segura para futuras medallas.</p>
        `,
        ecuestre: `
            <p class="h5"><strong>Total de medallas: </strong>7</p>
            <ul>
                <li>🥇 2 oro</li>
                <li>🥈 1 platas</li>
                <li>🥉 4 bronces</li>
            </ul>
            <p>Estas medallas fueron conseguidas entre los años 1932 y 1980, principalmente en doma y salto por equipos. México llegó a ser potencia en esta disciplina, destacando en los Juegos de Londres 1948 y México 1968.</p>
        `,
        halterofilia: `
            <p class="h5"><strong>Total de medallas: </strong>4</p>
            <ul>
                <li>🥇 1 oro</li>
                <li>🥈 0 platas</li>
                <li>🥉 3 bronces</li>
            </ul>
            <p>La medalla de oro obtenida por Soraya Jiménez en el año 2000 marcó historia al ser la primera mujer mexicana en lograrlo. Desde entonces, el país ha mantenido presencia competitiva en esta disciplina.</p>
        `,

        // tercera fila
        tiroarco: `
            <p class="h5"><strong>Total de medallas: </strong>4</p>
            <ul>
                <li>🥇 0 oro</li>
                <li>🥈 1 platas</li>
                <li>🥉 3 bronces</li>
            </ul>
            <p>Todas las medallas han sido obtenidas en competencias femeninas, destacando los equipos de mujeres por su coordinación y efectividad. Es un deporte en crecimiento en México, con programas juveniles muy activos.</p>
        `,
        natacion: `
            <p class="h5"><strong>Total de medallas: </strong>2</p>
            <ul>
                <li>🥇 1 oro</li>
                <li>🥈 0 platas</li>
                <li>🥉 1 bronces</li>
            </ul>
            <p>Aunque no es una potencia mundial en natación, el país logró su oro histórico en esta disciplina en 1968. Desde entonces ha habido participación constante pero sin llegar al podio.</p>
        `,
        futbol: `
            <p class="h5"><strong>Total de medallas: </strong>2</p>
            <ul>
                <li>🥇 1 oro</li>
                <li>🥈 0 platas</li>
                <li>🥉 1 bronces</li>
            </ul>
            <p>El fútbol dio a México uno de sus momentos más gloriosos en Londres 2012, al vencer a Brasil en la final. En Tokio 2020, la selección masculina volvió al podio con la medalla de bronce.</p>
        `
    };

    document.getElementById('modalContent').innerHTML = info[key] || 'Información no disponible';
    const modal = new bootstrap.Modal(document.getElementById('modalInfo'));
    modal.show();
}