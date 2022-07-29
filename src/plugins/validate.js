import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate);

// 表单验证
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: field => `${field}必须与密码相同`// 修改内置规则的 message
  },
  attributes: {
    phoneNum: '手机号',
    checkCode: '验证码',
    password: '密码',
    repeatPassword: '确认密码',
    protocol: '协议'
  }
});


//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('protocol', {
  validate: value => {
    return value
  },
  getMessage: field => field + '必须同意'
})
