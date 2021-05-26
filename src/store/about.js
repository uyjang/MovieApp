export default {
  namespaced: true,
  state: () => ({ //데이터 불변성(참조하게 되니깐)을 위해서 함수형으로 만들어 줬음
    name: 'HEROPY',
    email: 'thesecon@gmail.com',
    blog: 'https://heropy.blog',
    phone: '+82-10-1234-5678',
    image: 'https://heropy.blog/css/images/logo.png'
  })
}