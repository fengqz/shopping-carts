<script src="../../router/index.js"></script>
<style lang="less" scoped>

  .nav{width: 100%;text-align: center;border-bottom: 1px solid silver; text-align: left; height: 2.8rem; position: relative;
    span{line-height:2.8rem;font-size: .8rem; display:block;  text-align: center;}
    .retback{line-height: 2.8rem; height: 2.8rem; width: 3rem; position: absolute;left: 0; top: 0; text-align: center;
      img{ height: 50%; vertical-align: middle;}
    }
    .tuiback{line-height:2.8rem; height: 2.8rem; width: 3rem; position: absolute;right: 0; top: 0; text-align: center;
      img{ height: 50%; vertical-align: middle;}
    }

  }
  input{margin-top: 0.5rem;width: 94%;height: 2.5rem;font-size: 0.8rem;color: silver; border-radius: 2px;
    border:0;
    outline: 0;
    padding: 0 3px;
    cursor: pointer;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);


   }
  .pasword{position: relative;color:grey;
    .opencles{ position: absolute; top: 0.2rem; right: 0;
      .dian{color:gray;font-size: 0.6rem;width: 4rem;height: 2rem;line-height:1.5rem;border-radius: 30px;position: absolute;right: 1rem;top: 0.6rem;border: 1px solid silver;
      }
      .yuan{width: 2rem;height: 2rem;border-radius: 50%;background-color: white;position: absolute;right: 1rem;top: 0.6rem;border: 1px solid silver;
      }

    }
    img{ width: auto; height:2rem; position: absolute; top: 0.7rem; right:0.8rem;}
  }
  .buttomin{ width: 94%;height: 2.5rem; margin-top: 1rem;     background-color: #d9534f;
    border-color: #d43f3a; font-size: .8rem; color: white;}
.reauest{ height:3rem; margin-top:1rem; padding: 0 1.5rem;
  a{ font-size: 0.7rem; display: inline-block; line-height: 3rem; color: #1a1a1a; line-height: 1.5rem; height: 1.5rem;
    span{ margin-top: -0.1rem;}
    &:nth-of-type(1){float: left}
    &:nth-of-type(2){float: right}
  }
  div{width: 100%; text-align: center}
}
    .item-check-btn {display: inline-block;width: 1rem;height: 1rem;border: 1px solid #ccc;border-radius: 50%;text-align: center;vertical-align: middle;cursor: pointer;
      .icon-ok {display: none;width: 100%; line-height: 11px;height: 100%;fill: #fff;-ms-transform: scale(0.8);transform: scale(0.8);}
    }
    .item-check-btn.check { background: #EE7A23; border-color: #EE7A23; line-height: 1.6rem;
      .icon-ok {display: inline-block;}
    }
  .ps{display: block; width: 100%; height: 12px;}
</style>
<template>
  <div class="register">
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
    <div class="nav">
      <div class="retback" v-on:click="retback" >
        <img src="../../assets/img/F1.png"/>
      </div>
      <span>登录</span>

      <div class="tuiback"><img src="../../assets/img/F2.png"/></div>
    </div>

    <form id="form"  :model="dynamicValidateForm">
      <input type="text"  v-model="dynamicValidateForm.email"  placeholder="输入344085688@qq.com" style="margin-top: 2rem">
      <div class="ps">
        <div v-show="dynamicValidateForm.email &&!validation.email" >请输入正确的邮箱地址</div>
      </div>

      <div class="pasword">
        <input v-model="dynamicValidateForm.password" type="password" placeholder="输入123456a">
        <div class="opencles">
        <div class="dian">abc ·&nbsp;·&nbsp;·</div>
        <div class="yuan"></div>
        </div>
      </div>
      <div class="ps">
      <div v-show="dynamicValidateForm.password &&!validation.password ">密码不正确</div>
      </div>
     <div class="pasword">
        <input type="text" placeholder="1234"  v-model="dynamicValidateForm.verification">
        <img src="../../assets/img/verification.png" />
      </div>
      <div class="ps">
        <div v-show="dynamicValidateForm.verification &&!validation.verification ">密码不正确</div>
      </div>

    <mu-raised-button @click="submitForm('dynamicValidateForm')" label="登录" class="demo-raised-button buttomin"/>

    </form>
    <div class="reauest">
      <a > <img src="../../assets/img/suo.png"><span>找回密码</span></a>
      <a ><span>快速注册</span><img src="../../assets/img/zc.png" ></a>
    </div>
    <div class="reauest">
      <div>&nbsp;其他登录方式<br>
        <img src="../../assets/img/qq.png">
      </div>
      </div>
  </div>
</template>
<script>
 import store from '../../store/index'
 import api from '../../axios/axiso'
  const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 const passworRE = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
 const verificationRe = /^\d{4}$/;
  export default{

      data(){
        return{
          dynamicValidateForm:{
            email:'',
            password:'',
            verification:""

          },
          useresForm:'',
          someDynamicCondition:false
        }
      },

    computed:{
      validation: function () {
        return {
          email: emailRE.test(this.dynamicValidateForm.email),
          password:passworRE.test(this.dynamicValidateForm.password),
          verification:verificationRe.test(this.dynamicValidateForm.verification)

        }
      },
    },
    watch:{

    },

    methods: {
      submitForm(formName){
          if(this.validation.email && this.validation.password && this.validation.verification){
            let opt = this.dynamicValidateForm;
            api.userLogin(opt)
              .then(({ data}) => {
              /*  console.log(data[0].emails)
               console.log(opt.email==data[0].emails)*/
                if(!(opt.email==data[0].emails)){
                  alert("账号不存在");
                }
                  //return
               /* }if(!(opt.password==data[0].password)){
                  alert("密码不正确")
                }*/else {
               //   let create_time = data.create_time;
                  let token = data[0].id;
                  let username = data[0].emails;
                  this.$store.dispatch('UserLogin', token);
                  this.$store.dispatch('UserName', username);
                  let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
                  //console.log(redirectUrl);
                  this.$router.push({
                    path: redirectUrl
                  });

                }

                //console.log('登录传来的json:' + JSON.stringify(data));

              });
          }
     },
     retback () {
        this.$router.go(-1);
      }

    }



  }

</script>

