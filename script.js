// object
/*
Objeto que vai guardar os dados das atividades
*/
const atividade = {
    nome: "Almoço",
    data: new Date("2026-01-06 02:45"),
    finalizada: true,
}


// lista, array, vetor []
/*
Lista onde a gente vai adicionando as atividades para ter mais de uma na nossa aplicação
*/
const atividades = [
    atividade, 
    {
        nome: 'Academia em Grupo',
        data: new Date("2026-01-06 02:59"),
        finalizada: false,
    },
    {
        nome: 'Academia em Grupo2',
        data: new Date("2026-01-06 02:59"),
        finalizada: true,
    },
]


// arrow function
/*
Nessa função a gente recebe o parametro de atividade
cria uma variavel chamada input e adicona nela um input do tipo checkbos sem fechar a tag
cria uma estrutura de condição com if para verificar se no objeto atividade ela foi finalizada
    se sim, concatena o atributo checked
    se não continua
depois concatenamos o fechamento da tag
retornamos a tag div com os valores da atividade:
    o checkbox
    o nome da atividade
    data da atividade
*/
const criarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox" '

    if(atividade.finalizada) {
        input += 'checked'
    }

    input += '>'

    return `
            <div>
                ${input}
                <span>${atividade.nome}</span>
                <time>${atividade.data}</time>
            </div>
    `
}

// croiamos uma contante que vai receber um seletor do documento html, no qual é o section
const section = document.querySelector('section')

/*
– o for percorre a lista atividades
– a cada volta, ele pega uma atividade
– chama a função criarItemDeAtividade(atividade)
– essa função retorna um HTML (no seu caso, uma div)
– esse HTML é inserido dentro da mesma section
– resultado: várias divs, uma para cada atividade
*/
for(let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
}

