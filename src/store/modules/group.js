import axios from 'axios'

const state = {
  tongcheng:{},
  husttgeek:{},
  lvyou:{},
  buy:{},
  chat:{}
}

const actions = {

  getGroup(context){

    axios.get('api/group/tongcheng/').then( res => {
      context.state.tongcheng = res.data
      console.log(res.data);
    }).catch( err => console.log(err))

    axios.get('api/group/mai/').then( res => {
      context.state.buy = res.data
    }).catch( err => console.log(err))

    axios.get('api/group/lvyou/').then( res => {
      context.state.lvyou = res.data
    })

    axios.get('api/group/husttgeek/').then( res=> {
      context.state.husttgeek = res.data
    }).catch( err => console.log(err))

    axios.get('api/group/chat/').then( res=>{
      context.state.chat = res.data
    }).catch( err => console.log(err))
  }

}

export default {
  state,
  actions
}
