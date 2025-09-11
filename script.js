

// =======================================================
// === 1. INICIALIZAÇÃO DO FIREBASE ===
// =======================================================

// Sua configuração pessoal do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBe1tHxW_sEtBOnu9dQLIElGarFi52LxeU",
    authDomain: "progresso-academico.firebaseapp.com",
    projectId: "progresso-academico",
    storageBucket: "progresso-academico.appspot.com",
    messagingSenderId: "748810350539",
    appId: "1:748810350539:web:36f7c3680f4b0242cad04e"
};

// Inicializa o Firebase e cria referências para os serviços
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


// =======================================================
// === 2. DADOS DAS MATRIZES ===
// =======================================================
// =======================================================
// === 2. DADOS DAS MATRIZES ===
// =======================================================
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

,
    { codigo: 'AUTO_PROC_MAN', nome: 'Automação de Processos de Manufatura', preRequisitos: ['AUTO_PROC_CONT', 'LAB_AUTO_PROC_CONT'], periodo: 'Optativas' },
    { codigo: 'SIST_BIO_INSP', nome: 'Sistemas Bio-Inspirados', preRequisitos: ['IA', 'LAB_IA'], periodo: 'Optativas' },
    { codigo: 'ING_III', nome: 'Inglês Instrumental III', preRequisitos: ['ING_II'], periodo:'Optativas' },
    { codigo: 'SIST_MULTIMIDIA', nome: 'Sistemas Multimídia', preRequisitos: ['COMP_GRAF'], periodo: 'Optativas'},
    { codigo: 'ROBOTICA', nome: 'Robótica', preRequisitos: ['FIS102', 'CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 'Optativas' },
    { codigo: 'SIST_TEMPO_REAL', nome: 'Sistemas de Tempo Real', preRequisitos: ['MODEL_SOFT', 'LAB_MODEL_SOFT', 'SIS_DIST'], periodo: 'Optativas' },
    { codigo: 'IC_II', nome: 'Inteligência Computacional II', preRequisitos: ['IA', 'LAB_IA'], periodo:'Optativas' },
    { codigo: 'LAB_AUT_PROC_CONT', nome: 'Lab. de Automação de Processos Contínuos', preRequisitos: ['CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 'Optativas' },
    { codigo: 'AUT_PROC_CONT', nome: 'Automação de Processos Contínuos', preRequisitos: ['CONT_SIS_DIN', 'LAB_CONT_SIS_DIN'], periodo: 'Optativas' },
    { codigo: 'EDU_CORP', nome: 'Educação Corporal e Formação Humana', preRequisitos: [], periodo: 'Optativas' }

*/
];

const matriz2023 = [

    // Primeiro Período
    { codigo: 'IEC', nome: 'Introdução à Engenharia de Computação', preRequisitos: [], periodo: 1 },
    { codigo: 'FPI', nome: 'Fundamentos de Programação I', preRequisitos: [], periodo: 1 },
    { codigo: 'LFPI', nome: 'Lab. de Fundamentos de Programação I', preRequisitos: [], periodo: 1 },
    { codigo: 'CALC_I', nome: 'Cálculo com Funções de uma Variável Real', preRequisitos: [], periodo: 1 },
    { codigo: 'GEO_AL', nome: 'Geometria Analítica e Álgebra Linear', preRequisitos: [], periodo: 1 },
    { codigo: 'CEE', nome: 'Circuitos Elétricos e Eletrônica', preRequisitos: [], periodo: 1 },
    { codigo: 'LAB_CEE', nome: 'Lab. de Circuitos Elétricos e Eletrônica', preRequisitos: [], periodo: 1 },
    { codigo: 'FIL_TEC', nome: 'Filosofia da Tecnologia', preRequisitos: [], periodo: 1 },
    { codigo: 'MET_CIE', nome: 'Metodologia Científica', preRequisitos: [], periodo: 1 },

    // Segundo Período
    { codigo: 'FPII', nome: 'Fundamentos de Programação II', preRequisitos: ['FPI', 'LFPI'], periodo: 2 },
    { codigo: 'LAB_FPII', nome: 'Lab. de Fundamentos de Programação II', preRequisitos: ['FPI', 'LFPI'], periodo: 2 },
    { codigo: 'MAT_DISC', nome: 'Matemática Discreta', preRequisitos: [], periodo: 2 },
    { codigo: 'SDC', nome: 'Sistemas Digitais para Computação', preRequisitos: ['CEE', 'LAB_CEE'], periodo: 2 },
    { codigo: 'LAB_SDC', nome: 'Lab. de Sistemas Digitais para Computação', preRequisitos: ['CEE', 'LAB_CEE'], periodo: 2 },
    { codigo: 'INTEG_SERIES', nome: 'Integração e Séries', preRequisitos: ['CALC_I', 'GEO_AL'], periodo: 2 },
    { codigo: 'FIS_MEC', nome: 'Fundamentos de Mecânica', preRequisitos: ['CALC_I', 'GEO_AL'], periodo: 2 },

    // Terceiro Período
    { codigo: 'ARQ_ORG_I', nome: 'Arquitetura e Organização de Computadores I', preRequisitos: ['SDC', 'LAB_SDC'], periodo: 3 },
    { codigo: 'LAB_ARQ_ORG_I', nome: 'Lab. de Arquitetura e Organização de Computadores I', preRequisitos: ['SDC', 'LAB_SDC'], periodo: 3 },
    { codigo: 'POO', nome: 'Programação Orientada a Objetos', preRequisitos: ['FPII', 'LAB_FPII'], periodo: 3 },
    { codigo: 'LAB_POO', nome: 'Lab. de Programação Orientada a Objetos', preRequisitos: ['FPII', 'LAB_FPII'], periodo: 3 },
    { codigo: 'CALC_VAR_I', nome: 'Cálculo com Funções de Várias Variáveis I', preRequisitos: ['INTEG_SERIES'], periodo: 3 },
    { codigo: 'FIS_OFT', nome: 'Fundamentos de OFT', preRequisitos: ['FIS_MEC'], periodo: 3 },
    { codigo: 'LAB_FIS_OFT', nome: 'Lab. de Fundamentos de OFT', preRequisitos: ['FIS_MEC'], periodo: 3 },

    // Quarto Período
    { codigo: 'AED_I', nome: 'Algoritmo e Estruturas de Dados I', preRequisitos: ['POO', 'LAB_POO'], periodo: 4 },
    { codigo: 'LAB_AED_I', nome: 'Lab. de Algoritmo e Estruturas de Dados I', preRequisitos: ['POO', 'LAB_POO'], periodo: 4 },
    { codigo: 'ARQ_ORG_II', nome: 'Arquitetura e Organização de Computadores II', preRequisitos: ['ARQ_ORG_I', 'LAB_ARQ_ORG_I'], periodo: 4 },
    { codigo: 'LAB_ARQ_ORG_II', nome: 'Lab. de Arquitetura e Organização de Computadores II', preRequisitos: ['ARQ_ORG_I', 'LAB_ARQ_ORG_I'], periodo: 4 },
    { codigo: 'BANCO_I', nome: 'Banco de Dados I', preRequisitos: ['AED_I', 'LAB_AED_I'], periodo: 4 },
    { codigo: 'REDES_I', nome: 'Redes de Computadores I', preRequisitos: ['FIS_OFT', 'LAB_FIS_OFT'], periodo: 4 },
    { codigo: 'EDO', nome: 'Equações Diferenciais Ordinárias', preRequisitos: ['INTEG_SERIES', 'CALC_VAR_I'], periodo: 4 },
    { codigo: 'MODEL_SIS', nome: 'Modelagem de Sistemas', preRequisitos: ['BANCO_I'], periodo: 4 },
    { codigo: 'LAB_MODEL_SIS', nome: 'Lab. de Modelagem de Sistemas', preRequisitos: ['BANCO_I'], periodo: 4 },

    // Quinto Período
    { codigo: 'CLP', nome: 'Conceitos de Linguagens de Programação', preRequisitos: ['AED_I', 'LAB_AED_I'], periodo: 5 },
    { codigo: 'AED_II', nome: 'Algoritmo e Estrutura de Dados II', preRequisitos: ['AED_I', 'LAB_AED_I'], periodo: 5 },
    { codigo: 'ELM', nome: 'Eletromagnetismo', preRequisitos: ['CALC_VAR_I', 'FIS_OFT', 'LAB_FIS_OFT'], periodo: 5 },
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
    { codigo: 'ES_I', nome: 'Engenharia de Software I', preRequisitos: ['MODEL_SIS', 'LAB_MODEL_SIS'], periodo: 6 },
    { codigo: 'LAB_ES_I', nome: 'Lab. de Engenharia de Software I', preRequisitos: ['MODEL_SIS', 'LAB_MODEL_SIS'], periodo: 6 },

    // Sétimo Período
    { codigo: 'COMPILADORES', nome: 'Compiladores', preRequisitos: ['LIN_AUT', 'CLP', 'LAB_POO'], periodo: 7 },
    { codigo: 'GEP', nome: 'Gestão de Produtos e Serviços', preRequisitos: ['ES_I', 'LAB_ES_I'], periodo: 7 },
    { codigo: 'ESII', nome: 'Engenharia de Software II', preRequisitos: ['ES_I', 'LAB_ES_I'], periodo: 7 },
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
    { codigo: 'TCC_I', nome: 'Trabalho de Conclusão de Curso I', preRequisitos: [], periodo: 8 },

    // Nono Período
    { codigo: 'EMN', nome: 'Empreendedorismo e Modelo de Negócios', preRequisitos: [], periodo: 9 },
    { codigo: 'INTRO_SOCIO', nome: 'Introdução à Sociologia', preRequisitos: [], periodo: 9 },
    { codigo: 'MET_PESQ', nome: 'Metodologia de Pesquisa', preRequisitos: [], periodo: 9 },
    { codigo: 'TCC_II', nome: 'Trabalho de Conclusão de Curso II', preRequisitos: ['TCC_I'], periodo: 9 },

    // Décimo Período
    { codigo: 'CSPE', nome: 'Contexto Social e Profissional do Engenheiro', preRequisitos: [], periodo: 10 },
    { codigo: 'ESTAGIO', nome: 'Estágio Supervisionado', preRequisitos: [], periodo: 10 },
    
    // Optativas
    { codigo: 'EDP', nome: 'Equações Diferenciais Parciais', preRequisitos: ['EDO'], periodo: 'Optativas' },
    { codigo: 'FIM', nome: 'Fundamentos de Física Moderna', preRequisitos: ['FIS_OFT'], periodo: 'Optativas' },
    { codigo: 'PC', nome: 'Programação Concorrente', preRequisitos: ['SO', 'LAB_SO'], periodo: 'Optativas' },
    { codigo: 'CII', nome: 'Inteligência Computacional II', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'GSR', nome: 'Gestão de Produtos e Serviços', preRequisitos: [], periodo: 'Optativas' },
    { codigo: 'CDM', nome: 'Controle Digital de Sistemas Dinâmicos', preRequisitos: ['CD_I', 'LAB_CD_I'], periodo: 'Optativas' },
    { codigo: 'MD', nome: 'Modelagem de Sistemas Dinâmicos', preRequisitos: ['CD_I', 'LAB_CD_I'], periodo: 'Optativas' },
    { codigo: 'RP', nome: 'Reconhecimento de Padrões', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'CE', nome: 'Computação Evolucionária', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'ICPO', nome: 'Inteligência Computacional para Otimização', preRequisitos: ['OTIM_I'], periodo: 'Optativas' },
    { codigo: 'SBI', nome: 'Sistemas Bio-inspirados', preRequisitos: ['IA_I', 'LAB_IA_I'], periodo: 'Optativas' },
    { codigo: 'ADM_MER', nome: 'Administração Mercadológica', preRequisitos: [], periodo: 'Optativas' },
    { codigo: 'OTIM_COMB', nome: 'Otimização Combinatória', preRequisitos: ['OTIM_I'], periodo: 'Optativas' }
];

// =======================================================
// === 3. ESTADO GLOBAL DA APLICAÇÃO ===
// =======================================================
let progresso = {};
let dadosDaMatriz = [];
let obrigatorias = [];
let materiasVisiveis = true;
let currentUser = null;


// =======================================================
// === 4. LÓGICA PRINCIPAL (RODA APÓS A PÁGINA CARREGAR) ===
// =======================================================
// =======================================================
// === 4. LÓGICA PRINCIPAL (RODA APÓS A PÁGINA CARREGAR) ===
// =======================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- ROTEAMENTO: Decide qual código rodar baseado na página atual ---

    // LÓGICA DA PÁGINA INDEX (NOVA VERIFICAÇÃO)
    if (document.getElementById('index')) {
        configurarPaginaIndex();
    }

    // LÓGICA DA PÁGINA DE LOGIN
    if (document.getElementById('loginBtn')) {
        configurarPaginaLogin();
    }

    // LÓGICA DA PÁGINA DA MATRIZ
    if (document.getElementById('progressBar')) {
        configurarPaginaMatriz();
    }
});


// =======================================================
// === 5. FUNÇÕES DE CONFIGURAÇÃO DE PÁGINAS ===
// =======================================================

/**
 * Configura todos os eventos e a lógica da página de login.
 */
function configurarPaginaLogin() {
    console.log("Estou na página de Login.");
    const emailInput = document.getElementById('emailInput');
    const senhaInput = document.getElementById('senhaInput');
    const registrarBtn = document.getElementById('registrarBtn');
    const loginBtn = document.getElementById('loginBtn');

    registrarBtn.addEventListener('click', () => {
        const email = emailInput.value;
        const senha = senhaInput.value;
        auth.createUserWithEmailAndPassword(email, senha)
            .then(credenciais => {
                console.log('Usuário registrado!', credenciais.user);
                window.location.href = 'index.html'; // Redireciona para a escolha de matriz
            })
            .catch(erro => alert('Erro ao registrar: ' + erro.message));
    });

    loginBtn.addEventListener('click', () => {
        const email = emailInput.value;
        const senha = senhaInput.value;
        auth.signInWithEmailAndPassword(email, senha)
            .then(credenciais => {
                console.log('Usuário logado!', credenciais.user);
                window.location.href = 'index.html'; // Redireciona para a escolha de matriz
            })
            .catch(erro => alert('Erro ao logar: ' + erro.message));
    });
}

/**
 * Configura a proteção da página e todos os eventos da página da matriz.
 */
function configurarPaginaMatriz() {
// Dentro da sua função configurarPaginaMatriz()
// SUBSTITUA seu bloco onAuthStateChanged por este:

console.log("TESTE 1: Função configurarPaginaMatriz foi chamada. Anexando o listener de autenticação...");

auth.onAuthStateChanged(user => {
    // Este é o log mais importante. Se ele não aparecer, o Firebase não está funcionando.
    console.log("TESTE 2: onAuthStateChanged foi ACIONADO."); 

    if (user) {
        console.log("TESTE 3: SUCESSO. Usuário detectado dentro do 'if'. Email:", user.email);
        
        // As linhas abaixo só rodam se o teste 3 aparecer.
        document.body.classList.add('auth-ready');
        currentUser = user;
        mostrarInfoUsuario(user);
        carregarProgresso(user.uid);
    } else {
        console.log("TESTE 4: FALHA. Nenhum usuário detectado. Redirecionando...");
        window.location.href = 'login.html';
    }
});
    const confirmarQuebraBtn = document.getElementById('confirmarQuebraBtn');
    const baixarBtn = document.getElementById('baixarProgressoBtn');
    const uploadInput = document.getElementById('uploadProgressoInput');
    const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');
    const limparBotao = document.getElementById('limparSelecaoBtn');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const pageContainer = document.getElementById('pageContainer');

    if (confirmarQuebraBtn) confirmarQuebraBtn.addEventListener('click', quebrarPreRequisito);
    if (baixarBtn) baixarBtn.addEventListener('click', baixarProgresso);
    if (uploadInput) uploadInput.addEventListener('change', carregarProgressoDoArquivo);
    if (ocultarFeitasBtn) ocultarFeitasBtn.addEventListener('click', toggleMateriasVisibilidade);
    if (limparBotao) limparBotao.addEventListener('click', limparSelecao);
    
    if (hamburgerIcon && hamburgerMenu && closeMenuBtn && pageContainer) {
        hamburgerIcon.addEventListener('click', () => {
            hamburgerMenu.classList.add('active');
            pageContainer.classList.add('menu-open');
        });
        closeMenuBtn.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            pageContainer.classList.remove('menu-open');
        });
        document.addEventListener('click', (event) => {
            if (!hamburgerMenu.contains(event.target) && !hamburgerIcon.contains(event.target) && hamburgerMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                pageContainer.classList.remove('menu-open');
            }
        });
    }
}
/**
 * Configura a verificação de login para a página index.
 */
/**
 * Configura a verificação de login para a página index.
 */
/**
 * Configura a página index, incluindo os botões de login/logout e os links dinâmicos da matriz.
 */
function configurarPaginaIndex() {
    console.log("Estou na página Index.");

    const botoesMatriz = document.querySelectorAll('.matriz-btn');

    auth.onAuthStateChanged(user => {
        if (user) {
            // Se o usuário está LOGADO
            currentUser = user;
            mostrarInfoUsuario(user); // Mostra "Logado como..." e botão "Sair"

            botoesMatriz.forEach(botao => {
                botao.addEventListener('click', (event) => {
                    event.preventDefault(); // Impede que o link '#' faça a página pular
                    const anoMatriz = botao.dataset.matriz;
                    // Manda para a página de ACOMPANHAMENTO
                    window.location.href = `matriz_${anoMatriz}.html`;
                });
            });

        } else {
            // Se o usuário NÃO está logado
            currentUser = null;
            mostrarBotaoLogin(); // Mostra o botão "Fazer Login"

            botoesMatriz.forEach(botao => {
                botao.addEventListener('click', (event) => {
                    event.preventDefault();
                    const anoMatriz = botao.dataset.matriz;
                    // Manda para a página de VISUALIZAÇÃO
                    window.location.href = `visualizar_matriz.html?matriz=${anoMatriz}`;
                });
            });
        }
    });
}
// =======================================================
// === 6. FUNÇÕES DE DADOS E LÓGICA (Firestore) ===
// =======================================================

function salvarProgresso() {
    if (currentUser) {
        const materiasMarcadas = Object.keys(progresso).filter(key => progresso[key]);
        db.collection('progressos').doc(currentUser.uid).set({
            materias: materiasMarcadas
        })
        .then(() => console.log('Progresso salvo na nuvem!'))
        .catch(erro => console.error('Erro ao salvar:', erro));
    }
}

function carregarProgresso(userId) {
    db.collection('progressos').doc(userId).get().then(doc => {
        let progressoSalvo = [];
        if (doc.exists) {
            progressoSalvo = doc.data().materias || [];
            console.log('Progresso carregado da nuvem:', progressoSalvo);
        } else {
            console.log('Nenhum progresso encontrado para este usuário.');
        }
        aplicarProgressoNaTela(progressoSalvo);
    }).catch(erro => {
        console.error('Erro ao carregar progresso:', erro);
        renderizarMaterias();
    });
}

function aplicarProgressoNaTela(listaMateriasSalvas) {
    progresso = {};
    listaMateriasSalvas.forEach(codigo => {
        progresso[codigo] = true;
    });
    renderizarMaterias();
}

// =======================================================
// === 7. FUNÇÕES DE UI E MANIPULAÇÃO DO DOM ===
// =======================================================
/**
 * Renderiza todas as matérias na tela, organizadas por período.
 * ATUALIZADO: Agora cria uma tooltip com os pré-requisitos faltantes para matérias bloqueadas.
 */
function renderizarMaterias() {
    const container = document.querySelector('.materias-container');
    if (!container) return;
    container.innerHTML = '';

    dadosDaMatriz = window.location.pathname.includes('matriz_2008') ? matriz2008 : matriz2023;
    obrigatorias = dadosDaMatriz.filter(m => m.periodo !== 'Optativas');

    // --- NOVA ADIÇÃO: Mapa para encontrar nomes de matérias por código facilmente ---
    const mapaMaterias = new Map(dadosDaMatriz.map(m => [m.codigo, m.nome]));
    // --- FIM DA NOVA ADIÇÃO ---

    const periodos = {};
    dadosDaMatriz.forEach(materia => {
        const periodo = materia.periodo;
        if (!periodos[periodo]) periodos[periodo] = [];
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
        tituloPeriodo.textContent = periodo === 'Optativas' ? 'Disciplinas Optativas' : `Período ${periodo}`;
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
            
            const preRequisitosAtendidos = materia.preRequisitos.every(pr => progresso[pr]);
            const podeFazer = preRequisitosAtendidos; // Simplificado

            if (!podeFazer && !progresso[materia.codigo]) {
                checkbox.disabled = true;
                item.classList.add('bloqueada');

                // --- NOVA ADIÇÃO: Lógica para criar a tooltip ---
                const preRequisitosFaltantes = materia.preRequisitos
                    .filter(pr => !progresso[pr]) // Filtra apenas os pré-requisitos não concluídos
                    .map(prCodigo => mapaMaterias.get(prCodigo)); // Pega o nome completo de cada um

                if (preRequisitosFaltantes.length > 0) {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'prereq-tooltip';
                    

                    // --- FIM DA NOVA ADIÇÃO ---
                    
                    let tooltipContent = '<span>Pré-requisitos pendentes:</span><ul>';
                    preRequisitosFaltantes.forEach(nomeMateria => {
                        tooltipContent += `<li>${nomeMateria}</li>`;
                    });
                    tooltipContent += '</ul>';
                    tooltip.innerHTML = tooltipContent;
                    
                    item.appendChild(tooltip); // Adiciona a tooltip ao item da matéria
                }
                // --- FIM DA NOVA ADIÇÃO ---

            } else if (progresso[materia.codigo]) {
                item.classList.add('concluida');
            }
            
            listaMaterias.appendChild(item);
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
    if (periodoAtual <= 1) return 1.0;
    const materiasAnteriores = dadosDaMatriz.filter(m => m.periodo < periodoAtual && m.periodo !== 'Optativas');
    const totalMateriasAnteriores = materiasAnteriores.length;
    if (totalMateriasAnteriores === 0) return 1.0;
    
    let concluidasMateriasAnteriores = 0;
    materiasAnteriores.forEach(materia => {
        if (progresso[materia.codigo]) {
            concluidasMateriasAnteriores++;
        }
    });
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
    
    if (totalObrigatorias === 0) return;
    
    const obrigatoriasRestantes = totalObrigatorias - obrigatoriasConcluidas;
    const porcentagem = Math.round((obrigatoriasConcluidas / totalObrigatorias) * 100);

    barra.style.width = `${porcentagem}%`;
    texto.textContent = `${porcentagem}% concluído`;
    concluidasTexto.textContent = obrigatoriasConcluidas;
    restantesTexto.textContent = obrigatoriasRestantes;
}

function preencherQuebraRequisitoSelect() {
    const quebraMateriaSelect = document.getElementById('quebraMateriaSelect');
    if (!quebraMateriaSelect) return;
    quebraMateriaSelect.innerHTML = '<option value="">Selecione uma matéria</option>';
    dadosDaMatriz.forEach(materia => {
        if (!progresso[materia.codigo] && !materia.preRequisitos.every(pr => progresso[pr])) {
            const option = document.createElement('option');
            option.value = materia.codigo;
            option.textContent = materia.nome;
            quebraMateriaSelect.appendChild(option);
        }
    });
}

function quebrarPreRequisito() {
    const quebraMateriaSelect = document.getElementById('quebraMateriaSelect');
    const codigoMateria = quebraMateriaSelect.value;
    if (!codigoMateria) {
        alert("Selecione uma matéria para quebrar o pré-requisito.");
        return;
    }
    progresso[codigoMateria] = true;
    salvarProgresso();
    renderizarMaterias();
    alert(`Pré-requisito quebrado para a matéria selecionada.`);
    quebraMateriaSelect.value = '';
}

function toggleMateriasVisibilidade() {
    materiasVisiveis = !materiasVisiveis;
    renderizarMaterias();
    const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');
    if (ocultarFeitasBtn) {
        ocultarFeitasBtn.textContent = materiasVisiveis ? "Ocultar Feitas" : "Mostrar Todas";
    }
}

function limparSelecao() {
    if (confirm("Tem certeza de que deseja limpar todas as matérias selecionadas?")) {
        const todosCheckboxes = document.querySelectorAll('.materia-item input[type="checkbox"]:checked');
        todosCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        });
        alert("Todas as seleções foram limpas.");
    }
}

function mostrarInfoUsuario(user) {
    const userInfoDiv = document.getElementById('userInfo');
    if (!userInfoDiv) return;

    userInfoDiv.innerHTML = '';
    const emailText = document.createElement('p');
    emailText.textContent = `Logado como: ${user.email}`;
    const sairBtn = document.createElement('button');
    sairBtn.textContent = 'Sair';
    sairBtn.className = 'logout-btn';
    
    sairBtn.addEventListener('click', () => {
        auth.signOut().catch(error => console.error('Erro ao sair:', error));
    });

    userInfoDiv.appendChild(emailText);
    userInfoDiv.appendChild(sairBtn);
}

function baixarProgresso() {
    if (!currentUser) {
        alert("Você precisa estar logado para baixar seu progresso.");
        return;
    }
    const materiasMarcadas = Object.keys(progresso).filter(key => progresso[key]);
    if (materiasMarcadas.length === 0) {
        alert('Não há progresso para baixar.');
        return;
    }

    const dadosParaSalvar = JSON.stringify(materiasMarcadas);
    const blob = new Blob([dadosParaSalvar], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meu_progresso_${currentUser.uid.substring(0,5)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function carregarProgressoDoArquivo(event) {
    const file = event.target.files[0];
    if (!file || !currentUser) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const dadosCarregados = JSON.parse(e.target.result);
            if (!Array.isArray(dadosCarregados)) throw new Error("Formato inválido.");
            
            aplicarProgressoNaTela(dadosCarregados);
            salvarProgresso();
            alert('Progresso carregado com sucesso!');
        } catch (error) {
            alert('Erro ao carregar o arquivo.');
        }
    };
    reader.readAsText(file);
}

/**
 * Mostra o e-mail do usuário e o botão de Sair na tela.
 */
function mostrarInfoUsuario(user) {
    const userInfoDiv = document.getElementById('userInfo');
    // Se a div não existir na página atual, não faz nada.
    if (!userInfoDiv) return;

    // Limpa qualquer conteúdo anterior
    userInfoDiv.innerHTML = '';

    // Cria o elemento de parágrafo para o e-mail
    const emailText = document.createElement('p');
    emailText.textContent = user.email; // Mostra o e-mail do usuário logado
    
    // Cria o botão de sair
    const sairBtn = document.createElement('button');
    sairBtn.textContent = 'Sair';
    sairBtn.className = 'logout-btn'; // Adiciona a classe que estilizamos no CSS
    
    // Adiciona o evento de clique para fazer o logout
    sairBtn.addEventListener('click', () => {
        auth.signOut()
            .then(() => {
                console.log('Usuário deslogado com sucesso.');
                // Não precisa de redirecionamento aqui. O onAuthStateChanged vai cuidar disso.
            })
            .catch(error => {
                console.error('Erro ao fazer logout:', error);
            });
    });

    // Adiciona o texto e o botão na div
    userInfoDiv.appendChild(emailText);
    userInfoDiv.appendChild(sairBtn);
}

/**
 * Configura a proteção da página e todos os eventos da página da matriz.
 *//**
 * Configura a proteção da página e todos os eventos da página da matriz.
 */
function configurarPaginaMatriz() {
    console.log("Estou na página da Matriz.");
    
    // "Porteiro" que verifica se o usuário está logado
    auth.onAuthStateChanged(user => {
        if (user) {
            // =======================================================
            // CORREÇÃO CRÍTICA: A linha abaixo DEVE SER a primeira.
            // Ela garante que a página apareça imediatamente.
            document.body.classList.add('auth-ready');
            // =======================================================

            // Agora, o resto do código é executado.
            currentUser = user;
            console.log("Usuário autenticado:", user.email);
            mostrarInfoUsuario(user);
            carregarProgresso(user.uid);
            
        } else {
            // Se NÃO HÁ usuário logado:
            currentUser = null;
            console.log("Usuário não autenticado. Redirecionando para login...");
            window.location.href = 'login.html';
        }
    });

    // Anexa os eventos aos botões da página da matriz (código inalterado)
    const confirmarQuebraBtn = document.getElementById('confirmarQuebraBtn');
    const baixarBtn = document.getElementById('baixarProgressoBtn');
    const uploadInput = document.getElementById('uploadProgressoInput');
    const ocultarFeitasBtn = document.getElementById('ocultarFeitasBtn');
    const limparBotao = document.getElementById('limparSelecaoBtn');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const pageContainer = document.getElementById('pageContainer');

    if (confirmarQuebraBtn) confirmarQuebraBtn.addEventListener('click', quebrarPreRequisito);
    if (baixarBtn) baixarBtn.addEventListener('click', baixarProgresso);
    if (uploadInput) uploadInput.addEventListener('change', carregarProgressoDoArquivo);
    if (ocultarFeitasBtn) ocultarFeitasBtn.addEventListener('click', toggleMateriasVisibilidade);
    if (limparBotao) limparBotao.addEventListener('click', limparSelecao);
    
    // Lógica do menu hambúrguer (inalterada)
    if (hamburgerIcon && hamburgerMenu && closeMenuBtn && pageContainer) {
        hamburgerIcon.addEventListener('click', () => {
            hamburgerMenu.classList.add('active');
            pageContainer.classList.add('menu-open');
        });
        closeMenuBtn.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            pageContainer.classList.remove('menu-open');
        });
        document.addEventListener('click', (event) => {
            if (!hamburgerMenu.contains(event.target) && !hamburgerIcon.contains(event.target) && hamburgerMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                pageContainer.classList.remove('menu-open');
            }
        });
    }
}

/**
 * Mostra um botão "Fazer Login" quando o usuário não está autenticado.
 */
function mostrarBotaoLogin() {
    const userInfoDiv = document.getElementById('userInfo');
    if (!userInfoDiv) return;

    // Limpa qualquer conteúdo anterior
    userInfoDiv.innerHTML = '';

    // Cria o botão de login
    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Fazer Login';
    loginBtn.className = 'login-page-btn'; // Classe para estilização

    // Adiciona o evento de clique para redirecionar para a página de login
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Adiciona o botão na página
    userInfoDiv.appendChild(loginBtn);
}