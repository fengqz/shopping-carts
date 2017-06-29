<style scoped lang="less">
  .home{padding-bottom: 2.8rem;}
  .navbg{width: 100%; height: 2.8rem; position: fixed;   top: 0;  background:rgba(49,49,49,0.4); z-index:100;filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;}
  #lb{ width: 100%; position: relative;  margin-bottom: 0.2rem;
    img{ width: 100%; height: 5rem; position: absolute;}
    #pic{ position: relative; width: 100%;padding: 0; margin: 0;
      li{position: relative; margin: 0; padding: 0;}
    }
  }
  header {
    section {display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap;
      div{padding:0.5rem 0;  flex: 1; text-align: center; padding: 0;
          img{ width:1.8rem; height:auto;}
          span{ display: block; font-size: .6rem; margin-top: -0.2rem;}

      }
    }
  }


    #seckill{ background-color: white; height: 2rem; line-height: 2rem; text-align: left;margin-bottom: 0.1rem;
      img{ width: 1rem; height: 1rem; vertical-align: middle; margin: -0.1rem 0.1rem 0.1rem 0.2rem;}
      div{display: inline-block; margin-left: 0.4rem;}
      .seckill{font-size: .7rem; color: red;}
      .min{background-color: black;color: white; display: inline-block; width: 1rem; height: 1.1rem; text-align: center; margin-top: -0.5rem;line-height: 1.1rem; font-size:0.6rem;border-radius: 0.3rem;
      }
      .more{
          a{color: grey; text-decoration: none; font-size: 0.7rem; float: right; margin-right: 0.4rem; }
      }
    }
    #mst{padding-top:0.5rem;padding-bottom: 0.1rem; background-color: white; display: flex; justify-content: space-around; align-items: center;
        div{ flex: 1;
          img{width: 70%;}
          p{margin: 0; text-align: center; font-size: .8rem; padding-bottom: 0.1rem;
            &:nth-of-type(1){color: red;font-size: 0.7rem;;}
            &:nth-of-type(2){ color: gray;text-decoration:line-through;font-size: 0.5rem;}
          }

        }
    }
    .nx{width: 100%; height:auto;}

    .category{ width: 100%; display: flex ;flex-direction: row ;flex-wrap: wrap ;justify-content: center ; align-items: center ;align-content: flex-start ;
      div{ border-bottom:  0.1rem solid #f3f3f3; position: relative; flex: 1 50% ;margin-bottom:0.5rem;height: 6rem;overflow: hidden;
      &:nth-child(even){border-left:0.1rem solid #f3f3f3; }
      &:nth-child(odd){}
          img{ width: 100%; height: auto;}
        div{ width: 100%; position: absolute; border: none !important; bottom:0 !important; left:0; height: auto; min-height: 1rem; display: inline-table; text-align: left;
          p{ margin: 0;vertical-align: bottom; display: inline; padding: 0 0.5rem; text-align: left;
              &:nth-of-type(1){ font-size: .8rem;font-weight: bold; background:rgba(242,48,48,0.4); }
              &:nth-of-type(2){ font-size: .7rem; color: grey;margin-top: 2px;background:rgba(255,255,255,0.4);}
              &:nth-of-type(3){ font-size: .5rem; background: #ff4a7d; margin-top: 2px;}
          }
        }
      }

    }


</style>
<template>
  <div class="home" >
     <div class="navbg" v-if="seen"></div>

    <header-top></header-top>
    <div class="news-banners">
      <swiper :options="swiperOption">
        <swiper-slide v-for="news in bannerNews">
            <img :src="news.image_url_big" class="banner-item"  alt="" height="20%" width="100%">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <header>
      <section>
        <div><img src="../../../assets/img/1.png" alt=""><span>活生鲜超市</span></div>
        <div><img src="../../../assets/img/5.png" alt=""><span>充值中心</span></div>
        <div><img src="../../../assets/img/8.png" alt=""><span>领卷</span></div>
        <div><img src="../../../assets/img/9.png" alt=""><span>物流查询</span></div>
        <div><img src="../../../assets/img/10.png" alt=""><span>我的关注</span></div>
      </section>
    </header>

      <div id="seckill">
        <img src="../../../assets/img/ms1.png" alt="">
        <span class="seckill">生鲜秒杀</span>
        <div>
          <span class="min">10</span>
          <span class="bb">:</span>
          <span class="min">10</span>
          <span class="bb">:</span>
          <span class="min">10</span>
        </div>
        <span class="more"><a >更多秒杀 ></a></span>
      </div>
      <section id="mst">
        <div v-for="item in seckills" @click="select()">
            <img :src="item.image_seckill" >
            <p>{{item.opirce}}</p>
            <p>{{item.dpirce}}</p>
        </div>
      </section>
      <img src="../../../assets/img/012.jpg" class="nx"/>
      <section class="category">
          <div v-for="item in category" @click="goodslist()">
            <span><img :src="item.image_category" ></span>
          <div>
              <p v-for="items in item.titles">{{items.titlec}}<br></p>
            </div>
          </div>
      </section>
      <section class="category">
          <div v-for="item in category" @click="goodslist()">
            <span><img :src="item.image_category" ></span>
          <div>
              <p v-for="items in item.titles">{{items.titlec}}<br></p>
            </div>
          </div>
      </section>

   </div>

</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { bannerNews, seckills,category } from '../../../data/index'
  import headerTop from '../../../components/header/header'
  export default {
      name:'home',
    created () {
        /*this.setTitle()*/
    },
    data () {
      return {
        seen:false,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000
        },
        p: 1,
        bannerNews,
        seckills,
        category
      }

    },
     beforeRouteLeave(to,from,next){
       window.removeEventListener('scroll',this.scrollfun);
       next()
  },
    components: {
      swiper,
      swiperSlide,
      headerTop
    },
  mounted:function (){
          window.addEventListener('scroll',this.scrollfun);
  },
  methods: {
   scrollfun(){
       if(document.body.scrollTop>100){

         this.seen=true;
       }
     if(document.body.scrollTop<100){

         this.seen=false;
       }


    },
    goodslist(){
      this.$router.push('goodslist');

    },
    select(){
      this.$router.push('select');

    },

      setTitle (){
       setInterval(function(){
       var min = document.querySelectorAll('#seckill .min');
       min[2].innerHTML--;
       if(min[2].innerHTML == -1){
       min[2].innerHTML = 59;
       min[1].innerHTML--;
       if(min[1].innerHTML == -1){
       min[1].innerHTML = 59;
       min[0].innerHTML--;
       if(min[0].innerHTML == -1){
       min[0].innerHTML = 2;
       }
       if(min[0].innerHTML < 10){
       min[0].innerHTML = '0' + min[0].innerHTML;
       }
       }
       if(min[1].innerHTML < 10){
       min[1].innerHTML = '0' + min[1].innerHTML;
       }
       }
       if(min[2].innerHTML < 10){
       min[2].innerHTML = '0' + min[2].innerHTML;
       }
       },1000)

      }
    }
  }
</script>
