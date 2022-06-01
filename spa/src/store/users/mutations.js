export default {
    //list users 
    SET_LOADING_LIST_USERS(state, value) {
        state.loadingUsers = value;
    },
    SET_LIST_USERS(state, data) {
        state.users = data;
    },
    //create user 
    SET_ADD_USER(state, data) {
        state.users.push(data);
    },
    //delete user
    SET_DELETE_USER(state, id) {
        state.users.splice(state.users.indexOf(state.users.find(e => e.id == id)),1);
    },
};