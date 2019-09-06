import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount("#app")

// const a = 10;
// class A {

// }
// const f = () => {
//   console.log('start13' + a)
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('promise resolve')
//     }, 5000);
//   })
// }
// console.log(11111)
// setTimeout(() => {
//   console.log(333)
// }, 6000);
// // f().then((res) => {
// //   console.log(res)
// // })

// const b = async () => {
//   const result = await f();
//   console.log(result)
//   console.log(222)
// }

// b()