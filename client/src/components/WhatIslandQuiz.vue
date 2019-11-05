<template lang="html">

  <div id="quiz">

    <div v-if="introduction">
      <h1>Welcome to da quiz: {{title}}</h1>
      <p>
        Answer the following questions to find out wehat island suits you best!
      </p>

      <button @click="startQuiz">START!</button>
    </div>

    <div v-if="questionsSection">
      <question
                :question="questions[currentQuestion]"
                v-on:answer="handleAnswer"
                :question-number="currentQuestion+1"
      ></question>
    </div>

    <div v-if="results">
      You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.
    </div>

  </div>

</template>

<script>
import { eventBus } from "../main.js"

const quizQuestions =



export default {
data(){
  introduction: false,
  questionsSection: false,
  results: false,
  title: '',
  questions: [],
  currentQuestion: 0,
  answers: [],
  score: 0
  }
},

mounted(){

  fetch(quizQuestions)
  .then(res => res.json())
  .then(res => {
    this.title = res.title;
    this.questions = res.questions;
    this.introduction = true;
  })

},

methods: {
  startQuiz() {
    this.introduction = false;
    this.questions = true;
  },

  handleAnswer(event) {
      this.answers[this.currentQuestion]=event.answer;
      if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      this.questions.forEach((a, index) => {
        if(this.answers[index] === a.answer) this.correct++;
      });
    }
  }
})
}


</script>

<style lang="css" scoped>
</style>
