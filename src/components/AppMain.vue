<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getFlag(lang) {
      if (lang == "en") {
        lang = "US";
      } else if (lang == "pt") {
        lang = "PO";
      } else if (lang == "es") {
        lang = "SP";
      }
      const flag = `${store.countryFlagUrl}${lang}.png`;
      return flag;
    },

    getImage(img) {
      let url = "https://image.tmdb.org/t/p/" + "w342" + img;

      if (img == null) {
        let url =
          "https://upload.wikimedia.org/wikipedia/commons/archive/3/3f/20220519031947%21Placeholder_view_vector.svg";
      }
      return url;
    },

    calculateAverage(average) {
      let avarageOne = (average / 10) * 100;
      let avarageTwo = (avarageOne / 100) * 5;
      avarageTwo = Math.round(avarageTwo);
      return avarageTwo;
    },
  },
};
</script>

<template>
  <main>
    <div class="filmList container">
      <div class="titleFilms">
        <h2 class="genere">Film</h2>
      </div>
      <div class="allFilms d-flex flex-wrap justify-content-center">
        <div v-for="movie in store.movies">
          <div class="cardFilm">
            <div class="cardFilmPoster">
              <img :src="getImage(movie.poster_path)" />
            </div>
            <div class="datiFilm">
              <h2>{{ movie.title }}</h2>
              <h5>{{ movie.original_title }}</h5>
              <img class="flag" :src="getFlag(movie.original_language)" />
              <div class="stars">
                <span v-for="singlVote in calculateAverage(movie.vote_average)">
                  ★
                </span>
                <span
                  v-for="singlVote in 5 - calculateAverage(movie.vote_average)"
                >
                  ☆
                </span>

                <p>{{ movie.overview }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cardFilm {
  min-width: 350px;
  min-height: 450px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
  margin: 20px;
}
.cardFilmPoster img {
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
.datiFilm {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(39, 38, 38, 0.7);
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
  overflow: auto;
  color: white;
}
.cardFilm:hover .datiFilm {
  left: 0px;
  transition: all 0.7s ease-in-out;
  clip-path: circle(75%);
}
.cardFilm:hover {
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transform: scale(0.97);
}
.cardFilmPoster:hover img {
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transform: scale(1.6) rotate(0deg);
  filter: blur(10px);
}
.datiFilm h2 {
  color: #f5da0a;
  margin-bottom: 10px;
}
.datiFilm h5 {
  margin-bottom: 20px;
}
.datiFilm p {
  margin-top: 10px;
  line-height: 24px;
  height: 70%;
}

.stars span {
  margin-top: 10px;
  color: #d8ac1d;
}
</style>
