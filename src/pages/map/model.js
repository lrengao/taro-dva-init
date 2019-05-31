import * as mapApi from './service';
export default {
  namespace: 'map',
  state: {
  },
  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(mapApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
