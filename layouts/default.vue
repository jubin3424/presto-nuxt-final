<template>
  <div>
    <!--Web Navbar-->
    <div class="nav-web hidden-xs-only">
      <div class="nav-logo">
        <nuxt-link :to="{name: 'index'}"><img src="../static/img/logo.png" style="height: 100px;"></nuxt-link></div>
      <div class="nav">
        <ul>
          <li><nuxt-link to="/">DAICO란?</nuxt-link></li>
          <li><nuxt-link to="/">DAICO SVC</nuxt-link></li>
          <li><nuxt-link :to="{name: 'TokenSale'}">TokenSale</nuxt-link></li>
          <li><nuxt-link to="/">Airdrop</nuxt-link></li>
          <li><nuxt-link to="/">Wallet</nuxt-link></li>
          <li><nuxt-link to="/">Kor</nuxt-link></li>
        </ul>
      </div>
    </div>
    <!--Moible Navbar-->
    <div class="nav-mobile hidden-sm-and-up">
      <div class="mobile-nav-logo">
        <el-dropdown>
          <el-button style="background-color: #292727; color:white; border: 0;" class="specific-location">
            <i class="fas fa-align-justify fa-2x"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="/">DAICO란?</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link to="/">DAICO SVC</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link :to="{name: 'TokenSale'}">TokenSale</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link to="/">Airdrop</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link to="/">Wallet</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link to="/">Kor</nuxt-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <nuxt-link :to="{name: 'index'}">
          <img src="../static/img/logo.png" style="vertical-align: middle;">
        </nuxt-link>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <el-row>
        <el-col :xs="24" :sm="6" class="footer-logo" style="text-align: center;">
          <img src="../static/img/Presto.png">
          <div class="footer-sns">
            <img src="../static/img/ic_kakao.png">
            <img src="../static/img/ic_medium.png">
            <img src="../static/img/ic_telegram.png">
            <img src="../static/img/ic_github.png">
            <img src="../static/img/ic_twitter.png">
          </div>
        </el-col>
        <div class="footer-menu">
          <el-col :sm="1" class="hidden-xs-only">&nbsp;</el-col>
          <el-col :xs="8" :sm="5">
            <h4>Presto</h4>
            <ul>
              <li>Presto 소개</li>
              <li>언론보도</li>
            </ul>
          </el-col>
          <el-col :xs="8" :sm="6">
            <h4>고객센터</h4>
            <ul>
              <li>공지사항</li>
              <li>자주하는 질문</li>
              <li>1:1 문의</li>
              <li>이용자 가이드</li>
              <li>업체 및 제휴 문의</li>
            </ul>
          </el-col>
          <el-col :xs="8" :sm="6">
            <h4>서비스</h4>
            <ul>
              <li>개인정보수집 및 이용동의 약관 </li>
            </ul>
          </el-col>
        </div>
      </el-row>
      <!--<div class="partners">-->
        <!--<el-row>-->
          <!--<el-col :xs="1" :sm="6">-->
            <!--&nbsp;-->
          <!--</el-col>-->
          <!--<el-col :xs="22" :sm="12">-->
            <!--<img src="../static/img/prismlogo.png" width="200px">-->
            <!--<img src="../static/img/google.png" width="200px">-->
          <!--</el-col>-->
          <!--<el-col :xs="1" :sm="6">-->
            <!--&nbsp;-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
      }
    },
    components: {
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
  .nav-logo {
    text-align: center;
    background-color: #292727;
  }
  .nav {
    width: 100%;
    height: 60px;
    margin: auto;
    border-bottom: 1px solid grey;
  }
  .nav ul {
    list-style: none;
    width: 100%;
    text-align: center;
    margin:auto;
    height: 50px;
  }
  .nav li {
    display: inline-block;
    margin-right: 8.5vh;
    padding-top: 19px;
  }
  .nav li a {
    height: 50px;
    text-decoration: none;
    color: #292727;
  }
  li a:hover {
    color: gray;
  }
  .mobile-nav-logo {
    background-color: #292727;
    text-align: center;
  }
  .nav-mobile img {
    height: 12vh;
    margin-right: 30px;
  }
  .specific-location {
    position: relative;
    top: 7px;
    left: 5px;
  }
  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: whitesmoke;
    color: #47494e;
    border-top: 1px solid #47494e;
  }
  .footer ul {
    list-style: none;
    padding-left: 0;
  }
  .footer li {
    margin-bottom: 7px;
  }

  @media(min-width: 768px) {
    .footer-logo {
      margin-top: 4vh;
    }
    .footer-logo img {
      width: 200px;
    }
    .footer-menu {
      margin-top: 4vh;
    }
    .footer-menu .el-col {
      margin-left: 0vh;
    }
    .footer-sns img{
      width: 40px !important;
      margin-left: 5px;
      margin-top: 15px;
    }
    .partners {
      margin-top: 4vh;
      text-align: center;
    }
    .partners img {
      margin-left: 5vh;
    }
    .footer {
      padding-bottom: 7vh;
    }
  }
  @media(max-width: 768px) {
    .footer-logo {
      margin-top: 0;
      background-color: #FFFFFF;
      padding-bottom: 2vh;
    }
    .footer-logo img {
      width: 30vh;
    }
    .footer-menu {
      padding: 0 1.5vh;
    }
    .footer h4 {
      padding-left: 5px;
    }
    .footer ul {
      padding-left: 5px;
    }
    .footer-sns img{
      width: 15% !important;
      margin-left: 10px;
      margin-top: 5px;
    }
    .partners {
      margin-top: 0;
      text-align: center;
      background-color: #F2F2F2;
      padding-top: 2.5vh;
    }
    .partners img {
      margin-bottom: 2vh;
    }
    .footer {
      /*padding-bottom: 3vh;*/
    }
    a {
      text-decoration: none;
      color: #47494e;
    }
  }
</style>



