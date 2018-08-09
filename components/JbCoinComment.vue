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
            <span class="comment_date">
              {{ comment.created_at.split('T')[0] }}
              {{ comment.created_at.split('T')[1].slice(0,5) }}</span><br>
            <span class="comment_contents">{{ comment.content }}{{ comment._id }}</span>
            <span style="float: right; margin-left: 5px;" @click="deleteComment(comment._id)">
              <i class="fas fa-trash-alt" style="cursor: pointer;"></i>
            </span>
            <span style="float: right" @click="showAnswerForm(index)">
              <i class="fab fa-replyd"></i>
            </span>
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
              <i class="fab fa-replyd"></i>
              {{ answer.content }}
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
        num: '',
        nonActive: 'nonActive'
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
              this.deleteAnswer(id)
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
          await this.refreshAnswers()
          this.num = ''
        }
      },
      async deleteAnswer(id) {
       await this.$axios.$delete('/api/comments/answer/delete/' + id, {id: id})
         .then((response) => {
           console.log('댓글도 삭제됨')
         })
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
    line-height: 2rem;
  }
  .comment {
    padding-top: 0.8rem;
    margin-top: 1.3rem;
    border-top: 1px solid #dbe1ec;
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
