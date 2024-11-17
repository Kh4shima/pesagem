const inputs = document.querySelectorAll('input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

const handleSubmit = (event) => {
    event.preventDefault();

    const ID = document.querySelector('input[name=ID]').value
    const peso = document.querySelector('input[name=peso]').value
    const data = document.querySelector('input[name=data]').value

    fetch('https://api.sheetmonkey.io/form/tmq1JLL7WeqtkjC9NW5mc7', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID, peso, data })
    });

    alert('Enviando dados de pesagem...')
    
    location.reload();
}

document.querySelector('form').addEventListener('submit', handleSubmit);



// Função para formatar a data no formato 'yyyy-mm-dd', que é o formato esperado pelo input type="date"
function obterDataAtual() {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses começam do 0, por isso somamos 1
    const dia = String(data.getDate()).padStart(2, '0'); // Adiciona zero à frente se for um número de um dígito
  
    return `${ano}-${mes}-${dia}`;
  }
  
  // Definir o valor do campo de data para o valor atual
  document.getElementById('data').value = obterDataAtual();