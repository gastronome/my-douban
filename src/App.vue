<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  max-width: 414px;
  margin: 0 auto;
}
div{
  box-sizing: border-box;
}
.header{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 48px;
  padding: 0 22px;
  display: flex;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  align-items: center;
}

.has-header{
  margin-top: 48px;
}
</style>
