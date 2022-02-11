<template>
  <SideBar />
  <div class="display">
    <CasaDeCheck />
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  import CasaDeCheck from 'app_pkg_1/CasaDeCheck';

  export default {
    name: 'App',
    components: {
      SideBar,
      CasaDeCheck,
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

  .display {
    padding: 20px;
  }
</style>
