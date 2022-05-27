const lista = [
    {
        name: '5kg de banana',
        preço: 30,
    },
    {
        name: '2kg de maçã',
        preço: 12,
    },
    {
        name: '7kg de jabuticaba',
        preço: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, current, index){
        console.log('Rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preço;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));