import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

import users from './users';

Vue.use(Vuex);

export const storeData = {
    modules: {
      users: _.cloneDeep(users),
    }
};

export default new Vuex.Store(storeData);