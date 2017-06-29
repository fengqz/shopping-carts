<style scoped lang="less">
  .maintd{ margin-top: 2.8rem; text-align: left; position: relative; display: flex; flex-direction: row; flex-wrap: wrap;
    align-content:flex-start ;
    justify-content: space-between ;
    aside{padding: 0; margin: 0;flex:1;
      .mu-raised-button{ padding: 0;}
        .demo-raised-button{ padding: 0!important; height: 2rem;text-align:center; width: 100%; margin-bottom:5px;line-height: 1px;background-color: white;cursor: pointer; font-size: 0.7rem;
        }
        .cy{color: red;}
    }
    main{ flex:3; padding-left: 0.2rem;
      section{
        img{ width: 100%; height: auto;}
      }
    }

  }

</style>
<template>
  <div class="maintd">

    <header-top></header-top>
    <aside>
      <mu-raised-button v-for="item in listclas" v-on:click="greet(item)":label=item.clasname class="demo-raised-button"/>
    </aside>
    <main >
      <section>
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in detalinews">
              <img :src="item.image_url_big" class="banner-item"  alt="" height="20%" width="100%">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </section>
     <clas-list :msglist=msgnalist></clas-list>
    </main>
  </div>
</template>


<script>
  import headerTop from '../../components/header/header'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {detalinews,listclas} from '../../data/details'
  import clasList from '../details/claslist'

  export default {
      name:"Details",
    created () {
    },
    data () {
      return {
        msgnalist:listclas[0].listname,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000
        },
        p: 1,
        listclas,
        detalinews
      }

    },
    components: {
      swiper,
      swiperSlide,
      clasList,
      headerTop
    },
/*    mounted:()=>{
      this.greet();

    },*/
    methods:{
      greet:function (items) {
        this.msgnalist=items.listname;

      }
      /*items=>{
        /!*this.msgnalist=items*!/
        console.log(items);
          /!*  this.$http.get('data/cartData.json').then(res=>{
              //this.productList=res.body.result.list;
              //this.calcTotalMoney();
            })*!/
          }*/
    }


  }
  </script>
