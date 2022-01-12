import { getMovies, getReport } from '@/services/api/movie-service'

const state = {
  movies: [],
  stats: null,
};

const getters = {
  movies: state => state.movies,
  stats: state => state.stats,
  statsByYear: state => year => {
    if (!state.stats?.year) return false;
    return state.stats.year.find(yr => yr.year === year);
  },
};

const mutations = {
  setMovies(state, movies) {
    state.movies = movies;
  },
  setStats(state, stats) {
    state.stats = stats;
  },
};

const actions = {
  getMovies({ getters, commit }) {
    let movies = getters.movies;
    if (movies && movies.length > 0) {
      return new Promise(resolve => resolve(movies));
    }
    return getMovies().then(res => {
      commit('setMovies', res);
      return res;
    })
  },
  getStats({ getters, commit }) {
    let stats = getters.stats;
    if (stats) {
      return new Promise(resolve => resolve(stats));
    }

    return getReport().then(res => {
      commit('setStats', res);
      return res;
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};