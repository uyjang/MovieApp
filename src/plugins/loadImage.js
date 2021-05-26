export default {
  install(app) {
    app.config.globalProperties.$loadImage = src => { //$loadImage는 함수로 지금 만들어졌음
      return new Promise(resolve => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          resolve()
        })
      })
    }
  }
}
