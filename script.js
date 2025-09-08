// --- Seção 1: Base de Dados e Estado ---
const matriz2008 = [
    // Primeiro Período
    { codigo: 'MAT101', nome: 'Cálculo I', preRequisitos: [], periodo: 1 },
    { codigo: 'GEO101', nome: 'Geometria Analítica e Álgebra Vetorial', preRequisitos: [], periodo: 1 },
    { codigo: 'ING_I', nome: 'Inglês Instrumental I', preRequisitos: [], periodo: 1 },
    { codigo: 'PORT_INST', nome: 'Português Instrumental', preRequisitos: [], periodo: 1 },
    { codigo: 'PROG101', nome: 'Programação de Computadores I', preRequisitos: [], periodo: 1 },
    { codigo: 'LAB_PROG101', nome: 'Lab. de Programação de Computadores I', preRequisitos: [], periodo: 1 },
    { codigo: 'MET_CIE', nome: 'Metodologia Científica', preRequisitos: [], periodo: 1 },

    // Segundo Período
    { codigo: 'MAT102', nome: 'Cálculo II', preRequisitos: ['MAT101'], periodo: 2 },
    { codigo: 'FIS101', nome: 'Física I', preRequisitos: ['MAT101'], periodo: 2 },
    { codigo: 'FIL_TEC', nome: 'Filosofia da Tecnologia', preRequisitos: [], periodo: 2 },
    { codigo: 'PROG102', nome: 'Programação de Computadores II', preRequisitos: ['PROG101', 'LAB_PROG101'], periodo: 2 },
    { codigo: 'LAB_PROG102', nome: 'Lab. de Programação de Computadores II', preRequisitos: ['PROG101', 'LAB_PROG101'], periodo: 2 },
    { codigo: 'LAB_SIS_DIG', nome: 'Lab. de Sistemas Digitais Para Computação', preRequisitos: ['PROG101', 'LAB_PROG101'], periodo: 2 },
    { codigo: 'SIS_DIG', nome: 'Sistemas Digitais Para Computação', preRequisitos: ['PROG101', 'LAB_PROG101'], periodo: 2 },
    { codigo: 'MAT_DISC', nome: 'Matemática Discreta', preRequisitos: [], periodo: 2 },
    
    // Terceiro Período
    { codigo: 'MAT103', nome: 'Cálculo III', preRequisitos: ['MAT102', 'GEO101'], periodo: 3 },
    { codigo: 'FIS102', nome: 'Física II', preRequisitos: ['FIS101', 'MAT102'], periodo: 3 },
    { codigo: 'FE101', nome: 'Física Experimental I', preRequisitos: [], periodo: 3 },
    { codigo: 'AED101', nome: 'Algoritmos e Estruturas de Dados I', preRequisitos: ['PROG102', 'LAB_PROG102'], periodo: 3 },
    { codigo: 'LAB_AED101', nome: 'Lab. de Algoritmos e Estruturas de Dados I', preRequisitos: ['PROG102', 'LAB_PROG102'], periodo: 3 },
    { codigo: 'ARQ_ORG_I', nome: 'Arquitetura e Organização de Computadores I', preRequisitos: ['SIS_DIG', 'LAB_SIS_DIG'], periodo: 3 },
    { codigo: 'LAB_ARQ_ORG_I', nome: 'Lab. de Arquitetura e Organização de Computadores I', preRequisitos: ['SIS_DIG', 'LAB_SIS_DIG'], periodo: 3 },
    { codigo: 'MET_NUM', nome: 'Métodos Numéricos Computacionais', preRequisitos: ['PROG101', 'LAB_PROG101', 'MAT103'], periodo: 3 },
    
    // Quarto Período
    { codigo: 'FIS103', nome: 'Física III', preRequisitos: ['FIS102'], periodo: 4 },
    { codigo: 'FE102', nome: 'Física Experimental II', preRequisitos: ['FE101'], periodo: 4 },
    { codigo: 'AED102', nome: 'Algoritmos e Estruturas de Dados II', preRequisitos: ['AED101', 'LAB_AED101'], periodo: 4 },
    { codigo: 'LAB_AED102', nome: 'Lab. de Algoritmos e Estruturas de Dados II', preRequisitos: ['AED101', 'LAB_AED101'], periodo: 4 },
    { codigo: 'ARQ_ORG_II', nome: 'Arquitetura e Organização de Computadores II', preRequisitos: ['ARQ_ORG_I', 'LAB_ARQ_ORG_I'], periodo: 4 },
    { codigo: 'LAB_ARQ_ORG_II', nome: 'Lab. de Arquitetura e Organização de Computadores II', preRequisitos: ['ARQ_ORG_I', 'LAB_ARQ_ORG_I'], periodo: 4 },
    { codigo: 'LING_PROG', nome: 'Linguagens de Programação', preRequisitos: ['AED101', 'LAB_AED101'], periodo: 4 },
    { codigo: 'LAB_LING_PROG', nome: 'Lab. de Linguagens de Programação', preRequisitos: ['AED101', 'LAB_AED101'], periodo: 4 },
    { codigo: 'MAT104', nome: 'Cálculo IV', preRequisitos: ['MAT103'], periodo: 4 },

    // Quinto Período
    { codigo: 'ALG_LIN', nome: 'Álgebra Linear', preRequisitos: ['GEO101', 'MAT102'], periodo: 5 },
    { codigo: 'BANCO_I', nome: 'Banco de Dados I', preRequisitos: ['AED102', 'LAB_AED102'], periodo: 5 },
    { codigo: 'LAB_BANCO_I', nome: 'Lab. de Banco de Dados I', preRequisitos: ['AED102', 'LAB_AED102'], periodo: 5 },
    { codigo: 'PRIN_COM_DADOS', nome: 'Princípios de Comunicação de Dados', preRequisitos: ['FIS103'], periodo: 5 },
    { codigo: 'MODEL_SOFT', nome: 'Modelagem e Desenvolvimento de Software', preRequisitos: ['LING_PROG', 'LAB_LING_PROG'], periodo: 5 },
    { codigo: 'LAB_MODEL_SOFT', nome: 'Lab. de Modelagem e Desenvolvimento de Software', preRequisitos: ['LING_PROG', 'LAB_LING_PROG'], periodo: 5 },
    { codigo: 'LING_FORM', nome: 'Linguagens Formais e Autômatos', preRequisitos: ['MAT_DISC', 'LING_PROG', 'LAB_LING_PROG'], periodo: 5 },

    // Sexto Período
    { codigo: 'ENG_SOFT_I', nome: 'Engenharia de Software I', preRequisitos: ['MODEL_SOFT'], periodo: 6 },
    { codigo: 'LAB_ENG_SOFT_I', nome: 'Lab. de Engenharia de Software I', preRequisitos: ['MODEL_SOFT', 'LAB_MODEL_SOFT'], periodo: 6 },
    { codigo: 'REDES_I', nome: 'Redes de Computadores I', preRequisitos: ['PRIN_COM_DADOS'], periodo: 6 },
    { codigo: 'LAB_REDES_I', nome: 'Lab. de Redes de Computadores I', preRequisitos: ['PRIN_COM_DADOS'], periodo: 6 },
    { codigo: 'SIST_OP', nome: 'Sistemas Operacionais', preRequisitos: ['ARQ_ORG_II', 'LAB_ARQ_ORG_II'], periodo: 6 },
    { codigo: 'LAB_SIST_OP', nome: 'Lab. de Sistemas Operacionais', preRequisitos: ['ARQ_ORG_II', 'LAB_ARQ_ORG_II'], periodo: 6 },
    { codigo: 'CONT_SIS_DIN', nome: 'Controle de Sistemas Dinâmicos', preRequisitos: ['MET_NUM'], periodo: 6 },
    { codigo: 'LAB_CONT_SIS_DIN', nome: 'Lab. de Controle de Sistemas Dinâmicos', preRequisitos: ['MET_NUM'], periodo: 6 },

    // Sétimo Período
    { codigo: 'IA', nome: 'Inteligência Artificial', preRequisitos: ['ALG_LIN', 'AED102', 'LAB_AED102', 'MET_NUM'], periodo: 7 },
    { codigo: 'LAB_IA', nome: 'Lab. de Inteligência Artificial', preRequisitos: ['AED102', 'LAB_AED102'], periodo: 7 },
    { codigo: 'COMPILADORES', nome: 'Compiladores', preRequisitos: ['AED102', 'LAB_AED102', 'LING_FORM', 'LING_PROG', 'LAB_LING_PROG'], periodo: 7 },
    { codigo: 'Otim_I', nome: 'Otimização I', preRequisitos: ['ALG_LIN', 'AED102', 'LAB_AED102', 'MET_NUM'], periodo: 7 },
    { codigo: 'CONT_DIG', nome: 'Controle Digital de Sistemas Dinâmicos', preRequisitos: ['CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 7 },
    { codigo: 'LAB_CONT_DIG', nome: 'Lab. de Controle Digital de Sistemas Dinâmicos', preRequisitos: ['CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 7 },
    { codigo: 'PSIC_APL_ORG', nome: 'Psicologia Aplicada às Organizações', preRequisitos: [], periodo: 7 },

    // Oitavo Período
    { codigo: 'INTER_HUM_COMP', nome: 'Interação Humano-Computador', preRequisitos: ['MODEL_SOFT', 'LAB_MODEL_SOFT'], periodo: 8 },
    { codigo: 'SIS_DIST', nome: 'Sistemas Distribuídos', preRequisitos: ['SIST_OP', 'LAB_SIST_OP'], periodo: 8 },
    { codigo: 'OTIM_II', nome: 'Otimização II', preRequisitos: ['Otim_I'], periodo: 8 },
    { codigo: 'IC_I', nome: 'Inteligência Computacional I', preRequisitos: ['IA', 'LAB_IA'], periodo: 8 },
    { codigo: 'COMP_GRAF', nome: 'Computação Gráfica', preRequisitos: ['PROG101', 'LAB_PROG101', 'GEO101', 'MAT102'], periodo: 8 },
    { codigo: 'INTRO_ADM', nome: 'Introdução à Administração', preRequisitos: [], periodo: 8 },

    // Nono Período
    { codigo: 'TCC1', nome: 'Trabalho de Conclusão de Curso I', preRequisitos: [], periodo: 9 },
    { codigo: 'ORG_EMP_A', nome: 'Organização Empresarial A', preRequisitos: [], periodo: 9 },
    { codigo: 'MET_PESQ', nome: 'Metodologia de Pesquisa', preRequisitos: [], periodo: 9 },

    // Décimo Período
    { codigo: 'TCC2', nome: 'Trabalho de Conclusão de Curso II', preRequisitos: ['TCC1'], periodo: 10 },
    { codigo: 'ESTAGIO', nome: 'Estágio Supervisionado', preRequisitos: [], periodo: 10 },
    { codigo: 'CONTEXTO_PROF', nome: 'Contexto Social e Profissional da Engenharia de Computação', preRequisitos: [], periodo: 10 },
    { codigo: 'INTRO_SOCIO', nome: 'Introdução à Sociologia', preRequisitos: [], periodo: 10 },
    
    // Optativas
    { codigo: 'COMP_EVOL', nome: 'Computação Evolucionária', preRequisitos: ['IA', 'LAB_IA'], periodo: 'Optativas' },
    { codigo: 'MODEL_SIS_DIN', nome: 'Modelagem de Sistemas Dinâmicos', preRequisitos: ['MET_NUM', 'MAT104'], periodo: 'Optativas' },
    { codigo: 'INST', nome: 'Instrumentação', preRequisitos: ['FIS103'], periodo: 'Optativas' },
    { codigo: 'LAB_INST', nome: 'Laboratório de Instrumentação', preRequisitos: ['INST'], periodo: 'Optativas' },
    { codigo: 'LIBRAS', nome: 'Introdução à Língua Brasileira de Sinais - Libras', preRequisitos: [], periodo: 'Optativas' },
    { codigo: 'BANCO_II', nome: 'Banco de Dados II', preRequisitos: ['BANCO_I', 'LAB_BANCO_I'], periodo: 'Optativas' },
    { codigo: 'INTRO_DIR', nome: 'Introdução ao Direito', preRequisitos: [], periodo: 'Optativas' },
    { codigo: 'ING_II', nome: 'Inglês Instrumental II', preRequisitos: ['ING_I'], periodo: 'Optativas' },    
    { codigo: 'INTRO_ECO', nome: 'Introdução à Economia', preRequisitos: [], periodo: 'Optativas'},
    { codigo: 'GEST_AMB', nome: 'Gestão Ambiental', preRequisitos: [], periodo: 'Optativas'}
/*
    { codigo: 'AUTO_PROC_MAN', nome: 'Automação de Processos de Manufatura', preRequisitos: ['AUTO_PROC_CONT', 'LAB_AUTO_PROC_CONT'], periodo: 'Optativas' },
    { codigo: 'SIST_BIO_INSP', nome: 'Sistemas Bio-Inspirados', preRequisitos: ['IA', 'LAB_IA'], periodo: 'Optativas' },
    { codigo: 'ING_III', nome: 'Inglês Instrumental III', preRequisitos: ['ING_II'], periodo:'Optativas' },
    { codigo: 'SIST_MULTIMIDIA', nome: 'Sistemas Multimídia', preRequisitos: ['COMP_GRAF'], periodo: 'Optativas'},
    { codigo: 'ROBOTICA', nome: 'Robótica', preRequisitos: ['FIS102', 'CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 'Optativas' },
    { codigo: 'SIST_TEMPO_REAL', nome: 'Sistemas de Tempo Real', preRequisitos: ['MODEL_SOFT', 'LAB_MODEL_SOFT', 'SIS_DIST'], periodo: 'Optativas' },
    { codigo: 'IC_II', nome: 'Inteligência Computacional II', preRequisitos: ['IA', 'LAB_IA'], periodo:'Optativas' },
    { codigo: 'LAB_AUT_PROC_CONT', nome: 'Lab. de Automação de Processos Contínuos', preRequisitos: ['CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 'Optativas' },
    { codigo: 'AUT_PROC_CONT', nome: 'Automação de Processos Contínuos', preRequisitos: ['CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 'Optativas' },



,
    { codigo: 'EDU_CORP', nome: 'Educação Corporal e Formação Humana', preRequisitos: [], periodo: 'Optativas' }


*/


];

const matriz2023 = []; // Matriz de 2023 vazia

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
        
        let materiasNoPeriodoVisiveis = false; // Flag para verificar se alguma matéria é exibida

        periodos[periodo].forEach(materia => {
            if (!materiasVisiveis && progresso[materia.codigo]) {
                // Se a opção de ocultar estiver ativada, não adiciona a matéria feita
                return;
            }

            // Se chegou aqui, a matéria é visível
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

        // Só adiciona o box do período se ele tiver alguma matéria visível
        if (materiasNoPeriodoVisiveis) {
            periodoBox.appendChild(tituloPeriodo);
            periodoBox.appendChild(listaMaterias);
            container.appendChild(periodoBox);
        }
    });

    preencherQuebraRequisitoSelect();
    atualizarBarraDeProgresso();
}

// ... (resto do código do script.js, que não precisa de alterações) ...

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

    if (!barra || !texto) return;

    const obrigatoriasConcluidas = obrigatorias.filter(m => progresso[m.codigo]).length;
    const totalObrigatorias = obrigatorias.length;

    if (totalObrigatorias === 0) {
        barra.style.width = '0%';
        texto.textContent = '0% concluído';
        return;
    }

    const porcentagem = Math.round((obrigatoriasConcluidas / totalObrigatorias) * 100);

    barra.style.width = `${porcentagem}%`;
    texto.textContent = `${porcentagem}% concluído`;
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
    ocultarFeitasBtn.textContent = materiasVisiveis ? "Ocultar Feitas" : "Mostrar Todas";
}

// --- Seção 5: Chamada Inicial ---
document.addEventListener('DOMContentLoaded', () => {
    carregarProgresso();
    renderizarMaterias();
    
    const confirmarQuebraBtn = document.getElementById('confirmarQuebraBtn');
    const baixarBtn = document.getElementById('baixarProgressoBtn');
    const uploadInput = document.getElementById('uploadProgressoInput');
    const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');

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
});