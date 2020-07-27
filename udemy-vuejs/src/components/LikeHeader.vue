<template>
  <div>
    <slot></slot>
    <h2>{{headerText}}</h2>
  </div>
</template>

<script>
  export default {
    props: ["headerText"]
  }
</script>

<style scoped>
  h1 { /* slotに置き換わった部分のstyleも子コンポーネントで指定できる */
    color: red;
  }
</style>