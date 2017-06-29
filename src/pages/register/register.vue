<style lang="less" scoped>
  .nav{width: 100%;text-align: center;border-bottom: 1px solid silver; text-align: left; height: 5rem; position: relative;
    span{line-height:5rem;font-size: 1.5rem; display:block;  text-align: center;}
    .retback{line-height: 5rem; height: 5rem; width: 5rem; position: absolute;left: 0; top: 0; text-align: center;
      img{ height: 50%; vertical-align: middle;}
    }
    .tuiback{line-height: 5rem; height: 5rem; width: 5rem; position: absolute;right: 0; top: 0; text-align: center;
      img{ height: 50%; vertical-align: middle;}
    }

  }
  .demo-ruleForm{ margin-top: 2rem}
</style>
<template>
  <div class="register">
    <div class="nav">
      <div class="retback" v-on:click="retback" >
        <img src="../../assets/img/F1.png"/>
      </div>
      <span>活生鲜注册</span>
      <div class="tuiback"><img src="../../assets/img/F2.png"/></div>
    </div>
    <el-form :model="ruleForm2" :rules="rules2" label-position="top"  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="email">
        <el-input v-model.number="ruleForm2.age" placeholder="用户名/邮箱/已验证手机" ></el-input>
      </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="ruleForm2.pass"  placeholder="密码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item  prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" placeholder="确认密码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

