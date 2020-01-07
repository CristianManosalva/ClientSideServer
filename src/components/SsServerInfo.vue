<template>
  <b-container v-if="!this.serverInfo.IsDown">
    <b-row>
      <b-col class="mb-5">
        <b-card align="left">
          <p class="card-text">
            Servers Changed: {{ this.serverInfo.ServersChanged }}
          </p>
          <!-- <img :src="this.serverInfo.Logo" alt="logo server" /> INSERTAR IMAGEN DEL LOGO, UBICAR CON POSITION:ABSOLUTE-->
          <p class="card-text">Ssl Grade: {{ this.serverInfo.SslGrade }}
            <b-spinner variant="primary" v-if="this.showspinner" label="Spinning" style="width: 20px; height: 20px;"></b-spinner>
          </p>
          <p class="card-text">
            Previous Ssl Grade: {{ this.serverInfo.PreviousSslGrade }}
          </p>
          <p class="card-text" style="width = 50%">
            Logo link:
            <a :href="this.serverInfo.Logo">{{ this.serverInfo.Logo }}</a>
          </p>
          <p class="card-text">Title Page: {{ this.serverInfo.Title }}</p>
          <p class="card-text">Server is Down: {{ this.serverInfo.IsDown }}</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col>
          <b-table striped hover :items="this.serverInfo.Endpoints"></b-table>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import api from "@/api";

export default {
  name: "DomainInfo",
  data() {
    return {
      domain: "",
      serverInfo: {
        IsDown: true,
        idInterval: null
      }
    };
  },
  computed: {
    showspinner: function() {
      return this.serverInfo.SslGrade == "";
    }
  },
  created() {
    this.getDomain();
    this.getServerData();
  },
  methods: {
    getDomain: function() {
      this.domain = this.$route.params.domain;
    },
    getServerData: async function() {
      await api
        .getServerInfo(this.domain)
        .then(data => (this.serverInfo = data))

      console.log(this.serverInfo)

      if (this.serverInfo.SslGrade == "" && this.serverInfo.Endpoints != null) {
        console.log("el grado: ", this.serverInfo.SslGrade)
        console.log("Los: ", this.serverInfo.Endpoints)
        this.idInterval = setInterval(function() { this.getSslGrade() }.bind(this), 50000)
      }

    },

    getSslGrade: async function() {

      var rp = await api.getSslGrade(this.domain)
      this.serverInfo.SslGrade = rp.SslGrade
      for (var i = 0; i < this.serverInfo.Endpoints.length; i++) {
        this.serverInfo.Endpoints[i].Grade = rp.Endpoints[i].Grade
      }

      if (rp.Status == "READY") {
        clearInterval(this.idInterval);
      }

      console.log("Se llamo")
    }
  }
};

</script>
<style scoped></style>
