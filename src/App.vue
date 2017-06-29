<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
    background: #434a55;
  }
  @media only screen and (min-width: 400px) {
    html {
      font-size: 21.33333333px !important;
    }
  }
  @media only screen and (min-width: 414px) {
    html {
      font-size: 22.08px !important;
    }
  }
  @media only screen and (min-width: 480px) {
    html {
      font-size: 25.6px !important;
    }
  }

#app {
  font-family: '微软雅黑',Microsoft YaHei !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#f1f1f1;

}
</style>
