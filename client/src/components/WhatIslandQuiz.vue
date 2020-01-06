<template lang="html">

  <section class="quizContainer">

    <div class="questionBox" id="quiz">

      <div v-if="introduction" id="intro">

        <h1>Welcome to the quiz! |  Fàilte don cheisneachadh!</h1>
        <p>
          Answer the following questions to find out which island suits you best!
        </p>


        <button v-on:click="startQuiz()" id="startButton">Start The Quiz</button>


      </div>

      <div v-if="questionsSection" v-for="(question, index) in this.questions" class="optionContainer">
        <div v-show="index === questionIndex" class="option">

          <h1> {{question.text}}</h1>

          <ul>
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

          </ul>

<br><br>
          <button class="next button" v-on:click="nextQuestion">
            Next
          </button>
        </div>
      </div>

      <div v-show="questionIndex === this.questions.length" v-on>
        <button id="startButton" type="results button" @click="addPoints()" >Reveal Your Island </button>
        <island-details :selectedIsland="selectedIsland" v-if="selectedIsland && result"></island-details>
      </div>

    </div>

  </div>
</div>

</div>

</section>

</template>

<script>
import { eventBus } from "../main.js"
import QuizServices from "../services/QuizServices.js"
import IslandDetails from "./IslandDetails.vue"

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
          name: "Sanday",
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


      },

      components: {
        "island-details": IslandDetails
      }
    };

    </script>

    <style lang="css" >


      h2 {
  font: 400 40px/1.5 Helvetica, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

li a:hover {
  font-size: 30px;
  background: #f6f6f6;
}

    .questionBox {
      display: flex;
          align-items: center;
          justify-content: center;

      max-width: 1400px;
	width: 1000px;
	min-height: 600px;

  text-align: center;
  left:200px;
  top:70px;

	 background: #FAFAFA;
   position: relative;
   display: flex;

	border-radius: 0.5rem;
	overflow: hidden;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

  .options {
    text-align: center;
  }

  .button{
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: DodgerBlue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: blue}

.button:active {
  background-color: Salmon;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#startButton {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: DodgerBlue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

.button:hover {background-color: blue}

.button:active {
  background-color: Salmon;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
}


    </style>
