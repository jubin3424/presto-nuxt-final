<template>
    <div>
      <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">Ask anything to JbCoin Team</h3>
      <div class="question-area">
        <el-form>
        <el-input
          type="textarea"
          :rows="3"
          placeholder="질문을 입력해주세요."
          v-model="textarea">
        </el-input>
        <el-button @click="addComment" style="float: right; margin-left: 2px; width: 19%; padding-top: 29px; padding-bottom: 29px;" class="hidden-sm-and-up">제출</el-button>
        <el-button @click="addComment" style="float: right; margin-top: 1rem;" class="hidden-xs-only">제출</el-button>
        </el-form>
        <div class="below-question">
          <p style="margin-top: 1rem;">* Written questions can not be edited.</p>
          <p>* The questions will be answered directly by the token team.</p>
        </div>
        <div v-for="(comment, index) in comments" class="comment" :key="index">
          <div class="comment-part">
            <span class="comment_writer">{{ comment.user }}</span>
            <span v-if="comment.answered" class="answered">Answered</span>
            <span v-else class="unanswered">Unanswered</span>
            <span class="comment_date">
              {{ comment.created_at.split('T')[0] }}
              {{ comment.created_at.split('T')[1].slice(0,5) }}</span><br>
            <div class="comment_contents">{{ comment.content }}</div>
            <div v-if="isAuthenticated" style="text-align: right; margin-bottom: 5px;">
              <span @click="deleteComment(comment._id)">
                <i class="fas fa-trash-alt" style="cursor: pointer;"></i>
              </span>
              <span @click="showAnswerForm(index)" style="margin-left: 5px;">
                <i class="fab fa-replyd"></i>
              </span>
            </div>
          </div>
          <div v-bind:class="[{ activeReply: num === index }, { nonActive: num !== index }]">
            <div class="answer-part">
              <el-form>
                <el-input
                type="textarea"
                :rows="2"
                :placeholder="comment.user+'님에게 답변을 해주세요.'"
                v-model="answerArea" style="width: 80%;"></el-input>
                <el-button @click="answerSubmit(comment._id)" style="width: 19%; float: right; padding: 20px 13px 18px 13px;">등록</el-button>
            </el-form>
            </div>
          </div>
          <div v-for="(answer, index) in answers" :key="index">
            <div v-if="answer.answerTo === comment._id">
              <div class="answerBox">
              ㄴ
                <span class="answer_writer">{{ answer.user }}</span>
                <span class="comment_date">
                {{ answer.created_at.split('T')[0] }}
                {{ answer.created_at.split('T')[1].slice(0,5) }}</span><br>
                <div class="answer_contents">{{ answer.content }}</div>
                <div style="text-align: right;" @click="deleteAnswer(comment._id)">
              <i class="fas fa-trash-alt" style="cursor: pointer;"></i>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "JbCoinComment",
    data () {
      return {
        textarea: '',
        comments: '',
        answers: '',
        answerArea: '',
        answered: false,
        num: '',
        nonActive: 'nonActive',
        isAuthenticated: false
      }
    },
    created () {
      this.getComments ()
      this.getAnswers()
    },
    methods: {
      async refreshComments () {
        await this.getComments()
      },
      async refreshAnswers () {
        await this.getAnswers()
      },
      async addComment() {
        if (confirm('댓글을 등록하시겠습니까?')) {
          await this.$axios.$post('/api/comments/new',
            {user: 'jubin4324', content: this.textarea})
            .then((response) => {
              console.log(response.message)
              this.textarea = ''
            })
            .catch((response) => {
              alert('오류가 발생했습니다')
            })
          await this.refreshComments()
        }
      },
      async deleteComment(id) {
        if (confirm('댓글을 삭제하시겠습니까?')) {
          await this.$axios.$delete('/api/comments/delete/' + id, {id: id})
            .then((response) => {
              alert('삭제하였습니다.')
            })
            .catch((response) => {
              alert(response)
            })
          await this.refreshComments()
        }
      },
      async answerSubmit(comment_id) {
        if (confirm('답변을 등록하시겠습니까?')) {
          await this.$axios.$post('/api/comments/answer/' + comment_id,
            {user: '담당자', content: this.answerArea})
            .then((response) => {
              alert(response.message)
              this.answerArea = ''
            })
            .catch((response) => {
              alert('오류가 발생했습니다')
            })
          await this.checkAnswered(comment_id)
          await this.refreshAnswers()
          this.num = ''
        }
      },
      async checkAnswered(comment_id) {
        await this.$axios.$put('/api/answered/' + comment_id)
          .then((response) => {
            console.log(response.message)
          })
          .catch((response) => {
            alert('오류가 발생했습니다')
          })
        await this.refreshComments()
      },
      async uncheckAnswered(comment_id) {
        await this.$axios.$put('/api/unanswered/' + comment_id)
          .then((response) => {
            console.log(response.message)
          })
          .catch((response) => {
            alert('오류가 발생했습니다')
          })
        await this.refreshComments()
      },
      async deleteAnswer(id) {
        if (confirm('답변을 삭제하시겠습니까?')) {
          await this.$axios.$delete('/api/comments/answer/delete/' + id, {id: id})
            .then((response) => {
              console.log(response.message)
            })
          await this.uncheckAnswered(id)
          await this.refreshAnswers()
        }
        },
      showAnswerForm(index) {
        this.num = index
      },
      async getComments () {
        const getComments = await this.$axios.$get('/api/comments')
        this.comments = getComments.comments
      },
      async getAnswers () {
        const getAnswers = await this.$axios.$get('/api/comments/answer')
        this.answers = getAnswers.answer
      }
    },
  }
</script>

<style scoped>
  .below-question p {
    margin-top: 0.4rem;
    margin-bottom: 0;
    color: #7f828b;
  }
  .answered {
    font-size: 0.8rem;
    margin-left: 10px;
    color: palevioletred;
    /*background-color: palevioletred;*/
    /*border-radius: 5px;*/
    /*padding: 5px;*/
  }
  .unanswered {
    font-size: 0.8rem;
    margin-left: 10px;
    color: cornflowerblue;
  }
  .answer_writer {
    font-size: 1.1rem;
    font-weight: bolder;
    color: mediumpurple;
    margin-left: 2px;
  }
  .answer_contents {
    margin-top: 10px;
  }
  .comment_writer {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .comment_date {
    font-size: 0.8rem;
    color: darkgray;
    float: right;
  }
  .comment_contents {
    margin-top: 0.3rem;
    /*line-height: 2rem;*/
  }
  .comment {
    padding-top: 0.8rem;
    margin-top: 1.1rem;
    border-top: 1px solid #dbe1ec;
  }
  .answer-part {
    margin-top: 1rem;
  }
  .answerBox {
    background-color: #f5f5f5;
    margin-top: 0.7rem;
    padding: 1rem 1rem 1rem 0.7rem
  }
  .activeReply {
  }
  .nonActive {
    display: none;
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
