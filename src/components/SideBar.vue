<template>
  <div class="sidebar">
    <img src="./logo.png" />
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
  }
</script>

<style scoped lang="scss">
  .sidebar {
    width: 250px;
    background: #EEE;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
