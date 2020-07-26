<template>
  <div>
    <p>いいね({{ totalNumber / 2 }})</p>
    <button @click="increment"> +1</button>
  </div>
</template>

<script>
export default { // この中にコンポーネントのオブジェクト(dataとかcomputedとか)を記述する
  props: ["totalNumber"], // 使いたい親コンポーネントのデータをpropsの配列で持つ
  methods: {
    increment: function(){
      this.totalNumber++;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>