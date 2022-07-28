import { reqCheckCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/network";
import { setToken, getToken, removeToken } from '@/utils/token'

// user store

const state = {
  checkCode: '',
  token: getToken(),
  userInfo: {}
};
const getters = {};
const mutations = {
  GETCHECKCODE(state, value) {
    state.checkCode = value;
  },
  GETUSERLOGIN(state, value) {
    state.token = value;
  },
  GETUSERINFO(state, value) {
    state.userInfo = value;
  },
  CLEAR(state) {
    state.token = '';
    state.userInfo = {};
    removeToken();
  }
};
const actions = {
  async getCheckCode({ commit }, phoneNum) {
    return await reqCheckCode(phoneNum)
      .then(result => {
        if (result.code === 200) {
          commit('GETCHECKCODE', result.data);
          return Promise.resolve(result.data);
        }
        throw new Error('请求失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  async getUserRegister(_, data) {
    return await reqUserRegister(data)
      .then(result => {
        if (result.code === 200) {
          return Promise.resolve('注册成功');
        }
        throw new Error('注册失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  async getUserLogin({ commit }, data) {
    return await reqUserLogin(data)
      .then(result => {
        if (result.code === 200) {
          commit('GETUSERLOGIN', result.data.token)
          setToken(result.data.token)
          return Promise.resolve('登录成功');
        }
        throw new Error('登录失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  async getUserInfo({ commit }) {
    return await reqUserInfo()
      .then(result => {
        if (result.code === 200) {
          commit('GETUSERINFO',result.data);
          return Promise.resolve('成功获取用户信息');
        }
        throw new Error('登录失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  async userLogout({ commit }) {
    return await reqLogout()
      .then(result => {
        if (result.code === 200) {
          commit('CLEAR');
          return Promise.resolve('退出');
        }
        throw new Error('退出失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
