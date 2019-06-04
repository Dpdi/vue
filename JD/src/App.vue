<template>
  <div id="app">
    <router-view></router-view>
    <ul>
      <router-link to="/home">
        <li @click="toPath('/home')">
          <img
            :src="this.$route.path === '/home' ? require('./assets/home_active.png') : require('./assets/home.png')"
          >
        </li>
      </router-link>
      <router-link to="/goodlist">
        <li @click="toPath('/goodlist')">
          <img
            :src="this.$route.path === '/goodlist' ? require('./assets/goodlist_active.png') : require('./assets/goodlist.png')"
          >
        </li>
      </router-link>
      <router-link to="/car">
        <li @click="toPath('/car')">
          <!-- <img src="./assets/car.png"> -->
          <img
            :src="this.$route.path === '/car' ? require('./assets/car_active.png') : require('./assets/car.png')"
          >
        </li>
      </router-link>
      <router-link to="/user">
        <li @click="toPath('/user')">
          <img
            :src="this.$route.path === '/user' ? require('./assets/user_active.png') : require('./assets/user.png')"
          >
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toPath(Path) {
      this.$router.replace(path);
      console.log(this.$router);
    }
  }
};
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "微软雅黑";
}
li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
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

ul {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background: #f7f7f7;
}
li {
  //  border: 1px solid red;
}
li img {
  width: 80%;
  display: block;
  margin: 0 auto;
}
</style>
