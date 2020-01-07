<template>
  <main>
    <b-container>
      <b-list-group>
        <b-list-group-item class="d-flex justify-content-center align-items-center mb-4" v-for="a in this.items.Items" :key="a.Dominio">
          <b-row style="min-width:100%;max-width:100%;">
            <b-col sm="12">
              <b-card align="left" class="d-flex">
                <p class="card-text card-title">{{a.Dominio}}</p>
                <b-container>
                  <b-row>
                    <b-col sm="12" md="6">
                      <p class="card-text">Servers Changed: {{ a.Info.ServersChanged }}</p>
                      <p class="card-text">Ssl Grade: {{ a.Info.SslGrade }}</p>
                      <p class="card-text">Previous Ssl Grade: {{ a.Info.PreviousSslGrade }}</p>
                    </b-col>
                    <b-col sm="12" md="6">
                      <p class="card-text" style="min-width: 50%; max-width: 50%;">
                        Logo link:
                        <a target="_blank" :href="a.Info.Logo">
                          <img :src="a.Info.Logo" alt="logo" width="20" height="20" />
                        </a>
                      </p>
                      <p class="card-text">Title Page: {{ a.Info.Title }}</p>
                      <p class="card-text">Server is Down: {{ a.Info.IsDown }}</p>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-col>
            <b-col sm="12">
              <b-button v-b-toggle="`collapse-${a.Dominio}`" class="m-1 mt-2 mb-2">Servidores</b-button>
              <b-collapse :id="`collapse-${a.Dominio}`">
                <b-table striped hover :items="a.Info.Endpoints"></b-table>
              </b-collapse>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </main>
</template>
<script>
import api from "@/api";
export default {
  name: "SsHistorial",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getServerRecord();
  },
  methods: {
    getServerRecord: function() {
      api
        .getServersRecord()
        .then(data => (this.items = data));
    }
  }
};

</script>
<style scoped>
.card-title {
  text-align: center;
  font-size: 20px;
  background-color: lightseagreen;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  padding: 2px;
  border-radius: 5px;
}

</style>
