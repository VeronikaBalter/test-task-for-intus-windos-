<template>
    <div class="card">
        <form  @submit.prevent="createUser">
            <div class="text-neutral-black mb-6 lg:text-32px md:text-26px sm:text-16px">Create user</div>
            <p class="text-error lg:text-base md:text-sm sm:text-xs" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <div class="center">
                <div class="text-neutral-black text-left mb-1 lg:text-lg md:text-base sm:text-sm">Full Name</div>
                <div class="grid grid-cols-12">
                    <div class="col-span-11">
                        <input 
                            v-model.trim="$v.user.name.$model" 
                            v-bind:class="user.name != null && (!$v.user.name.required ||!$v.user.name.minLength || !$v.user.name.maxLength)? 'border-2 border-error' : ''"/> 
                    </div>
                    <div class="col-span-1 text-error">*</div>
                </div>
                <div class="text-error text-xs text-left">
                    <div v-if="user.name != null && !$v.user.name.required">Name is required</div>
                    <div v-if="!$v.user.name.minLength || !$v.user.name.maxLength">Name must have at {{$v.user.name.$params.minLength.min}} - {{$v.user.name.$params.maxLength.max}} letters.</div>
                </div>
                <div class="text-neutral-black text-left mb-1 mt-6 lg:text-lg md:text-base sm:text-sm">Job</div>
                <div class="grid grid-cols-12">
                    <div class="col-span-11">
                        <input 
                            v-model.trim="$v.user.job.$model" 
                            v-bind:class="user.name != null && (!$v.user.job.required ||!$v.user.job.minLength || !$v.user.job.maxLength)? 'border-2 border-error' : ''"/> 
                    </div>
                    <div class="col-span-1 text-error">*</div>
                </div>
                <div class="text-error text-xs text-left">
                    <div v-if="user.job != null && !$v.user.job.required">Job is required</div>
                    <div v-if="!$v.user.job.minLength || !$v.user.job.maxLength">Job must have at {{$v.user.job.$params.minLength.min}} - {{$v.user.job.$params.maxLength.max}} letters.</div>
                </div>
            </div>
            <button class="mt-6 lg:w-52 sm:w-26 lg:text-base sm:text-sm" type="submit">Create User</button>
        </form>
  
    </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    name: 'User',
    data() {
        return {
            user:{
                name: null,
                job: null
            },
            submitStatus: null
        }
    },
    validations: {
        user:{
            name: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(15)
            },
            job: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(15)
            }
        }
    },
    methods:{
        async createUser(){
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR';
                if(this.user.name == null)
                    this.user.name = '';
                if(this.user.job == null)
                    this.user.job = '';
            } else {
                await this.$store.dispatch('users/createUser', this.user);
                this.user.name = null;
                this.user.job = null;
                this.submitStatus = null
            }
        }
    }
}
</script>