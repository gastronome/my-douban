import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'

import movie from './modules/movie.js'
import book from './modules/book.js'
import user from './modules/user.js'
import group from './modules/group.js'
import activities from './modules/activities.js'

export default new Vuex.Store({
  modules: {
    movie,
    activities,
    book,
    group,
    user
  }
});
