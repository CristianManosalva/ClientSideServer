import Vue from "vue";
import Router from "vue-router";

import SsSearchSection from "@/components/SsSearchSection";
import SsHistorial from "@/components/SsHistorial";
import Error from "@/components/Error";
import SsServerInfo from "@/components/SsServerInfo";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: SsSearchSection
    },
    {
      path: "/historial",
      name: "historial",
      component: SsHistorial
    },
    {
      path: "/domain/:domain",
      name: "server-detail",
      component: SsServerInfo
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
