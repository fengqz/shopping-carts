<style scoped lang="less">

  .goodslist{ margin-bottom: 2.8rem;  padding-top:2.9rem; background: white; height: 100%;}
  .nav{width: 100%;text-align: center;border-bottom: 1px solid silver; text-align: left;
    height: 2.8rem; background: #fafafa; position:fixed;
    span{line-height:2.5rem;font-size: 0.8rem; display:block;  text-align: center;}
    .retback{line-height: 2.5rem; height: 2.5rem; width:2rem; position: absolute;left: 0; top: 0; text-align: center;
      img{ height: 40%; vertical-align: middle;}
    }
    .tuiback{line-height: 2.5rem; height: 2.8rem; width: 3rem; position: absolute;right: 0; top: 0; text-align: center;
      img{ height: 40%;vertical-align: middle;}
    }

  }
  .zy{width:98%; margin: auto;

    .sp1{background-color: #FFFFFF;
      .p{ width: 100%; height: 1rem ; overflow: hidden;
        p{ float: right; color: black; font-size:0.8rem; margin-top: 0.2rem; margin-right: 0.2rem;}
        span{ color: silver; margin-right: 0.2rem; margin-top: 0.2rem; float: right; font-size: 0.7rem;}
      }
    }
    .Llistofs{ width: 100%;display: flex ; flex-direction: row ;flex-wrap: wrap-reverse ; justify-content: space-between ; align-items: center ; align-content: center ;  margin-top: 0; padding-bottom:0.5rem;
      div{
        &:nth-of-type(1){flex:3;
          img{width:100%; height: auto;}
        }
        &:nth-of-type(2){ flex:5; text-align: left; margin-left: 0.3rem;align-content: center; border-bottom: #f4f4f4 solid 1px;
          .title{display: block; font-size: 0.7rem; width: 95%;  overflow:hidden;  text-overflow:ellipsis;}
          span{
            &:nth-of-type(1){ font-size: 0.8rem;}
            &:nth-of-type(2){ font-size: 0.7rem; color: #666;}
            &:nth-of-type(3){ font-size: 0.6rem; color: #999;}
          }
          p{font-size: 0.8rem; color: red;
            span{font-size: 12rem}
          }
          p:nth-of-type(2){color: #910000; margin-top: -10px;}



        }
      }
    }

  }

</style>
<template>
  <div>
    <div class="nav">
      <div class="retback" v-on:click="retback">
        <img src="../../assets/img/F1.png"/>
      </div>
      <span>购物车</span>
      <div class="tuiback">
        <img src="../../assets/img/044.png"/>
      </div>
    </div>
    <div class="goodslist">
      <div class="zy" v-for="(item,key) in list">

        <div class="sp1">
          <div class="Llistofs">
            <div><img :src="item.listimgurl"></div>
            <div>
              <div class="title">{{item.promotiontitle }}</div>
              <span>{{item.wareneme}}</span><br>
              <span>{{item.spec}}</span><br>
              <p><span>{{item.unitprice | formatMoney}}</span></p>

            </div>
          </div>
        </div>
      </div>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="bubbles">
  <span slot="no-results">
  下拉加载。。。
  </span>
        <span slot="no-more">
  已经到底了！！！！
  </span>
        <!--<span slot="no-more">没有更多消息了</span>-->
      </infinite-loading>
      <!-- <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"
                         spinner="bubbles">  <span slot="no-more">没有更多消息了</span>  </infinite-loading>-->
    </div>

  </div>

</template>


<script>

  import api from '../../axios/axiso';
  import InfiniteLoading from 'vue-infinite-loading';

  export default{
    components: {
      InfiniteLoading,

    },

    data(){
      return {
        goodslistid: 1,
        pagelist:0,
        list: []


      }

    },
    beforeMount(){


    },
    filters: {
      formatMoney: function (value) {
        return "¥ " + value + "元";
      },
      tostringval: function (value) {

        return JSON.stringify(value)

      }
    },
    mounted: function () {

      this.$nextTick(function () {

      })


    },


    methods: {

      onInfinite() {

        setTimeout(()=>{
          api.goodslist({
            params: {
              id: this.goodslistid,
            }
          }).then(({data})=>{
            this.list = this.list.concat(data[0].list);
            this.pagelist+=data[0].list.length;
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            if(this.list.length===this.pagelist){
              this.goodslistid+=1;
            }

          }).catch(error=>{
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            console.log("error");

          });

        },1000);
      },
      //slice(0,6)



      retback () {
        this.$router.go(-1);
      },


    }


  }
</script>
