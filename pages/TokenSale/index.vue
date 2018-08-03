<template>
  <div>
    <div style="background-color: #fff; padding-top: 20px; border-top: 1px solid #d6dce5">
      <el-row>
        <el-col :xs="1" :sm="2">&nbsp;</el-col>
        <el-col :xs="22" :sm="20">
          <div>
            <el-dropdown>
                <span class="el-dropdown-link" style="font-size: 1rem;">
                  {{ selected }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span @click="pickViewAll">View All</span></el-dropdown-item>
                <el-dropdown-item><span @click="pickOngoing">Ongoing Daico</span></el-dropdown-item>
                <el-dropdown-item><span @click="pickEnded">Ended Daico</span></el-dropdown-item>
                <el-dropdown-item><span @click="pickSuspended">Suspended Daico</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :xs="1" :sm="2"></el-col>
      </el-row>
      <div class="b3">
        <el-row>
          <el-col :xs="1" :sm="2">&nbsp;</el-col>
          <el-col :xs="22" :sm="20">
            <div class="card-container">
              <el-row :gutter="60" v-if="showList">
                <el-col :xs="24" :sm="8" v-if="isAll || isOngoing">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/image1.jpeg" class="image">
                    <div style="padding: 14px;">
                      <span>JBCoin</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">
                          <nuxt-link to="/tokensale/jbcoin">Operating button</nuxt-link>
                        </el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isEnded">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/image2.jpeg" class="image">
                    <div style="padding: 14px;">
                      <span>SkyCon</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isSuspended">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/alphacon.png" class="image">
                    <div style="padding: 14px;">
                      <span>Alphacon</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isOngoing">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/alphacon.png" class="image">
                    <div style="padding: 14px;">
                      <span>JBCoin</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isEnded">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/image1.jpeg" class="image">
                    <div style="padding: 14px;">
                      <span>SkyCon</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isSuspended">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/image2.jpeg" class="image">
                    <div style="padding: 14px;">
                      <span>Alphacon</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isOngoing">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/alphacon.png" class="image">
                    <div style="padding: 14px;">
                      <span>JBCoin</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isEnded">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/image1.jpeg" class="image">
                    <div style="padding: 14px;">
                      <span>SkyCon</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isSuspended">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/image2.jpeg" class="image">
                    <div style="padding: 14px;">
                      <span>Alphacon</span>
                      <div>
                        <time class="time">2018. 07. 26</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :xs="1" :sm="2">&nbsp;</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        showList: true,
        selected: 'ViewAll',
        isAll: true,
        isOngoing: false,
        isEnded: false,
        isSuspended: false
      }
    },
    methods: {
      pickViewAll () {
        this.selected = 'ViewAll'
        this.isAll = true
        this.isOngoing = false
        this.isEnded = false
        this.isSuspended = false
      },
      pickOngoing () {
        this.selected = 'Ongoing Daico'
        this.isAll = false
        this.isOngoing = true
        this.isEnded = false
        this.isSuspended = false
      },
      pickEnded () {
        this.selected = 'Ended Daico'
        this.isAll = false
        this.isOngoing = false
        this.isEnded = true
        this.isSuspended = false
      },
      pickSuspended () {
        this.selected = 'Suspended Daico'
        this.isAll = false
        this.isOngoing = false
        this.isEnded = false
        this.isSuspended = true
      },
      companyClicked () {
        this.showList = false
      }
    },
    components: {
    }
  }
</script>

<style>
  .b3 {
    background-color: #d6dce5;
    margin-top:15px;
  }
  .card-container {
    margin-top: 3rem;
  }
  img.image {
    width: 100%;
    height: 210px;
  }
  .el-card {
    margin-bottom: 6vh;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
  @media(max-width: 768px) {
    .card-container {
      margin-top: 1.5rem;
    }
  }
</style>
