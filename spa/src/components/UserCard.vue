<template>
  <div class="card">
    <div class="grid grid-cols-12 lg:mt-2.5 md:mt-2 sm:mt-1.5">
      <div class="col-span-11 columns-2 lg:text-2xl md:text-xl sm:text-lg"> User #{{user.id}} </div>
      <div class="col-span-1 icon"><img  v-on:click="deleteUser()" src="@/assets/icons/Delete.svg" class="mr-1"/></div>
    </div>
    <div class="center">  
      <div class="grid grid-cols-2">
        <div class="text-left my-1.5 lg:text-lg md:text-base sm:text-sm">Name</div>
        <div class="text-right my-1.5 lg:text-lg md:text-base sm:text-sm">{{user.name != undefined? user.name : user.first_name + ' ' + user.last_name}}</div>
      </div>
      <div class="grid grid-cols-2">
        <div class="text-left my-1.5 lg:text-lg md:text-base sm:text-sm">Color</div>
        <div class="text-right my-1.5 lg:text-lg md:text-base sm:text-sm">{{this.user.color == undefined ? '--' : this.user.color }}</div>
      </div>
    </div>
    <button 
      v-on:click="generateColor()" 
      class="lg:mb-8 md:mb-6 sm:mb-4 lg:w-52 sm:w-26 lg:text-base  sm:text-sm ">
        Generate color
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props:{
    user:Object
  },
  methods:{
    generateColor(){
      this.$set(this.user, 'color', '#'+Math.floor(Math.random()*16777215).toString(16))
    },
    async deleteUser(){
      await this.$store.dispatch('users/deleteUser', this.user.id);
    }
  }
}
</script>
