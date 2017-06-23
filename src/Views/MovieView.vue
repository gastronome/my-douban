<template lang="html">
  <div class="movie-view has-header">
    <scroller title='影院速递' type="cover" :items="hotMovies"></scroller>
    <scroller title='免费在线观影' type="cover" :items="topMovies"></scroller>
    <scroller title='新片速递' type="cover" :items="newMovies"></scroller>
    <scroller title='发现好电影' type="txt" :items="movieTags"></scroller>
    <types :types="movieTypes"></types>
    <download-app></download-app>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

import Scroller from '../components/Scroller'
import Types from "../components/Types"
import DownloadApp from "../components/DownloadApp"


export default {

  computed:{
      // ...mapState(['hotMovies','newMovies','topMovies','movieTags'])
      ...mapState(
        {
          hotMovies: state => state.movie.hotMovies,
          topMovies: state => state.movie.topMovies,
          newMovies: state => state.movie.newMovies,
          movieTags: state => state.movie.movieTags,
          movieTypes: state => state.movie.movieTypes
        }
      )
  },
  methods:{
    ...mapActions(['getMovie'])
  },
  created(){
    this.getMovie();
  },
  components:{ Scroller ,Types ,DownloadApp}

  // created(){
  //   axios.get('https://api.douban.com/v2/movie/in_theaters?count=8').then( res => {
  //     this.hotMovies = res.data.subjects;
  //     console.log(this.hotMovies);
  //   });
  //   axios.get('https://api.douban.com/v2/movie/coming_soon?count=8').then( res => {
  //     this.newMovies = res.data.subjects;
  //     console.log(this.newMovies);
  //   });
  //   axios.get('https://api.douban.com/v2/movie/top250?count=8').then( res => {
  //     this.topMovies = res.data.subjects;
  //     console.log(this.topMovies);
  //   });
  // },

}
</script>

<style lang="less" scoped>
</style>
