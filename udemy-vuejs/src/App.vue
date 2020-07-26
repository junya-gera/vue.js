<template>
  <div>
    <LikeHeader></LikeHeader> <!-- ローカル登録 -->
    <LikeNumber></LikeNumber> <!-- グローバル登録 -->
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default { // この中にコンポーネントのオブジェクト(dataとかcomputedとか)を記述する
  components: { // コンポーネントのローカル登録
    // LikeHeader: LikeHeader  ES6なら同じ名前にするなら下のように省略できる
    LikeHeader
  }
}
</script>

<style scoped>
  div{
    border: 1px solid blue;
  }
</style>