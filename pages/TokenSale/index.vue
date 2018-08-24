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
                    <img src="../../static/img/cosmo.png" class="image">
                    <div style="padding: 5px 14px 14px 14px;">
                      <div class="coinName">Cosmo Chain</div>
                      <div>
                        <time class="time">2018. 07. 26 ~ 07. 30</time><br>
                        <span style="font-size: 0.9rem; color: gray">진행률</span>
                        <el-progress :width="100" :percentage="70"
                                     style="padding-top: 5px; padding-bottom: 5px;"></el-progress>
                        <el-button class="button">
                          <nuxt-link to="/tokensale/jbcoin">보러가기</nuxt-link>
                        </el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isEnded">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/yggdrash.png" class="image">
                    <div style="padding: 5px 14px 14px 14px;">
                      <div class="coinName">Yggdrash</div>
                      <div>
                        <time class="time">2018. 08. 05 ~ 08. 15</time><br>
                        <span style="font-size: 0.9rem; color: gray">진행률</span>
                        <el-progress :width="100" :percentage="70"
                                     style="padding-top: 5px; padding-bottom: 5px;"></el-progress>
                        <el-button class="button">보러가기</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isSuspended">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/aelf.png" class="image">
                    <div style="padding: 5px 14px 14px 14px;">
                      <div class="coinName">Aelf</div>
                      <div>
                        <time class="time">2018. 07. 19 ~ 07. 26</time><br>
                        <span style="font-size: 0.9rem; color: gray">진행률</span>
                        <el-progress :width="100" :percentage="70"
                                     style="padding-top: 5px; padding-bottom: 5px;"></el-progress>
                        <el-button class="button">보러가기</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isOngoing">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/root.png" class="image">
                    <div style="padding: 5px 14px 14px 14px;">
                      <div class="coinName">RSK</div>
                      <div>
                        <time class="time">2018. 07. 26 ~ 08. 25</time><br>
                        <span style="font-size: 0.9rem; color: gray">진행률</span>
                        <el-progress :width="100" :percentage="70"
                                     style="padding-top: 5px; padding-bottom: 5px;"></el-progress>
                        <el-button class="button">보러가기</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isEnded">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/glosfer.png" class="image">
                    <div style="padding: 5px 14px 14px 14px;">
                      <div class="coinName">Glosfer</div>
                      <div>
                        <time class="time">2018. 07. 26 ~ 09. 16</time><br>
                        <span style="font-size: 0.9rem; color: gray">진행률</span>
                        <el-progress :width="100" :percentage="70"
                                     style="padding-top: 5px; padding-bottom: 5px;"></el-progress>
                        <el-button class="button">보러가기</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="8" v-if="isAll || isSuspended">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../static/img/mvl.png" class="image">
                    <div style="padding: 5px 14px 14px 14px;">
                      <div class="coinName">MVLChain</div>
                      <div>
                        <time class="time">2018. 09. 10 ~ 09. 15</time><br>
                        <span style="font-size: 0.9rem; color: gray">진행률</span>
                        <el-progress :width="100" :percentage="70"
                                     style="padding-top: 5px; padding-bottom: 5px;"></el-progress>
                        <el-button class="button">보러가기</el-button>
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
  .coinName {
    font-weight: bolder;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
  .time {
    color: #7f828b;
    font-size: 0.8rem;
  }
  @media(max-width: 768px) {
    .card-container {
      margin-top: 1.5rem;
    }
  }
</style>
