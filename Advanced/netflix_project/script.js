const TOKEN = ""
const BASE_URL = "https://api.themoviedb.org/3";
const BANNER_URL = "https://image.tmdb.org/t/p/original";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${TOKEN}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${TOKEN}&with_network=213`,
  fetchActionsMovies: `${BASE_URL}/discover/movie?api_key=${TOKEN}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${TOKEN}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${TOKEN}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${TOKEN}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${TOKEN}&with_genres=99`,
};

// banner section with refresh
const mainBg = document.getElementById("main-bg");
const movieTitle = document.getElementById("movie-title");
const movieDescription = document.getElementById("movie-desc");
axios.get(requests.fetchTrending)
  .then((response) => {
    const data = response.data.results;
    const randomMovie = data[Math.floor(Math.random() * data.length)];
    mainBg.src = `${BANNER_URL}${randomMovie.backdrop_path}`;
    movieTitle.textContent = randomMovie.title;
    movieDescription.textContent = randomMovie.overview;
  })
  .catch(function (error) {
    console.error(error);
  });

// define carousels
const owlOriginals = $('.netflix-originals-carousel').owlCarousel({
    margin: 15,
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 8 }
    }
});

const owlTrending = $('.trending-now-carousel').owlCarousel({
    margin: 10,
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 5 }
    }
});

const owlComedy = $('.comedy-carousel').owlCarousel({
    margin: 10,
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 5 }
    }
});

// carousel for originals
axios.get(requests.fetchNetflixOriginals)
  .then((response) => {
    const datas = response.data.results; 
    datas.forEach((data) => {
        let imageElement = document.createElement("img");
        imageElement.src = `${IMAGE_URL}${data.poster_path}`;
        imageElement.style.transition = "transform 0.3s ease";
        imageElement.addEventListener("mouseover", function () {
            imageElement.style.transform = "scale(1.1)";
        })
        imageElement.addEventListener("mouseleave", function () {
            imageElement.style.transform = "scale(1)";
        })
        $('.netflix-originals-carousel').owlCarousel('add', imageElement).owlCarousel('update');
    })
  })
  .catch(function (error) {
    console.error(error);
  });

// carousel for trending (actions)
axios.get(requests.fetchTrending)
  .then((response) => {
    const datas = response.data.results;
    datas.forEach((data) => {
        const divElement = document.createElement("div")
        divElement.style = "height:190px; width: 350px;"
        let imageElement = document.createElement("img");
        imageElement.src = `${IMAGE_URL}${data.poster_path}`;
        imageElement.style = "height: 100%; width: 100%;"
        imageElement.style.transition = "transform 0.4s ease";
        imageElement.addEventListener("mouseover", function () {
            imageElement.style.transform = "scale(1.08)";
        })
        imageElement.addEventListener("mouseleave", function () {
            imageElement.style.transform = "scale(1)";
        })
        divElement.appendChild(imageElement);
        $('.trending-now-carousel').owlCarousel('add', divElement).owlCarousel('update');
    })
  })
  .catch(function (error) {
    console.error(error);
  });

// carousel for comedy
const comedy = async () => {
  try {
    const response = await axios.get(requests.fetchComedyMovies);
    const datas = response.data.results;
    datas.forEach((data) => {
      const divElement = document.createElement("div");
      divElement.style = "height:190px; width: 350px;";
      let imageElement = document.createElement("img");
      imageElement.src = `${IMAGE_URL}${data.poster_path}`;
      imageElement.style = "height: 100%; width: 100%;";
      imageElement.style.transition = "transform 0.4s ease";
      imageElement.addEventListener("mouseover", function () {
        imageElement.style.transform = "scale(1.08)";
      });
      imageElement.addEventListener("mouseleave", function () {
        imageElement.style.transform = "scale(1)";
      });
      divElement.appendChild(imageElement);
      $(".comedy-carousel")
        .owlCarousel("add", divElement)
        .owlCarousel("update");
    });
  } catch (error) {
    console.error(error);
  }
};
comedy();