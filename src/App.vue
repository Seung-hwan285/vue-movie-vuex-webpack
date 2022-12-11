<template>

  <nav class="logo">
    <router-link to="/">
      <h1 class="logo-title">
        <span>뷰 영화</span>
      </h1>
    </router-link>
  </nav>


  <main>
    <router-view />
  </main>
</template>

<script>

export default {

  data(){
    return{

    }
  }
}



</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: black;
}
a{
  text-decoration: none;
}

.logo{
  display: flex;
  align-content: center;
  justify-items: center;

  padding: 10px 16px;
  background-color: rgba(0, 0, 0, 0.9);
}

.logo-title{
  color: #eee;
}


</style>