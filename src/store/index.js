import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = new createStore({
    state: {
      parseObject: null,
    },
    mutations: {
      SET_PARSE_OBJECT(state, parseObject) {
        state.parseObject = parseObject;
      },
    },
  });
  
export default store;
