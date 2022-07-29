<template>
  <div class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <div v-if="userName">
            <p>{{ userName }}</p>
            <p>
              <a href="javascript: void(0);" class="register" @click="logout">退出登录</a>
            </p>
          </div>
          <div v-else>
            <p>mall欢迎您!</p>
            <p>
              <span>请</span>
              <!-- 跳转到登录注册页面 -->
              <router-link to="/login">登录</router-link>
              <router-link class="register" to="/register">免费注册</router-link>
            </p>
          </div>
        </div>
        <div class="typeList">
          <router-link to="/center/myOrder">我的订单</router-link>
          <router-link to="/shopCart">我的购物车</router-link>
          <router-link to="/home">我的mall</router-link>
          <a href="###">mall会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注mall</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- 图片跳转到主页 -->
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea" v-show="!showHeader">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MallHeader',
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    showHeader() {
      return this.$route.path.includes('register') || this.$route.path.includes('login')
    },
    userName() {
      return this.$store.state.user.userInfo.nickName;
    }
  },
  mounted() {
    this.$bus.$on('clear', this.clear);
  },
  methods: {
    goSearch() {
      // this.$router.push('/search?keyword=' + this.keyword);
      this.$router.push({
        name: 'search',
        query: this.$route.query,
        params: {
          keyword: this.keyword || null
        }
      });
    },
    clear() {
      this.keyword = '';
    },
    logout() {
      this.$store.dispatch('userLogout')
      .then(console.log)
      .catch(console.log);
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped lang="less">
.header {
  &>.top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          &+a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }

  &>.bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
