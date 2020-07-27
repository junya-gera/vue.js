<template>
  <div>
    <LikeHeader header-text="hello">  <!-- ローカル登録 -->
      <!-- 子コンポーネントタグの中身のHTMLは子コンポーネントのslotタグに置き換わる -->
      <template v-slot:[title]="slotProps">
        <h1>トータルのいいね数!</h1>
        <h2>{{ slotProps.user.lastName + slotProps.user.firstName }} さん</h2>
      </template>
      <h3>よろしくお願いします</h3>
      <template #number> <!-- v-slotは#に置き換えられる  -->
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <!-- 子コンポーネントに渡したいデータを属性にする(左のnumber) -->
    <!-- HTMLのプロパティはケバブケースで書く -->
    <!-- v-on:my-click→子コンポーネントで作ったカスタムイベント。 $event→子コンポーネントから送られたデータ -->
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber> <!-- グローバル登録 -->
    <LikeNumber :total-number="number"></LikeNumber> <!-- グローバル登録 -->


    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>

    <!-- 動的コンポーネントは本来切り替えるたびにインスタンスが破壊と再生成されている。
         キャッシュ(計算中の数値、inputの中身など)させたい場合はkeep-aliveタグの中にcomponentタグを入れれば残る -->
    <keep-alive>
      <!-- 動的コンポーネント componentタグのis属性に動的にv-bindでコンポーネント名を入れるとそれがここに表示される -->
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';

export default { // この中にコンポーネントのオブジェクト(dataとかcomputedとか)を記述する
  components: { // コンポーネントのローカル登録
    // LikeHeader: LikeHeader  ES6なら同じ名前にするなら下のように省略できる
    LikeHeader,
    About
  },
  data() {
    return {
      number: 10,
      title: "title",
      currentComponent: 'Home',
    }
  }
}
</script>

<style scoped>
  div{
    border: 1px solid blue;
  }
</style>