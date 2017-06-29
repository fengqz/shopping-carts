<style scoped lang="less">
  .claslist{background: #f1f1f1; padding-bottom: 3rem;
  article{width: 100%;
    p{font-size: 0.8rem;margin-bottom: 0.2rem;}
  }
  section{width:100%; padding-right: 0.3rem;
    div{width:100%;display: inline-flex ; padding: 0.3rem; flex-direction: row ;flex-wrap: wrap ;justify-content: flex-start ; align-items: stretch ; align-content: flex-start ; background: white;box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647); border-radius: 2px;
      div{flex:0 0 33.33333%;text-align: center; display: block; font-size: 0.6rem;box-shadow:none;
        img{width:100%; height: auto;  }
    }
    }
  }
  }
</style>
<template>
  <div class="claslist">
    <div v-for="item in msglist">
    <article>
      <p>{{item.xla}}</p>
    </article>
    <section >
      <div>
          <div v-for="items in item.xnal">
            <img :src="items.imgurl" alt="">
           {{items.names}}
          </div>
      </div>
    </section>
    </div>
  </div>
</template>
<script>
  export default{
      name:'claslist',
    created (){


    },
    data:function(){
          return{


          }
    },
    props:['msglist'],

  }

</script>

