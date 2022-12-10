<template>
  <h1>{{msg}}</h1>
  <Hello/>
</template>


<script>
import Hello from "~/components/Hello";
export default {
  data(){
    return{
      msg : 'Hello V'
    }
  },
  components:{
    Hello
  }
}
</script>


<style>

h1{
  color: blue;
}

</style>