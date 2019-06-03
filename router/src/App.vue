<template>
  <div id="app">
    <ul class="clearfix">
      <li><router-link to="/logo">logo</router-link></li>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/chat">chat</router-link></li>
      <li><router-link to="/text">text</router-link></li>
    </ul>
    <router-view/>
   <child></child>
  </div>
  
</template>

<script>
import footer from './components/footer'
export default{
  components:{
    'child':footer
  },
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfix {
  z-index: 1;
}
#app{
  background: #f29d38;
}
#app ul{
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
}
#app li{
  width: 25%;
  float: left;
  text-align: center;
}
#app li a{
 text-decoration: none;
}
// #app li a:hover{   
//   background: #b4dbcd;
// }
</style>
