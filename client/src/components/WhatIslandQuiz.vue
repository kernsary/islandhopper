<template lang="html">

  <div id="quiz">

    <div v-if="introduction" id="intro">
      <h1>Welcome to da quiz: {{title}}</h1>
      <p>
        Answer the following questions to find out wehat island suits you best!
      </p>

      <button @click="startQuiz">Start The Quiz</button>
    </div>

    <div v-if="questionsSection"
    :question="questions[currentQuestion]"
    v-on:answer="handleAnswer"
    :question-number="currentQuestion+1" id="questionsection">
    <h2>Question {{ questionNumber }}:</h2><br/>
    <p>{{ question.text }} </p>

    <!-- <div>
    <div v-for="(answer,index) in question.answers">
    <input type="radio" :id="'answer'+index" name="currentQuestion" v-model="answer" :value="answer"><label :for="'answer'+index">{{answer}}</label><br/>
  </div>
</div> -->

<button @click="submitAnswer">Submit</button>
</div>
</div>



<!-- <div v-if="results" id="resultssection">

</div> -->

</div>



</template>

<script>
import { eventBus } from "../main.js"

export default {
  data(){
    return{
      introduction: false,
      questionsSection: false,
      results: false,
      title: "",
      currentQuestion: 0,
      answers: [],
      score: 0,
      answer: ""
    }
  },

  props: ['questions', 'question-number'],

  // mounted(){
  //
  //   fetch(quizQuestions)
  //   .then(res => res.json())
  //   .then(res => {
  //     this.title = res.title;
  //     this.questions = res.questions;
  //     this.introduction = true;
  //   })
  //
  // },

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
    },

    submitAnswer() {
      this.$emit('answer', {answer:this.answer})
      this.answer = null
    }
  }
};

</script>

<style lang="css" scoped>
</style>
