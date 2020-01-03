<template>
  <div id="app">
    <ss-nav-bar />
    <router-view />
    <ss-footer />
    <!-- <ss-server-info /> -->
    <!-- <ss-search-secction /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import SsNavBar from "./components/SsNavBar";
import SsFooter from "./components/SsFooter";
// import SsSearchSection from "./components/SsSearchSection";
import SsServerInfo from "./components/SsServerInfo";

export default {
  name: "App",
  components: {
    SsNavBar,
    SsFooter,
    // SsSearchSection,
    SsServerInfo
  }
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 160px;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
