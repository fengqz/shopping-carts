<style scoped lang="less">
  index{ padding-bottom: 3rem; background: #fafafa;}
  footer{ width: 100%; height: 2.8rem;position: fixed;display: flex;bottom: 0;
    .mu-paper{ width: 100%;
      .nav_item{ line-height:3rem ; font-size: 1.2rem;
        &:nth-of-type(1){background: url("../../assets/img/043.png") center 0.4rem no-repeat; background-size:20%;}
        &:nth-of-type(2){background: url("../../assets/img/044.png") center 0.4rem no-repeat; background-size:20%;}
        &:nth-of-type(3){background: url("../../assets/img/045.png") center 0.4rem no-repeat; background-size:20%;}
        &:nth-of-type(4){background: url("../../assets/img/046.png") center 0.4rem no-repeat; background-size:20%;}
      }
    }
  }
</style>
<template>
  <div class="index" >
    <!--<mu-linear-progress mode="determinate" :value="value"/>-->
    <router-view ></router-view>
    <div class="bottom_ps"></div>
    <footer>
      <mu-paper class="mu-paper">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item class="nav_item" value="home" title="首页"/>
          <mu-bottom-nav-item class="nav_item" value="details" title="类别" />
          <mu-bottom-nav-item class="nav_item" value="shopcart" title="购物车" />
          <mu-bottom-nav-item class="nav_item" value="speakers" title="我的" />
        </mu-bottom-nav>
      </mu-paper>
    </footer>
  </div>
</template>



<script>
  import store from '../../store/index'
   export default {
    name: 'index',
    created () {
      var rname = this.$route.name

      switch(rname) {
        case 'home':
          this.bottomNav = 'home'
          break
        case 'details':
          this.bottomNav = 'details'
          break
        case 'shopcart':
          this.bottomNav = 'shopcart'
          break
        case 'speakers':
          this.bottomNav = 'speakers'
          break
      }
    },
    data () {
      return {
        bottomNav: 'home',
        value: 0,

      }
    },
    beforeMount(){
    },
    filters:{

    },

    mounted:function () {
    /*  this.$http.get("../../../assets/data/cartData.json").then( (resp)=> {
        this.productList = resp.data.result.list;
      })*/

        this.$nextTick(()=>{
          this.handleChange(this.bottomNav);
        })


    },
    methods: {
      handleChange (val) {
        this.bottomNav = val;
        this.$router.push({name: val});
      },
      beforeDestroy () {
        clearInterval(this.timer);


      }

    }


  }
</script>
