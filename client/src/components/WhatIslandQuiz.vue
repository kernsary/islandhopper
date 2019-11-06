<template lang="html">

  <div id="quiz">

    <div v-if="introduction" id="intro">
      <h1>Welcome to da quiz: {{title}}</h1>
      <p>
        Answer the following questions to find out wehat island suits you best!
      </p>

      <button v-on:click="startQuiz()">Start The Quiz</button>
    </div>

    <div v-if="questionsSection" v-for="(question, index) in this.questions">
      <div v-show="index === questionIndex">

        <h1> {{question.text}}</h1>

        <ol>
          <li v-for="option in question.options">
            <label>
                <input type="radio"
                       v-bind:value="option.value"
                       v-bind:name="index"
                       v-model="userResponses[index]"
                       >
                       {{option.text}}
              </label>
          </li>

        </ol>

        <button class="previous button" v-if="questionIndex > 0" v-on:click="previousQuestion">
          Previous
        </button>
        <button class="next button" v-on:click="nextQuestion" @click="result()">
          Next
        </button>
      </div>
    </div>

    <div v-show="questionIndex === this.questions.length" >
      <h3>Your Results</h3>
      <p>
        You are:
      </p>
    </div>

      </div>

    </div>

</div>



  </div>



</template>

<script>
import { eventBus } from "../main.js"
import QuizServices from "../services/QuizServices.js"
// import app from "../App.vue"

export default {
  data(){
    return{
      introduction: true,
      questionsSection: false ,
      results: false,
      title: "",
      currentQuestion: 0,
      answers: [],
      answer: "",
      userResponses: [],
      questionIndex: 0
    }
  },

  props: ['questions'],

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
      console.log(this.introduction);
      console.log(this.questionsSection);
      this.introduction = false;
      this.questionsSection = true;
      console.log(`intro value ${this.introduction}`);
      console.log(`questions value ${this.questionsSection}`);
      console.log(this.questions);
    },

    nextQuestion() {
      this.questionIndex++
      console.log(this.userResponses);
    },

    previousQuestion() {
      this.questionIndex--
    },

    submitAnswer() {
      this.$emit('answer', {answer:this.answer})
      this.answer = null
    },

    result() {
      const sortedResponses = this.userResponses.flat();
      console.log("Sorted Responses: ", sortedResponses);
    }
  }
};

</script>

<style lang="css" scoped>
</style>
