// apiScript.js


const API_URL = 'https://icanhazdadjoke.com/';

const mostrarPiada = (data) => {
    const subText = document.getElementById('jokeContainer');
    subText.innerHTML = data.joke;
}

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };

    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => mostrarPiada(data));  
};

 fetchJoke();