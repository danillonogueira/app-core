<template>
  <SideBar />
  <div class="display">
    <CasaDeCheck />
    <my-react-component />
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  import CasaDeCheck from 'app_pkg_1/CasaDeCheck';
  import Button from 'app_pkg_2/Button';
  import ReactDOM from 'react-dom';
  import { h } from 'vue';

  export default {
    name: 'App',
    components: {
      SideBar,
      CasaDeCheck,
      'my-react-component': {
        render() {
          return h('div');
        },
        components: {
          render() {
            return h('div')
          },
          mounted() {
            ReactDOM.render(
              <Button />,
              this.$refs.react
            );
          }
        },
        
      }
    },
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
