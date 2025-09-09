// --- Seção 1: Base de Dados e Estado (Matriz 2023) ---
const matriz2023 = [
    // Primeiro Período
    { codigo: 'IEC', nome: 'Introdução à Engenharia de Computação', preRequisitos: [], periodo: 1 },
    { codigo: 'FPI', nome: 'Fundamentos de Programação I', preRequisitos: [], periodo: 1 },
    { codigo: 'LFPI', nome: 'Lab. de Fundamentos de Programação I', preRequisitos: [], periodo: 1 },
    { codigo: 'CALC_I', nome: 'Cálculo com Funções de uma Variável Real', preRequisitos: [], periodo: 1 },
    { codigo: 'FIL_TEC', nome: 'Filosofia da Tecnologia', preRequisitos: [], periodo: 1 },
    { codigo: 'CEE', nome: 'Circuitos Elétricos e Eletrônica', preRequisitos: [], periodo: 1 },
    { codigo: 'LAB_CEE', nome: 'Lab. de Circuitos Elétricos e Eletrônica', preRequisitos: [], periodo: 1 },
    { codigo: 'MET_CIE', nome: 'Metodologia Científica', preRequisitos: [], periodo: 1 },

    // Segundo Período
    { codigo: 'FPII', nome: 'Fundamentos de Programação II', preRequisitos: ['FPI', 'LFPI'], periodo: 2 },
    { codigo: 'LAB_FPII', nome: 'Lab. de Fundamentos de Programação II', preRequisitos: ['FPI', 'LFPI'], periodo: 2 },
    { codigo: 'MAT_DISC', nome: 'Matemática Discreta', preRequisitos: [], periodo: 2 },
    { codigo: 'SDC', nome: 'Sistemas Digitais para Computação', preRequisitos: ['CEE', 'LAB_CEE'], periodo: 2 },
    { codigo: 'LAB_SDC', nome: 'Lab. de Sistemas Digitais para Computação', preRequisitos: ['CEE', 'LAB_CEE'], periodo: 2 },
    { codigo: 'GEO_AL', nome: 'Geometria Analítica e Álgebra Linear', preRequisitos: [], periodo: 2 },
    { codigo: 'INTEG_SERIES', nome: 'Integração e Séries', preRequisitos: ['CALC_I'], periodo: 2 },
    { codigo: 'FIS_MEC', nome: 'Fundamentos de Mecânica', preRequisitos: [], periodo: 2 },

    // Terceiro Período
    { codigo: 'ARQ_ORG_I', nome: 'Arquitetura e Organização de Computadores I', preRequisitos: ['SDC', 'LAB_SDC'], periodo: 3 },
    { codigo: 'LAB_ARQ_ORG_I', nome: 'Lab. de Arquitetura e Organização de Computadores I', preRequisitos: ['SDC', 'LAB_SDC'], periodo: 3 },
    { codigo: 'POO', nome: 'Programação Orientada a Objetos', preRequisitos: ['FPII', 'LAB_FPII'], periodo: 3 },
    { codigo: 'LAB_POO', nome: 'Lab. de Programação Orientada a Objetos', preRequisitos: ['FPII', 'LAB_FPII'], periodo: 3 },
    { codigo: 'CALC_VAR_I', nome: 'Cálculo com Funções de Várias Variáveis I', preRequisitos: ['CALC_I', 'GEO_AL'], periodo: 3 },
    { codigo: 'FIS_OFT', nome: 'Fundamentos de OFT', preRequisitos: ['FIS_MEC'], periodo: 3 },
    { codigo: 'LAB_FIS_OFT', nome: 'Lab. de Fundamentos de OFT', preRequisitos: ['FIS_MEC'], periodo: 3 },

    // Quarto Período
    { codigo: 'AED_I', nome: 'Algoritmo e Estruturas de Dados I', preRequisitos: ['FPII', 'LAB_FPII'], periodo: 4 },
    { codigo: 'LAB_AED_I', nome: 'Lab. de Algoritmo e Estruturas de Dados I', preRequisitos: ['FPII', 'LAB_FPII'], periodo: 4 },
    { codigo: 'ARQ_ORG_II', nome: 'Arquitetura e Organização de Computadores II', preRequisitos: ['ARQ_ORG_I', 'LAB_ARQ_ORG_I'], periodo: 4 },
    { codigo: 'LAB_ARQ_ORG_II', nome: 'Lab. de Arquitetura e Organização de Computadores II', preRequisitos: ['ARQ_ORG_I', 'LAB_ARQ_ORG_I'], periodo: 4 },
    { codigo: 'BANCO_I', nome: 'Banco de Dados I', preRequisitos: ['AED_I', 'LAB_AED_I'], periodo: 4 },
    { codigo: 'REDES_I', nome: 'Redes de Computadores I', preRequisitos: ['FIS_OFT', 'LAB_FIS_OFT'], periodo: 4 },
    { codigo: 'EDO', nome: 'Equações Diferenciais Ordinárias', preRequisitos: ['INTEG_SERIES', 'CALC_VAR_I'], periodo: 4 },
    { codigo: 'MODEL_SIS', nome: 'Modelagem de Sistemas', preRequisitos: ['BANCO_I'], periodo: 4 },
    { codigo: 'LAB_MODEL_SIS', nome: 'Lab. de Modelagem de Sistemas', preRequisitos: ['BANCO_I'], periodo: 4 },

    // Quinto Período
    { codigo: 'CLP', nome: 'Conceitos de Linguagens de Programação', preRequisitos: ['POO'], periodo: 5 },
    { codigo: 'AED_II', nome: 'Algoritmo e Estrutura de Dados II', preRequisitos: ['AED_I', 'LAB_AED_I'], periodo: 5 },
    { codigo: 'ELM', nome: 'Eletromagnetismo', preRequisitos: ['CALC_VAR_I', 'FIS_OFT'], periodo: 5 },
    { codigo: 'FIS_EXP', nome: 'Física Experimental - EOFM', preRequisitos: ['ELM'], periodo: 5 },
    { codigo: 'REDES_II', nome: 'Redes de Computadores II', preRequisitos: ['REDES_I', 'LAB_REDES_I'], periodo: 5 },
    { codigo: 'LAB_REDES_II', nome: 'Lab. de Redes de Computadores II', preRequisitos: ['REDES_I', 'LAB_REDES_I'], periodo: 5 },
    { codigo: 'SO', nome: 'Sistemas Operacionais', preRequisitos: ['ARQ_ORG_II', 'LAB_ARQ_ORG_II'], periodo: 5 },
    { codigo: 'LAB_SO', nome: 'Lab. de Sistemas Operacionais', preRequisitos: ['ARQ_ORG_II', 'LAB_ARQ_ORG_II'], periodo: 5 },

    // Sexto Período
    { codigo: 'LIN_AUT', nome: 'Linguagens Formais e Autômatos', preRequisitos: ['MAT_DISC', 'POO', 'LAB_POO'], periodo: 6 },
    { codigo: 'ESTATISTICA', nome: 'Estatística', preRequisitos: ['CALC_I', 'GEO_AL'], periodo: 6 },
    { codigo: 'IA_I', nome: 'Inteligência Artificial I', preRequisitos: ['ESTATISTICA'], periodo: 6 },
    { codigo: 'LAB_IA_I', nome: 'Lab. de Inteligência Artificial I', preRequisitos: ['ESTATISTICA'], periodo: 6 },
    { codigo: 'OTIM_I', nome: 'Otimização I', preRequisitos: ['POO', 'LAB_POO', 'CLP'], periodo: 6 },
    { codigo: 'CD_I', nome: 'Ciência de Dados I', preRequisitos: ['AED_II', 'LAB_AED_II'], periodo: 6 },
    { codigo: 'LAB_CD_I', nome: 'Lab. de Ciência de Dados I', preRequisitos: ['AED_II', 'LAB_AED_II'], periodo: 6 },
    { codigo: 'TCC_I', nome: 'Trabalho de Conclusão de Curso I', preRequisitos: [], periodo: 6 },

    // Sétimo Período
    { codigo: 'COMPILADORES', nome: 'Compiladores', preRequisitos: ['LIN_AUT', 'CLP', 'LAB_POO'], periodo: 7 },
    { codigo: 'GEP', nome: 'Gestão de Produtos e Serviços', preRequisitos: ['ENG_SOFT_I', 'LAB_ENG_SOFT_I'], periodo: 7 },
    { codigo: 'ESII', nome: 'Engenharia de Software II', preRequisitos: ['ENG_SOFT_I', 'LAB_ENG_SOFT_I'], periodo: 7 },
    { codigo: 'REDES_III', nome: 'Redes de Computadores III', preRequisitos: ['REDES_II', 'LAB_REDES_II'], periodo: 7 },
    { codigo: 'LAB_REDES_III', nome: 'Lab. de Redes de Computadores III', preRequisitos: ['REDES_II', 'LAB_REDES_II'], periodo: 7 },
    { codigo: 'SD', nome: 'Sistemas Distribuídos', preRequisitos: ['SO', 'LAB_SO'], periodo: 7 },
    { codigo: 'LAB_SD', nome: 'Lab. de Sistemas Distribuídos', preRequisitos: ['SO', 'LAB_SO'], periodo: 7 },

    // Oitavo Período
    { codigo: 'IHC', nome: 'Interação Humano-Computador', preRequisitos: ['ESII', 'LAB_ESII'], periodo: 8 },
    { codigo: 'OTIM_II', nome: 'Otimização II', preRequisitos: ['OTIM_I'], periodo: 8 },
    { codigo: 'IA_II', nome: 'Inteligência Artificial II', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 8 },
    { codigo: 'IC_I', nome: 'Inteligência Computacional I', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 8 },
    { codigo: 'CD_II', nome: 'Ciência de Dados II', preRequisitos: ['CD_I', 'LAB_CD_I'], periodo: 8 },
    { codigo: 'LAB_CD_II', nome: 'Lab. de Ciência de Dados II', preRequisitos: ['CD_I', 'LAB_CD_I'], periodo: 8 },
    { codigo: 'TCC_II', nome: 'Trabalho de Conclusão de Curso II', preRequisitos: ['TCC_I'], periodo: 8 },

    // Nono Período
    { codigo: 'EMN', nome: 'Empreendedorismo e Modelo de Negócios', preRequisitos: [], periodo: 9 },
    { codigo: 'INTRO_SOCIO', nome: 'Introdução à Sociologia', preRequisitos: [], periodo: 9 },
    { codigo: 'MET_PESQ', nome: 'Metodologia de Pesquisa', preRequisitos: [], periodo: 9 },

    // Décimo Período
    { codigo: 'CSPE', nome: 'Contexto Social e Profissional do Engenheiro', preRequisitos: [], periodo: 10 },
    { codigo: 'ESTAGIO', nome: 'Estágio Supervisionado', preRequisitos: [], periodo: 10 },
    
    // Optativas
    { codigo: 'EDP', nome: 'Equações Diferenciais Parciais', preRequisitos: ['EDO'], periodo: 'Optativas' },
    { codigo: 'FIM', nome: 'Fundamentos de Física Moderna', preRequisitos: ['FIS_OFT'], periodo: 'Optativas' },
    { codigo: 'ESII_OPT', nome: 'Engenharia de Software II', preRequisitos: ['ENG_SOFT_I', 'LAB_ENG_SOFT_I'], periodo: 'Optativas' },
    { codigo: 'PC', nome: 'Programação Concorrente', preRequisitos: ['SO', 'LAB_SO'], periodo: 'Optativas' },
    { codigo: 'CII', nome: 'Inteligência Computacional II', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'GSR', nome: 'Gestão de Produtos e Serviços', preRequisitos: [], periodo: 'Optativas' },
    { codigo: 'CDM', nome: 'Controle Digital de Sistemas Dinâmicos', preRequisitos: ['CD_I', 'LAB_CD_I'], periodo: 'Optativas' },
    { codigo: 'MD', nome: 'Modelagem de Sistemas Dinâmicos', preRequisitos: ['CD_I', 'LAB_CD_I'], periodo: 'Optativas' },
    { codigo: 'RP', nome: 'Reconhecimento de Padrões', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'CE', nome: 'Computação Evolucionária', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'ICPO', nome: 'Inteligência Computacional para Otimização', preRequisitos: ['Otim_I'], periodo: 'Optativas' },
    { codigo: 'SBI', nome: 'Sistemas Bio-inspirados', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
];

let progresso = {};
let dadosDaMatriz = [];
let obrigatorias = [];
let materiasVisiveis = true;

// --- Seção 2: Lógica de Armazenamento ---
function salvarProgresso() {
    const matrizAno = window.location.pathname.includes('matriz_2008') ? '2008' : '2023';
    localStorage.setItem(`progressoFaculdade_${matrizAno}`, JSON.stringify(progresso));
}

function carregarProgresso() {
    const matrizAno = window.location.pathname.includes('matriz_2008') ? '2008' : '2023';
    const dadosSalvos = localStorage.getItem(`progressoFaculdade_${matrizAno}`);
    if (dadosSalvos) {
        progresso = JSON.parse(dadosSalvos);
    } else {
        progresso = {}; 
    }
}

// --- Seção 3: Lógica de Renderização e Interação da Interface ---
const container = document.querySelector('.materias-container');
const quebraMateriaSelect = document.getElementById('quebraMateriaSelect');
const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const confirmarQuebraBtn = document.getElementById('confirmarQuebraBtn');
const baixarBtn = document.getElementById('baixarProgressoBtn');
const uploadInput = document.getElementById('uploadProgressoInput');

function renderizarMaterias() {
    container.innerHTML = ''; 

    dadosDaMatriz = window.location.pathname.includes('matriz_2008') ? matriz2008 : matriz2023;
    
    if (dadosDaMatriz.length === 0) {
        const aviso = document.createElement('p');
        aviso.classList.add('aviso');
        aviso.textContent = 'A matriz de 2023 ainda não foi preenchida. Volte em breve!';
        container.appendChild(aviso);
        return; 
    }

    obrigatorias = dadosDaMatriz.filter(m => m.periodo !== 'Optativas');

    const periodos = {};
    dadosDaMatriz.forEach(materia => {
        const periodo = materia.periodo;
        if (!periodos[periodo]) {
            periodos[periodo] = [];
        }
        periodos[periodo].push(materia);
    });

    const periodosOrdenados = Object.keys(periodos).sort((a, b) => {
        if (a === 'Optativas') return 1;
        if (b === 'Optativas') return -1;
        return parseInt(a) - parseInt(b); 
    });

    periodosOrdenados.forEach(periodo => {
        const periodoBox = document.createElement('div');
        periodoBox.classList.add('periodo-box');

        const tituloPeriodo = document.createElement('h2');
        tituloPeriodo.textContent = `Período ${periodo}`;
        if (periodo === 'Optativas') {
            tituloPeriodo.textContent = 'Disciplinas Optativas';
        }

        const listaMaterias = document.createElement('div');
        listaMaterias.classList.add('lista-materias');
        
        let materiasNoPeriodoVisiveis = false;

        periodos[periodo].forEach(materia => {
            if (!materiasVisiveis && progresso[materia.codigo]) {
                return;
            }

            materiasNoPeriodoVisiveis = true;
            
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
            listaMaterias.appendChild(item);

            const preRequisitosAtendidos = materia.preRequisitos.every(pr => progresso[pr]);
            const progressoPeriodosAnteriores = calcularProgressoAcumulado(periodo);

            const podeFazer = preRequisitosAtendidos && (progressoPeriodosAnteriores >= 0.6 || periodo === 'Optativas');

            if (!podeFazer && !progresso[materia.codigo]) {
                checkbox.disabled = true;
                item.classList.add('bloqueada');
            } else if (progresso[materia.codigo]) {
                item.classList.add('concluida');
            }
        });

        if (materiasNoPeriodoVisiveis) {
            periodoBox.appendChild(tituloPeriodo);
            periodoBox.appendChild(listaMaterias);
            container.appendChild(periodoBox);
        }
    });

    preencherQuebraRequisitoSelect();
    atualizarBarraDeProgresso();
}

function calcularProgressoAcumulado(periodoAtual) {
    if (periodoAtual <= 1) {
        return 1.0;
    }
    const materiasAnteriores = dadosDaMatriz.filter(m => m.periodo < periodoAtual);
    const totalMateriasAnteriores = materiasAnteriores.length;
    let concluidasMateriasAnteriores = 0;

    materiasAnteriores.forEach(materia => {
        if (progresso[materia.codigo]) {
            concluidasMateriasAnteriores++;
        }
    });

    if (totalMateriasAnteriores === 0) {
        return 1.0;
    }
    return concluidasMateriasAnteriores / totalMateriasAnteriores;
}

function atualizarBarraDeProgresso() {
    const barra = document.getElementById('progressBar');
    const texto = document.getElementById('progressText');
    const concluidasTexto = document.getElementById('materiasConcluidas');
    const restantesTexto = document.getElementById('materiasRestantes');

    if (!barra || !texto || !concluidasTexto || !restantesTexto) return;

    const obrigatoriasConcluidas = obrigatorias.filter(m => progresso[m.codigo]).length;
    const totalObrigatorias = obrigatorias.length;
    const obrigatoriasRestantes = totalObrigatorias - obrigatoriasConcluidas;

    if (totalObrigatorias === 0) {
        barra.style.width = '0%';
        texto.textContent = '0% concluído';
        concluidasTexto.textContent = '0';
        restantesTexto.textContent = '0';
        return;
    }

    const porcentagem = Math.round((obrigatoriasConcluidas / totalObrigatorias) * 100);

    barra.style.width = `${porcentagem}%`;
    texto.textContent = `${porcentagem}% concluído`;
    concluidasTexto.textContent = obrigatoriasConcluidas;
    restantesTexto.textContent = obrigatoriasRestantes;
}

function preencherQuebraRequisitoSelect() {
    if (!quebraMateriaSelect) return;

    quebraMateriaSelect.innerHTML = '<option value="">Selecione uma matéria</option>';

    dadosDaMatriz.forEach(materia => {
        if (!progresso[materia.codigo] && materia.preRequisitos.length > 0) {
            const option = document.createElement('option');
            option.value = materia.codigo;
            option.textContent = materia.nome;
            quebraMateriaSelect.appendChild(option);
        }
    });
}

function quebrarPreRequisito() {
    const codigoMateria = quebraMateriaSelect.value;

    if (!codigoMateria) {
        alert("Selecione uma matéria para quebrar o pré-requisito.");
        return;
    }

    const materiaEncontrada = dadosDaMatriz.find(m => m.codigo === codigoMateria);

    progresso[materiaEncontrada.codigo] = true;
    salvarProgresso();
    renderizarMaterias();
    alert(`Pré-requisito quebrado para a matéria: ${materiaEncontrada.nome}.`);
    quebraMateriaSelect.value = '';
}

function baixarProgresso() {
    const matrizAno = window.location.pathname.includes('matriz_2008') ? '2008' : '2023';
    const dadosSalvos = localStorage.getItem(`progressoFaculdade_${matrizAno}`);

    if (!dadosSalvos || dadosSalvos === '{}') { 
        alert('Não há progresso para baixar.');
        return;
    }

    const blob = new Blob([dadosSalvos], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `progresso_faculdade_${matrizAno}.json`; 
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
            event.target.value = ''; 
        } catch (error) {
            alert('Erro ao carregar o arquivo. Por favor, verifique se é um arquivo de progresso válido.');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

function toggleMateriasVisibilidade() {
    materiasVisiveis = !materiasVisiveis;
    renderizarMaterias();
    const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');
    if (ocultarFeitasBtn) {
        ocultarFeitasBtn.textContent = materiasVisiveis ? "Ocultar Feitas" : "Mostrar Todas";
    }
}

// ... (resto do código existente) ...

// --- Seção 5: Chamada Inicial ---
document.addEventListener('DOMContentLoaded', () => {
    carregarProgresso();
    renderizarMaterias();
    
    const confirmarQuebraBtn = document.getElementById('confirmarQuebraBtn');
    const baixarBtn = document.getElementById('baixarProgressoBtn');
    const uploadInput = document.getElementById('uploadProgressoInput');
    const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    
    // Altera a referência para o novo contêiner
    const pageContainer = document.getElementById('pageContainer');

    if (confirmarQuebraBtn) {
        confirmarQuebraBtn.addEventListener('click', quebrarPreRequisito);
    }
    if (baixarBtn && uploadInput) {
        baixarBtn.addEventListener('click', baixarProgresso);
        uploadInput.addEventListener('change', carregarProgressoDoArquivo);
    }
    if (ocultarFeitasBtn) {
        ocultarFeitasBtn.addEventListener('click', toggleMateriasVisibilidade);
    }
    
    if (hamburgerIcon && hamburgerMenu && closeMenuBtn) {
        hamburgerIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            hamburgerMenu.classList.add('active');
            pageContainer.classList.add('menu-open');
        });

        closeMenuBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            hamburgerMenu.classList.remove('active');
            pageContainer.classList.remove('menu-open');
        });
        
        document.addEventListener('click', (event) => {
            const clicouFora = !hamburgerMenu.contains(event.target) && !hamburgerIcon.contains(event.target);
            
            if (clicouFora && hamburgerMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                pageContainer.classList.remove('menu-open');
            }
        });
    }
});