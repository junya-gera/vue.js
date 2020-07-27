<template>
  <div>
    <slot name="title">
      <!-- slotが置き換わる部分が何もない時に表示される(フォールバックコンテンツ) -->
      <h2>デフォルトのタイトル</h2> 
    </slot>
    <slot></slot> <!-- 親でtemplateに入っていないHTMLタグは全てdefaultという名前つきslotにまとめられここに入る -->
    <slot name="number">
      <h2>いいねの数</h2>
    </slot>
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