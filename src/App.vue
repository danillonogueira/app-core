<template>
  <SideBar />
  <div class="display">
    <CasaDeCheck />
    <div ref="btn"></div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  import CasaDeCheck from 'app_pkg_1/CasaDeCheck';
  import Button from 'app_pkg_2/Button';
  import renderReactComponent from './renderReactComponent';

  export default {
    name: 'App',
    components: {
      SideBar,
      CasaDeCheck,
    },
    mounted() {
      const ref = this.$refs.btn;

      renderReactComponent({
        component: Button,
        ref
      });
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
