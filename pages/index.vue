<template>
  <div>
    <div class="newly-arrived">
      <h1 class="main_title">Newly Arrived</h1>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="(item, index) in tableData" :key="index">
          <h3 style="text-align: center;"><img v-bind:src="item.main"></h3>

        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="weekly-hot">
      <h1 class="main_title">Weekly Hot Item</h1>
      <div class="weekly-hot-item-table">
        <el-row :gutter="3">
          <el-col :xs="6" :sm="6">
            <img v-bind:src="tableData[0].src"
                 class="mini-image" @click="selected = 0" v-bind:class="{active: selected === 0}">
          </el-col>
          <el-col :xs="6" :sm="6">
            <img v-bind:src="tableData[1].src"
                 class="mini-image" @click="selected = 1" v-bind:class="{active: selected === 1}">
          </el-col>
          <el-col :xs="6" :sm="6">
            <img v-bind:src="tableData[2].src"
                 class="mini-image" @click="selected = 2" v-bind:class="{active: selected === 2}">
          </el-col>
          <el-col :xs="6" :sm="6">
            <img v-bind:src="tableData[3].src"
                 class="mini-image" @click="selected = 3" v-bind:class="{active: selected === 3}">
          </el-col>
          <el-col :xs="24" :sm="24">
            <img v-bind:src="tableData[selected].big" style="width: 100%;">
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 0,
        tableData: [{
          name: 'zantrex',
          main: require('../static/img/mvl2.png'),
          src: require('../static/img/cosmo.png'),
          big: require('../static/img/cosmo-big.png')
        }, {
          name: 'red',
          main: require('../static/img/yggdrash2.png'),
          src: require('../static/img/yggdrash.png'),
          big: require('../static/img/yggdrash-big.png')
        }, {
          name: 'blue',
          main: require('../static/img/root2.png'),
          src: require('../static/img/root.png'),
          big: require('../static/img/root-big.png')
        }, {
          name: 'green',
          main: require('../static/img/aelf2.png'),
          src: require('../static/img/aelf.png'),
          big: require('../static/img/aelf-big.png')
        }]
      }
    },
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #f7f8fb;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #f7f8fb;
  }
  .newly-arrived {
    width: 80%;
    margin: 7vh auto 5vh;
  }
  .main_title {
    text-align: center;
  }
  .weekly-hot {
    padding-top: 1vh;
    padding-bottom: 10vh;
    background-color: #f7f8fb;
  }
  table {
    border-collapse: collapse;
  }
  .weekly-hot-item-table {
    width: 60%;
    margin: auto;
  }
  .mini-image {
    width: 100%;
    opacity: 0.4;
    border-top: 2px solid grey;
  }
  img.mini-image:hover {
    opacity: 1.0;
  }
  .active {
    opacity: 1.0;
    border-top: 3px solid orange;
  }

  @media(max-width: 680px) {
    .newly-arrived {
      width: 95%;
      margin-top: auto;
    }
    .weekly-hot-item-table {
      width: 95%;
    }
  }
</style>

