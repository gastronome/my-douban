import axios from 'axios'

const state = {
    fictional:[],
    nonfictional:[],
    bookstore:[],
    bookTags:[
      {
        title: '小波看书',
        href: 'https://m.douban.com/doulist/10372/',
        color: '#4F9DED'
      },
      {
        title: '村上春树周边',
        href: 'https://m.douban.com/doulist/105583/',
        color: '#FF4055'
      },
      {
        title: '不可饶恕的女人们',
        href: 'https://m.douban.com/doulist/35573',
        color: '#42BD56'
      },
      {
        title: '爱欲书',
        href: 'https://m.douban.com/doulist/38088147',
        color: '#FF4055'
      },
      {
        title: '他们还写侦探小说',
        href: 'https://m.douban.com/doulist/645579',
        color: '#4F9DED'
      },
      {
        line: true
      },
      {
        title: '人生识字始忧患',
        href: 'https://m.douban.com/doulist/192653',
        color: '#CC3344'
      },
      {
        title: '詩歌書店',
        href: 'https://m.douban.com/doulist/89925',
        color: '#FFAC2D'
      },
      {
        title: '尝试理解人类变化无常不可测心理相关小荐',
        href: 'https://m.douban.com/doulist/45361809',
        color: '#3BA94D'
      }
    ],
    bookTypes:{
      baseUri:'https://m.douban.com/',
      items:[
        {
          title:'小说',
          href:'book/novel'
        },
        {
          title:'爱情',
          href:'book/love'
        },
        {
          title:'历史',
          href:'book/history'
        },
        {
          title:'外国文学',
          href:'book/foreign'
        },
        {
          title:'青春',
          href:'book/youth'
        },
        {
          title:'励志',
          href:'book/motivation'
        },
        {
          title:'随笔',
          href:'book/essay'
        },
        {
          title:'传记',
          href:'book/bio'
        },
        {
          title:'推理',
          href:'book/detective'
        },
        {
          title:'旅行',
          href:'book/travel'
        },
        {
          title:'奇幻',
          href:'book/fantasy'
        },
        {
          title:'经管',
          href:'book/business'
        }
      ]
    }
}

const actions = {
  getBook(context){
    axios.get('api/book/search?q=虚构类&count=8').then(res =>{
      context.state.fictional = res.data.books
    }).catch(err=> console.log(err))

    // axios.get('http://localhost:4001/proxy?url=https://api.douban.com/v2/book/search?q=虚构类&count=8').then(res =>{
    //   context.state.fictional = res.data.books
    // }).catch(err=> console.log(err))
    // axios({
    //   method:'get',
    //   '/api':'http://api.douban.com/v2',
    //   url:'book/search?q=虚构类&count=8'
    // }).then(res =>{
    //   context.state.fictional = res.data.books
    // }).catch(err=> console.log(err))

    axios.get('api/book/search?q=非虚构类&count=8').then(res=>{
      context.state.nonfictional = res.data.books
    }).catch(err=> console.log(err))
    axios.get(
      'api/book/search?q=旅行&count=8'
    ).then(res=>{
      context.state.bookstore = res.data.books
      // console.log(res.data.books);
    })
  }
}

export default {
  state,
  actions
}
