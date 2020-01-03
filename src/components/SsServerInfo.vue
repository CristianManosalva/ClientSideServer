<template>
  <b-container v-if="!this.serverInfo.IsDown">
    <b-row>
      <b-col class="mb-5">
        <b-card align="left">
          <p class="card-text">
            Servers Changed: {{ this.serverInfo.ServersChanged }}
          </p>
          <!-- <img :src="this.serverInfo.Logo" alt="logo server" /> INSERTAR IMAGEN DEL LOGO, UBICAR CON POSITION:ABSOLUTE-->
          <p class="card-text">Ssl Grade: {{ this.serverInfo.SslGrade }}</p>
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

<!-- <b-container>
    <b-row>
      <b-col class="mb-5">
        <b-card align="left">
          <p class="card-text">
            Servers Changed: {{ domain_info.ServersChanged }}
          </p>
          <p class="card-text">Ssl Grade: {{ domain_info.SslGrade }}</p>
          <p class="card-text">
            Previous Ssl Grade: {{ domain_info.PreviousSslGrade }}
          </p>
          <p class="card-text">Logo link: {{ domain_info.Logo }}</p>
          <p class="card-text">Title Page: {{ domain_info.Title }}</p>
          <p class="card-text">Server is Down: {{ domain_info.IsDown }}</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-col>
          <b-table striped hover :items="domain_info.Endpoints"></b-table>
        </b-col>
      </b-col>
    </b-row>
  </b-container> -->

<script>
import api from "@/api";

export default {
  name: "DomainInfo",
  data() {
    return {
      serverInfo: {
        IsDown: true
      }
      /* serverInfo: {
        Endpoints: [
          {
            Address: "serversIp",
            SslGrade: "A+",
            Country: "Us",
            Owner: "Amazon Inc"
          },
          {
            Address: "serversIp",
            SslGrade: "A+",
            Country: "Us",
            Owner: "Amazon Inc"
          },
          {
            Address: "serversIp",
            SslGrade: "A+",
            Country: "Us",
            Owner: "Amazon Inc"
          }
        ],
        ServersChanged: false,
        SslGrade: "B",
        PreviousSslGrade: "A",
        Logo: "enlaceLogo",
        Title: "TestingTitle",
        IsDown: false
      } */
      // dating: {}
    };
  },
  created() {
    this.getDomain();
    this.getServerData();
  },
  methods: {
    getDomain: function() {
      const domain = this.$route.params.domain;
      console.log(domain);
    },
    getServerData: function() {
      api
        .getServerInfo()
        .then(data => (this.serverInfo = data) /* console.log(data) */);
    }
  }
  /* props: {
    domain_info: {
      type: Object,
      default: function() {
        return {
          Endpoints: [
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            }
          ],
          ServersChanged: false,
          SslGrade: "B",
          PreviousSslGrade: "A",
          Logo: "enlaceLogo",
          Title: "TitlePage",
          IsDown: false
        };
      }
    }
  } */
};
</script>

<style scoped></style>
