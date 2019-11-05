<template lang="html">
  <div>
  <strong>Question {{ questionNumber }}:</strong><br/>
  <strong>{{ question.text }} </strong>

  <div v-if="question.type === 'mc'">
    <div v-for="(mcanswer,index) in question.answers">
    <input type="radio" :id="'answer'+index" name="currentQuestion" v-model="answer" :value="mcanswer"><label :for="'answer'+index">{{mcanswer}}</label><br/>
    </div>
  </div>

  <button @click="submitAnswer">Answer</button>
</div>
</template>

<script>
export default {
  data(){
    answer: ""
  }
},
propa: ['question', 'question-number'],
methods: {
  submitAnswer: function() {
      this.$emit('answer', {answer:this.answer})
    this.answer = null
  }
}
</script>

<style lang="css" scoped>
</style>
