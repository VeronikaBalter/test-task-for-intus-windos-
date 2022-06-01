import axios from 'axios';
import Vue from 'vue';

export default {
    async listUsers(context) {         
        context.commit('SET_LOADING_LIST_USERS', true);       
        await axios
            .get(`${process.env.VUE_APP_API_URL}/api/users?per_page=5`)
            .then(result=> {
                context.commit('SET_LIST_USERS', result.data.data);
                context.commit('SET_LOADING_LIST_USERS', false);   
            })
            .catch(() => {
                context.commit('SET_LOADING_LIST_USERS', false);   
                Vue.toasted.error('An error occurred while loading users');  
            });
    },
    async createUser(context, user) {         
        await axios
            .post(`${process.env.VUE_APP_API_URL}/api/users`,user)
            .then(result => {
                context.commit('SET_ADD_USER', result.data);       
                Vue.toasted.success('User successfully created');  
            })
            .catch(() => {                         
                Vue.toasted.error('An error occurred while creating a user');   
            });
    },
    async deleteUser(context, id) {          
        try{                
            context.commit('SET_DELETE_USER', id);                    
            Vue.toasted.success('User deleted successfully');  
        }
        catch{          
            Vue.toasted.error('An error occurred while deleting a user');    
        }
    },

};
