<template>
  <p>いいね({{ number }})</p>
</template>

<script>
export default { // この中にコンポーネントのオブジェクト(dataとかcomputedとか)を記述する
  data() {
    return {
      number: 5,
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>