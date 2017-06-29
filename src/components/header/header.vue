<style scoped lang="less">
  nav{ width: 100%; height: 2.8rem; display: flex; justify-content: space-around; align-items: center; position: fixed;    top: 0;   z-index: 1000;
    img{ width: 15%; height:auto; margin-left: 0.4rem;}
    a{ text-decoration: none;
      input{ min-width: 12rem; max-width: 15rem; border: none;height: 60%; border-radius:5px; padding: 0.2rem;font-size:0.6rem;}
      span{color: #838383; font-size: 0.6rem;}
    }

  }

</style>

<template>


  <nav>
    <img src="../../assets/img/logo.png">
    <a href="search.html"><input type="text" placeholder="搜索商品名称"></a>
    <a ><router-link to="lodinup"><span>登录</span></router-link></a>
  </nav>

</template>


<script>
export default {
    data(){
        return {
         // bottomNav: '',

        }
    },
  mounted:function () {
    //window.addEventListener('scroll', this.handleScroll);
 /*   this.$nextTick(()=>{
      this.routers(this.bottomNav);
    })*/

  },
  methods: {
   /* handleScroll(){
        console.log("dfjalskd")
    }*/
 /*   routers (val) {
      this.bottomNav = val
      this.$router.push({name: "val"})

    },*/

  },


}
</script>
