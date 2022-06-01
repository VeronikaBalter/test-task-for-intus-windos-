<template>
    <div>
        <create-user/>
        <loading v-if="loading"/>
        <div v-else class="mt-16">
            <user-card v-for="(user, index) in users" v-bind:key="index"
                :user="user"/>
        </div>
    </div>
</template>

<script>
import CreateUser from '../components/CreateUser.vue';
import Loading from '../components/Loading.vue';
import UserCard from '../components/UserCard.vue';

export default {
    name: 'UsersManagement',
    components: { UserCard, CreateUser, Loading },
    mounted() {
        this.getUsers();
    },
    computed: {
        users() {
          return this.$store.state.users.users;
        },
        loading(){
            return this.$store.state.users.loadingUsers;
        }
    },
    methods: {
        async getUsers() {
            await this.$store.dispatch('users/listUsers');
        },
    }
}
</script>