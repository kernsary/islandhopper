<template lang="html">

  <div id="quiz">

    <div v-if="introduction" id="intro">
      <h1>Welcome to the quiz! |  Fàilte don cheisneachadh!</h1>
      <p>
        Answer the following questions to find out which island suits you best!
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

        <button class="previous button" v-if="questionIndex > 0" v-on:click="previousQuestion()">
          Previous
        </button>
        <button class="next button" v-on:click="nextQuestion">
          Next
        </button>
      </div>
    </div>

    <div v-show="questionIndex === this.questions.length" v-on>
      <h3>Your Results</h3>
      <button type="results button" @click="addPoints()">See Which Island You Are</button>
      <island-details :selectedIsland="selectedIsland" v-if="selectedIsland && result"></island-details>
    </div>

  </div>

</div>

</div>



</div>



</template>

<script>
import { eventBus } from "../main.js"
import QuizServices from "../services/QuizServices.js"
import IslandDetails from "./IslandDetails.vue"
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
      sortedResponses: [],
      questionIndex: 0,
      result: "",
      pointsArray: [
        {
          name: "Seil",
          points: 0
        },
        {
          name: "Skye",
          points: 0
        },
        {
          name: "Arran",
          points: 0
        },
        {
          name: "Sandray",
          points: 0
        },
        {
          name: "Mainland",
          points: 0
        },
        {
          name: "Mainland Orkney",
          points: 0
        },
        {
          name: "Bute",
          points: 0
        },
        {
          name: "Mull",
          points: 0
        },
        {
          name: "Yell",
          points: 0
        },
        {
          name: "Tiree",
          points: 0
        },
        {
          name: "Islay",
          points: 0
        },
        {
          name: "Westray",
          points: 0
        }]
      }



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
    },

    props: ["questions", "islands", 'selectedIsland'],

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

      addPoints() {
        this.flatten()
        console.log("add points:", this.sortedResponses);
        this.sortedResponses.forEach((item) => {
          this.pointsArray.forEach((island) => {
            if(island.name === item) {
              island.points +=1
            }
          })
        })
        const sortedByPoints = this.pointsArray.sort((island1, island2)=>{
          return island2.points - island1.points});
          this.result = sortedByPoints[0].name;
          console.log("Result:", this.result);

          this.islands.forEach((island) => {
            if(island.name === this.result) {
              this.selectedIsland = island
            }
          })
      },

        flatten() {
          this.sortedResponses = this.userResponses.flat();
          console.log("Sorted Responses: ", this.sortedResponses);
          console.log(this.pointsArray[0].points);
        },


        //
        //  unique() {
        //   return this.launches.map((launch) => {
        //     return launch.rocket.second_stage.payloads[0].nationality;
        //   })
        //   .filter((uniqueLaunch, index, array) => {
        //     return array.indexOf(uniqueLaunch) === index;
        //   })
        // },
        //
        // chartData() {
        //   return this.uniqueNationalities.map((uniqueNation) => {
        //     const numberOfOccurrences = this.nationalities.reduce((accumulator, nation) => {
        //       return accumulator + (nation === uniqueNation);
        //     }, 0);
        //     return [uniqueNation, numberOfOccurrences]
        //   })
        // }

      },

      components: {
        "island-details": IslandDetails
      }
    };

    </script>

    <style lang="css" scoped>
    </style>
