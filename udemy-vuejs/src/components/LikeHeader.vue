<template>
  <div>
    <!-- スロットプロパティを使って子コンポーネントのデータを親へ渡す
         userというデータをApp.vueで使いたい。
         ① userを使うslotにv-bind:(好きな名前1)="user"という形で属性に名前をつける(スロットプロパティ)
         ② 親の方でv-slot:title="(好きな名前2)"とするとuserが好きな名前2として親で使用できるようになる -->
    <slot name="title" :user="user">
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
    props: ["headerText"],
    data() {
      return {
        user: {
          firstName: 'ミコ',
          lastName: '伊井野',
        }
      }
    }
  }
</script>

<style scoped>
  h1 { /* slotに置き換わった部分のstyleも子コンポーネントで指定できる */
    color: red;
  }
</style>