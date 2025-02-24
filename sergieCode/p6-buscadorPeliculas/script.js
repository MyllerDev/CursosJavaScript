document.getElementById('searchButton').addEventListener('click', searchMovies);   // Evento click en el botón de búsqueda

let api_key = '7b77aa78ce049fcde70db809b367a648'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'

let resultsContainer = document.getElementById('results');

function searchMovies(){
    resultsContainer.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value;   // Valor del input de búsqueda

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)   // Petición a la API
    .then(response => response.json())
    .then(response => displayMovies(response.results))
    .catch(error => console.log(error));
}

function displayMovies(movies){

    resultsContainer.innerHTML = '';

    if(movies.length === 0){
        resultsContainer.innerHTML = '<p>No se encontraron resultados</p>';
        return // Termina la función
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div');// Crea un div
        movieDiv.classList.add('movie'); // Añade la clase 'movie' al div

        let title = document.createElement('h2'); // Crea un h3
        title.textContent = movie.title; // Añade el título de la película al h3

        let relaseDate = document.createElement('p'); // Crea un p
        relaseDate.textContent = 'La fecha de lanzamiento fue: '+ movie.release_date; // Añade la fecha de lanzamiento de la película al p

        let overview = document.createElement('p'); // Crea un p
        overview.textContent = movie.overview; // Añade la descripción de la película al p

        let poster_path = urlImg + movie.poster_path; // Añade la imagen de la película al p
        let poster = document.createElement('img'); // Crea un img
        poster.src = poster_path; // Añade la imagen al src


        movieDiv.appendChild(poster); 
        movieDiv.appendChild(title); 
        movieDiv.appendChild(relaseDate); 
        movieDiv.appendChild(overview); 

        resultsContainer.appendChild(movieDiv);
    })
}