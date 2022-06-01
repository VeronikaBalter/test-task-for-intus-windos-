import _ from 'lodash';
import actions from './actions';
import mutations from './mutations';

export const initialState = {
    loadingUsers:false,
    users:[],
};

const auth = {
    namespaced: true,
    state: _.cloneDeep(initialState),
    mutations,
    actions
};

export default auth;