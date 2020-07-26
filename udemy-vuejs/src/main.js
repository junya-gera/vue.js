import Vue from 'vue'
import App from './App.vue' 
// App.vueというコンポーネントの3つ(template,script,style)をAppというオブジェクト(dataとかcomputedとか)にしてimportする

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // render関数でAppというオブジェクト(元はコンポーネント)を仮想ノードにしている
}).$mount('#app')
