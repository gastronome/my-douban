import axios from 'axios'

const state = {
  login_email:'',
  login_token:'',
  login_name:'',
}

const mutations = {
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.nickname
  },
}

const actions = {
  register({ commit }, payload){
    axios({
      url: 'https://douban.herokuapp.com/user/',
      method: 'post',
      data: {
        account:payload.account,
        pwd:payload.pwd,
      }
    })
    .then(res=>{
      localStorage.setItem('account',res.body.account)
      localStorage.setItem('nickname',res.body.nickname)
      localStorage.setItem('token',res.body.token)
    })
    .catch(err=>console.log(err))
  }
}

export default {
  state,
  mutations,
  actions
}
