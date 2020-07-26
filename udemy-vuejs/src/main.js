import Vue from 'vue';
// App.vueというコンポーネントの3つ(template,script,style)をAppというオブジェクト(dataとかcomputedとか)にしてimportする
import App from './App.vue' ;

import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false

// LikeNumberというコンポーネントをグローバル登録
// 第二引数はdataなどのオブジェクトになるはずだが、LikeNumberという名前のコンポーネントをオブジェクトとしてimportしてあるので、
// LikeNumber.vueという単一ファイルコンポーネントをどこでも使えるようになった
Vue.component('LikeNumber',LikeNumber); 

new Vue({
  render: h => h(App), // render関数でAppというオブジェクト(元はコンポーネント)を仮想ノードにしている
}).$mount('#app')
