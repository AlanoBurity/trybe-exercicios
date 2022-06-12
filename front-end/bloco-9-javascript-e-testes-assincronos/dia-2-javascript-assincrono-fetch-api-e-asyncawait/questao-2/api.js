const cripto = `https://api.coincap.io/v2/assets`;



const dom = (data) => {
  const tratarDados = data.filter((elemento) => elemento.rank <= 10)
  const selecionarDados = tratarDados.map(({name, priceUsd, symbol}) => ({name, priceUsd, symbol}))
  
  const coins = document.querySelector('body')
     selecionarDados.forEach(({name, priceUsd, symbol}) => {
       const div = document.createElement('div')
       div.innerHTML = `${name} (${symbol}) : ${priceUsd}`
       coins.appendChild(div)
     })
/*      const coins = document.getElementById('listinha')
     coins.innerHTML =  console.log(selecionarDados); */
};

const moedas = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept-Encoding': 'gzip' }
      };

    fetch(cripto, myObject)
    .then(response => response.json())
    .then(data => dom(data.data));  
};

moedas();