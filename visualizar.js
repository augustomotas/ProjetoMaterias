// Aguarda a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // --- COPIE SEUS DADOS DAS MATRIZES AQUI ---
    // Copie as constantes 'matriz2008' e 'matriz2023' do seu arquivo script.js para cá
    const matriz2008 = [
        { codigo: 'MAT101', nome: 'Cálculo I', preRequisitos: [], periodo: 1 },
        // ... cole o resto da sua matriz 2008 aqui
    ];
    
    const matriz2023 = [
        { codigo: 'IEC', nome: 'Introdução à Engenharia de Computação', preRequisitos: [], periodo: 1 },
        // ... cole o resto da sua matriz 2023 aqui
    ];

    // Função principal que renderiza a matriz na tela
    function renderizarVisualizacao() {
        const container = document.querySelector('.materias-container');
        const tituloPagina = document.getElementById('titulo-matriz');
        if (!container || !tituloPagina) return;

        // Pega o parâmetro da URL para decidir qual matriz mostrar
        const params = new URLSearchParams(window.location.search);
        const qualMatriz = params.get('matriz'); // Vai ser '2008' ou '2023'

        const dadosDaMatriz = qualMatriz === '2023' ? matriz2023 : matriz2008;
        tituloPagina.textContent = `Matriz Curricular de ${qualMatriz || '2008'}`;

        container.innerHTML = '';
        
        // Agrupa as matérias por período
        const periodos = {};
        dadosDaMatriz.forEach(materia => {
            if (!periodos[materia.periodo]) {
                periodos[materia.periodo] = [];
            }
            periodos[materia.periodo].push(materia);
        });

        // Ordena os períodos
        const periodosOrdenados = Object.keys(periodos).sort((a, b) => {
            if (a === 'Optativas') return 1;
            if (b === 'Optativas') return -1;
            return parseInt(a) - parseInt(b);
        });

        // Cria os cards para cada período
        periodosOrdenados.forEach(periodo => {
            const periodoBox = document.createElement('div');
            periodoBox.classList.add('periodo-box');

            const tituloPeriodo = document.createElement('h2');
            tituloPeriodo.textContent = periodo === 'Optativas' ? 'Disciplinas Optativas' : `Período ${periodo}`;
            periodoBox.appendChild(tituloPeriodo);

            const listaMaterias = document.createElement('div');
            listaMaterias.classList.add('lista-materias');

            periodos[periodo].forEach(materia => {
                const item = document.createElement('div');
                item.classList.add('materia-item');
                
                // A GRANDE DIFERENÇA: Criamos um item de texto simples, sem checkbox
                const nomeMateria = document.createElement('span');
                nomeMateria.textContent = materia.nome;
                item.appendChild(nomeMateria);
                
                listaMaterias.appendChild(item);
            });

            periodoBox.appendChild(listaMaterias);
            container.appendChild(periodoBox);
        });
    }

    // Chama a função para renderizar tudo
    renderizarVisualizacao();

    // Inicia as partículas (código opcional para o fundo animado)
    window.dispatchEvent(new Event('load'));
});