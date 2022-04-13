// Initial Values
const API_KEY = '3f6619a9ceef62224b97a825bd53616e';
const IMAGE_URL = 'https://theaudiodb.com/api/v1/json/2/searchtrack.php?s=coldplay&t=yellow';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=3f6619a9ceef62224b97a825bd53616e';

// Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#musician-searchable');

function musicianSection(musicians){
  return musicians.map((musicians) => {
      if (musicians.poster_path) {
          return `<img 
              src=${IMAGE_URL + musicians.poster_path} 
              data-movie-id=${musicians.id}
          />`;
      }
    })
}

function createMusiciansContainer(musicians) {
  const movieElement = document.createElement('div');
  movieElement.setAttribute('class', 'musicians');
  
  const musiciansTemplate = `
      <section class="section">
        ${musiciansSection(musicians)}
      </section>
      <div class="content">
        <p id="content-close">X</p>
        </div>
  `;
    
    
    movieElement.innerHTML = musiciansTemplate;
    return musiciansElement;
}

function renderSearchMusicians(data){
        // data.results []
        musiciansSearchable.innerHTML = '';
        const musicians = data.results;
        const musiciansBlock = createMusiciansContainer(musicians);
        musiciansSearchable.appendChild(musiciansBlock);
        console.log('Data: ', data);
}

buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  
  const newUrl = url + '&query=' + value;
  /*global fetch */
  
  fetch (newUrl)
      .then((res) => res.json())
      .then(renderSearchMusicians)
      .catch((error) => {
        console.log('Error: ', error);
      });
  
  inputElement.value = '';
  console.log('Value: ', value);
}

