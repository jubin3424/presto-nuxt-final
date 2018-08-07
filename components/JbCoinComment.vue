<template>
    <div>
      <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">Ask anything to JbCoin Team</h3>
      <div class="question-area">
        <form @submit.prevent="submit">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="질문을 입력해주세요."
          v-model="textarea">
        </el-input>
        <el-button native-type='submit' style="float: right; margin-left: 2px; width: 19%; padding-top: 29px; padding-bottom: 29px;" class="hidden-sm-and-up">제출</el-button>
        <el-button native-type='submit' style="float: right; margin-top: 1rem;" class="hidden-xs-only">제출</el-button>
        </form>
        <div class="below-question">
          <p style="margin-top: 1rem;">* Written questions can not be edited.</p>
          <p>* The questions will be answered directly by the token team.</p>
        </div>
        <div>
          <h1>Hi</h1>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "JbCoinComment",
    data () {
      return {
        textarea: ''
      }
    },
    methods: {
      submit(event) {
        this.$router.push(`results/${this.textarea}`)
      }
    }
  }
</script>

<style scoped>
  .below-question p{
    margin-top: 0.4rem;
    margin-bottom: 0;
    color: #7f828b;
  }
  @media(min-width: 768px) {
    .question-area {
      width: 80%;
    }
    .el-textarea {
      width: 100%;
    }
  }
  @media(max-width: 768px) {
    .question-area {
      width: 100%;
    }
    .el-textarea {
      width: 80%;
    }
  }
</style>
