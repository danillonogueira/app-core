<template>
  <SideBar />
  <Table />
</template>

<script>
  import SideBar from './components/SideBar'
  import Table from 'app_pkg_1/Table';

  export default {
    name: 'App',
    components: {
      SideBar,
      Table,
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: fixed;
    height: 100vh;
    width: 100vw;
  }

  .container {
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
