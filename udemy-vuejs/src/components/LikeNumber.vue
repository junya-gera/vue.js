<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment"> +1</button>
  </div>
</template>

<script>
export default { // この中にコンポーネントのオブジェクト(dataとかcomputedとか)を記述する
  // props: ["totalNumber"], 使いたい親コンポーネントのデータをpropsの配列、または下のようなオブジェクトで持つ
  props: {
    totalNumber: {
      type: Number, // バリデーション 型が数値じゃなければエラーが出る
      default: 10 // 何も入力されていなかった場合の値
      // required: true  この値がなければエラー。defaultがある場合はいらない
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment(){
      // 子から親へのデータ渡しは$emit()
      // 第一引数はカスタムイベントの名前(ケバブケース)、第二引数は親コンポーネントに渡すデータ
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>