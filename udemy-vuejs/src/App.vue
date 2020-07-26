<template>
  <div>
    <LikeHeader>  <!-- ローカル登録 -->
      <!-- 子コンポーネントタグの中身のHTMLは子コンポーネントのslotタグに置き換わる -->
      <div>
        <h1>トータルのいいね数!</h1>
        <h2>{{ number }}</h2>
      </div>
    </LikeHeader>
    <!-- 子コンポーネントに渡したいデータを属性にする(左のnumber) -->
    <!-- HTMLのプロパティはケバブケースで書く -->
    <!-- v-on:my-click→子コンポーネントで作ったカスタムイベント。 $event→子コンポーネントから送られたデータ -->
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber> <!-- グローバル登録 -->
    <LikeNumber :total-number="number"></LikeNumber> <!-- グローバル登録 -->
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default { // この中にコンポーネントのオブジェクト(dataとかcomputedとか)を記述する
  components: { // コンポーネントのローカル登録
    // LikeHeader: LikeHeader  ES6なら同じ名前にするなら下のように省略できる
    LikeHeader
  },
  data() {
    return {
      number: 10
    }
  }
}
</script>

<style scoped>
  div{
    border: 1px solid blue;
  }
</style>