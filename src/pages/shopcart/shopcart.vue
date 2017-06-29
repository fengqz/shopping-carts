<style lang="less" scoped>
  .shopcart{ margin-bottom: 6rem;}
  nav{width: 100%;text-align: center;border-bottom: 1px solid silver; text-align: left; height: 2.8rem; background: #fafafa; position:fixed;
    span{line-height:2.8rem;font-size: .7rem; display:block;  text-align: center;}
    .retback{line-height: 2.8rem; height: 2.5rem; width: 2.5rem; position: absolute;left: 0; top: 0; text-align: center;
      img{ height: 40%; vertical-align: middle;}
    }
    .tuiback{line-height: 2.8rem; height: 2.5rem; width: 2.5rem; position: absolute;right: 0; top: 0; text-align: center;
      img{ height: 40%;vertical-align: middle;}
    }

  }
  .caititle{ height: 2.8rem;}
  .titlbox{background:white; text-align: center; margin-bottom: 0.2rem;
    img{width:auto;}
  }
  .zy{width: 100%;
    .hg{margin-top: 0.5rem;width: 100%;font-size:0.6rem;overflow: hidden; text-align: left; height: 2rem; line-height: 1.5rem;
      img{width: 1.5rem;height: 1.5rem;float: right;margin-right: 0.2rem; }
      .hg-1{border-radius: 2px;margin-left: 0.3rem;text-align: center;color: white;width: 2rem;display: inline-block;background-color: red;}
    }
    .sp1{background-color: #FFFFFF;
      .p{ width: 100%; height: 1rem ; overflow: hidden;display: block;
        p{ float: right; color: black; font-size:.6rem; margin-top: 0.2rem; margin-right: 0.2rem;}
        span{ color: silver; margin-right: 0.5rem; margin-top: 0.1rem; float: right; font-size: .7rem;}
      }
    }
    .Llistofs{ width: 100%;display: flex ; flex-direction: row ;flex-wrap: wrap-reverse ; justify-content: space-between ; align-items: center ; align-content: center ;  margin-top: 0; padding-bottom: .1rem;
      div{
        &:nth-of-type(1){  display:block;  height: 100%; flex:0.5;
        }
        &:nth-of-type(2){flex: 2;
          img{width: 100%; height: auto;}
        }
        &:nth-of-type(3){ flex:3; text-align: left; margin-left: 0.2rem;align-content: center;
          .title{display: block; font-size: .6rem; width: 95%; height: 1rem;  overflow:hidden; text-overflow: ellipsis ;}
          span{
            &:nth-of-type(1){ font-size: 0.8rem;}
            &:nth-of-type(2){ font-size: 0.6rem; color: #666;}
            &:nth-of-type(3){ font-size: 0.4rem; color: #999;}
          }
          p{ color: red; padding: 0;display: block; height: 0.3rem;
            span{font-size: 0.8rem}
          }
          p:nth-of-type(2){color: #910000;}


          .quentity{ float: right;margin-right: 0.8rem;width:5rem; height: 1.2rem;border:1px solid darkgray; border-radius: 4px;
            a{ text-align: center; width: 30%; color:#666; height: 100%; display: inline-block;
              &:nth-of-type(1){  border-right: 1px solid darkgray;float: left;}
              &:nth-of-type(2){  border-left: 1px solid darkgray; float: right;}
            }
            input{ height: 1.4rem; line-height: 1rem;  width: 40%; outline: none;  text-align: center; font-size: .7rem;border: none; background: none; }
          }

        }
      }
    }

  }
  .item-check-btn {display: inline-block;width: 1.1rem;height: 1.1rem;border: 1px solid #ccc;border-radius: 50%;text-align: center;vertical-align: middle;cursor: pointer;
    .icon-ok {display: none;width: 100%; line-height: 11px;height: 100%;fill: #fff;-ms-transform: scale(0.6);transform: scale(0.6);}
  }
  .item-check-btn.check { background: #EE7A23; border-color: #EE7A23; line-height: 1rem;
    .icon-ok {display: inline-block;}
  }
.Settlement{ position: fixed;bottom: 2.8rem;height: 2.8rem; display: flex ;flex-direction: row ;flex-wrap: wrap-reverse ; justify-content: space-between ; align-items: center ; align-content: center ;width:100%;background:white;
  div{font-size: .8rem;
   &:nth-of-type(1){flex: 1 1 1rem;font-weight: bold; font-size:0.6rem;}
    &:nth-of-type(2){flex: 2 2 2rem; text-align: left;height: 2.8rem; line-height: 1rem; padding-top: .2rem;font-size: 0.7rem;
        span:nth-of-type(1){font-weight: bold;}
        span:nth-of-type(2){ color: #4F4F51;font-size: 0.6rem;}
    }
    &:nth-of-type(3){flex: 3; font-size: 0.8rem; background: #f23030;height: 2.8rem; color: white;font-weight: bold; line-height: 2.6rem;}
    span{ font-size: 0.8rem}
  }
}
  .mu-raised-button{ width: 45% !important; }
  .mu-dialog-body {
    padding: 0!important;
    color: rgba(0,0,0,.6);
  }
  .mu-dialog {
    padding: 0!important;
    color: rgba(0,0,0,.6);
  }



</style>
<template>
  <div class="shopcart">
   <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-ok" viewBox="0 0 39 32">
          <title>ok</title>
          <path class="path1"
                d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
        </symbol>
      </defs>
    </svg>

    <nav>
      <div class="retback" v-on:click="retback">
        <img src="../../assets/img/F1.png"/>
      </div>
      <span>购物车</span>
      <div class="tuiback">
        <img src="../../assets/img/044.png"/>
      </div>
    </nav>
    <div class="caititle"></div>
    <div class="titlbox"><img src="../../assets/img/g1.png"></div>

    <div class="zy" v-for="item in shopcart">
      <div class="hg">
        <div class="hg-1">换购</div>
        <span>{{item.promotiontitle}}</span>
        <img src="../../assets/img/g3.png"/>
      </div>
      <div class="sp1">
        <div class="p">
          <p>换购商品</p>
          <span>|</span>
        </div>
        <div class="Llistofs">
          <div>
            <a class="item-check-btn" :class="{'check':item.checked}" @click="selectedProduct(item)">
              <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
            </a>
          </div>
          <div><img :src="item.listimgurl"></div>
          <div>
            <div class="title">{{item.wareneme}}</div>
            <span>{{item.spec}}</span><br>
            <span>{{item.specexplain}}</span><br>
            <p><span>{{item.unitprice | formatMoney}}</span></p>
            <p>小结：<span>{{item.unitprice*item.productQuentity| formatMoney}}</span></p>
            <div class="quentity">
              <a @click="changeMoney(item,-1)">-</a>
              <input type="text" disabled  v-model="item.productQuentity " >
              <a @click="changeMoney(item,2)">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="Settlement">
        <div @click="checkAlls(true)" >
            <a class="item-check-btn":class="{'check':checkAll}" >
                <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
          </a>全选
        </div>
      <div>
        <span>合计：{{totalMoney|formatMoney}}</span><br>
        <span>满{{totalMoney|formatMoney}}立减{{minus|formatMoney}}</span>
      </div>
      <div>
        去结算(<span>{{lists}}</span>)
      </div>
    </div>

    <mu-dialog :open="dialog" @close="close">
        <p>你确认删除此订单信息吗?</p>
      <mu-raised-button slot="actions"  @click="delCurrentProduct" label="确定"/>
      <mu-raised-button  slot="actions" @click="close"  label="取消"/>

    </mu-dialog>

  </div>

</template>
<script>
  import {shopcart} from '../../data/shopcart';
  export default{

      name:'shopcart',
      data(){
          return{
            totalMoney:0,
            shopcart,
            checkAll:false,
            dialog: false,
            currentProduct:'',
            minus:'0',
            lists:0
          }

      },
    filters: {
      formatMoney: function (value) {
          return "¥ "+value +"元";
      }
    },
    mounted:function () {

          this.$nextTick(function () {
          });

      this.shopcart.forEach(item=> {
          if(item.checked){
            this.lists++;
          }
      });
       this.calcTotalMoney();

    },

    methods:{
      selectedProduct:function (item) {
          if(typeof(item.checked)=='undefined'){
            this.$set(item,"checked",true);
            this.lists ++;
          }else {
             item.checked=! item.checked;
             if(item.checked){
               this.lists ++;
             } else {
               this.lists --;
             }

             this.checkAll=false;
          }
        this.calcTotalMoney();
      },
      checkAlls:function () {

        this.checkAll=!this.checkAll
        if(this.checkAll==true){
          this.shopcart.forEach(item=>{
            if(typeof(item.checked)=='undefined'){
              this.$set(item,"checked",true)
            }else {
              item.checked=true;
              this.lists=this.shopcart.length;
            }
          })

        } else {
          this.shopcart.forEach(item=>{
              item.checked=false;
            this.lists=0;
          })

        }
        this.calcTotalMoney();

      },
      changeMoney:function (item,way) {
          if(way>0){
            item.productQuentity++;
          }else {
            item.productQuentity--;
            if(item.productQuentity<1){
              item.productQuentity=1;
              this.currentProduct=item;
                this.open ();
                return;

            }

          }
        this.calcTotalMoney();
      },
      calcTotalMoney: function () {
        this.totalMoney=0;
        this.shopcart.forEach(item=>{
            if(item.checked){
                this.totalMoney+=item.unitprice*item.productQuentity;

            }
            if(this.totalMoney>399){
                this.minus=100;
            }else {
              this.minus=0;
            }
        });
      },
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      },
      delCurrentProduct:function () {
        this.dialog = false;
        var index = this.shopcart.indexOf(this.currentProduct);
        this.shopcart.splice(index,1);
        this.calcTotalMoney();

      },

      retback () {
        this.$router.go(-1);
      },


    },
  }

</script>

