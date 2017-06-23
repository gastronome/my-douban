import axios from 'axios'

const state = {
  recommends : [],
  year : new Date().getFullYear(),
  month : new Date().getMonth() + 1,
  day : new Date().getDate(),
  lastDate:'',
}

const mutations = {

}

const actions = {

  loadMore(context,state){

    let lastMonth = context.state.month;
    let lastDay = context.state.day--;

    switch(lastMonth){

      case 1 :
      case 2 :
      case 5 :
      case 7 :
      case 8 :
      case 10 :
      case 12 :
        if( lastDay == 0 ){
          // lastMonth -- ;
          lastMonth = context.state.month--;
          lastDay = 30;
        }
        // else{
        //   lastDay = context.state.day--;
        // }
      break;
      case 4 :
      case 6 :
      case 9 :
      case 11 :
        if( lastDay == 0 ){
          // lastMonth -- ;
          lastMonth = context.state.month--;
          lastDay = 31;
        }
        // else{
        //   lastDay = context.state.day--;
        // }
      break;
      case 3:
        if( lastDay == 0 ){
          // lastMonth --;
          lastMonth = context.state.month--;
          lastDay = 28;
        }
        // else{
        //   lastDay = context.state.day--;
        // }
    }

    context.state.lastDate = context.state.year + '-' + lastMonth + '-' + lastDay;

    axios.get(
      'mapi/recommend_feed?alt=json&next_date='+
       context.state.lastDate +'&loc_id=108288'
     )
    .then( res => {
      context.state.recommends = context.state.recommends.concat( res.data.recommend_feeds )
    }).catch( err => console.log(err) )
    console.log(context.state.lastDate);
  },

  getEvents(context){

    axios.get('mapi/recommend_feed?alt=json&next_date=&loc_id=108288').then( res => {
      context.state.recommends = res.data.recommend_feeds
      context.state.date = res.data.date
      // console.log(context.state.date);
    }).catch( err => console.log(err) )

  }
}

export default {
  state,
  actions
}
