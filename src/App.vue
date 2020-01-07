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
<style scope>
</style>
