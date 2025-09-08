// --- Seção 1: Base de Dados e Estado ---
// Base de dados das matérias com pré-requisitos
const materias = [
    { codigo: 'MAT101', nome: 'Cálculo I', preRequisitos: [] },
    { codigo: 'MAT102', nome: 'Cálculo II', preRequisitos: ['MAT101'] },
    { codigo: 'FIS201', nome: 'Física Geral I', preRequisitos: ['MAT101'] },
    { codigo: 'PROG101', nome: 'Introdução à Programação', preRequisitos: [] },
    { codigo: 'PROG201', nome: 'Estruturas de Dados', preRequisitos: ['PROG101'] }
    // Adicione todas as suas matérias aqui
];

// O objeto 'progresso' irá salvar o status de cada matéria.
let progresso = {};

// --- Seção 2: Lógica de Armazenamento ---
function salvarProgresso() {
    localStorage.setItem('progressoFaculdade', JSON.stringify(progresso));
}

function carregarProgresso() {
    const dadosSalvos = localStorage.getItem('progressoFaculdade');
    if (dadosSalvos) {
        progresso = JSON.parse(dadosSalvos);
    }
}

// --- Seção 3: Lógica de Renderização e Interação da Interface ---
const container = document.querySelector('.materias-container');

function renderizarMaterias() {
    container.innerHTML = ''; 

    materias.forEach(materia => {
        const item = document.createElement('div');
        item.classList.add('materia-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = materia.codigo;
        checkbox.checked = progresso[materia.codigo] || false; 

        checkbox.addEventListener('change', (e) => {
            progresso[materia.codigo] = e.target.checked;
            salvarProgresso();
            renderizarMaterias();
        });

        const label = document.createElement('label');
        label.htmlFor = materia.codigo;
        label.textContent = materia.nome;

        item.appendChild(checkbox);
        item.appendChild(label);
        container.appendChild(item);

        const preRequisitosAtendidos = materia.preRequisitos.every(pr => progresso[pr]);
        if (!preRequisitosAtendidos) {
            checkbox.disabled = true;
            item.classList.add('bloqueada');
        } else if (progresso[materia.codigo]) {
            item.classList.add('concluida');
        }
    });
}

// --- Seção 4: Funcionalidades de Baixar e Fazer Upload ---
document.getElementById('baixarProgressoBtn').addEventListener('click', baixarProgresso);
document.getElementById('uploadProgressoInput').addEventListener('change', carregarProgressoDoArquivo);

function baixarProgresso() {
    const dadosSalvos = localStorage.getItem('progressoFaculdade');
    if (!dadosSalvos) {
        alert('Não há progresso para baixar.');
        return;
    }

    const blob = new Blob([dadosSalvos], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'progresso_faculdade.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function carregarProgressoDoArquivo(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const fileContent = e.target.result;
            const dadosCarregados = JSON.parse(fileContent);

            if (typeof dadosCarregados !== 'object') {
                throw new Error('Formato de arquivo inválido.');
            }

            progresso = dadosCarregados;
            salvarProgresso();
            renderizarMaterias();
            alert('Progresso carregado com sucesso!');
        } catch (error) {
            alert('Erro ao carregar o arquivo. Por favor, verifique se é um arquivo de progresso válido.');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

// --- Seção 5: Chamada Inicial ---
document.addEventListener('DOMContentLoaded', () => {
    carregarProgresso();
    renderizarMaterias();
});