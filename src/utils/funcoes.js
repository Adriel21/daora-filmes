const formataData = data => {
    // O split é uma função que transforma uma string numa array
    const dataQuebrada = data.split("-")
    const dia = dataQuebrada[2]; // 26
    const mes = dataQuebrada[1]; // 11
    const ano = dataQuebrada[0]; // 2022
    console.log(data)
    console.log(dia, mes, ano)
    return `${dia}/${mes}/${ano}`;
};

export default formataData;