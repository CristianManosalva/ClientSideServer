<template>
  <main>
    <b-container>
      <b-row>
        <b-col>
          <section class="main-icon">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png"
              alt="Logo server"
            />
          </section>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <section class="main-input">
            <div class="main-input-container">
              <span class="busqueda-icon"> </span>

              <input type="text" />

              <a class="micro-icon" href=""> </a>
            </div>
          </section>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <section class="main-buttons">
            <div>
              <button v-on:click="showServerInfo">
                Consultar
              </button>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import api from "@/api";

export default {
  name: "SsSearchSection",
  data() {
    return {
      domain: "",
      assets: []
    };
  },
  methods: {
    showServerInfo: function(event) {
      // api.getAssets().then(assets => (this.assets = assets));
      // console.log(this.assets);
      this.$router.push({
        name: "server-detail",
        params: { domain: "truora.com" }
      });
    }
  }
};
</script>

<style scoped>
main {
  margin-top: 160px;

  text-align: center;
}

main .main-icon {
  margin: 0 auto;

  margin-bottom: 30px;
}

main .main-icon img {
  width: 272px;

  height: 92px;
}

main .main-input {
  width: 530px;

  margin: 0 auto;

  margin-bottom: 35px;
}

main .main-input-container {
  width: 525px;

  border-radius: 50px;

  border: 1px solid #dfe1e5;

  display: flex;

  align-items: center;

  justify-content: center;

  justify-content: space-between;
}

main .main-input-container:hover {
  /*:hover es una :pseudo-clase, tambien existen ::pseudo-elementos como ::first_line */

  box-shadow: 0 1px 6px 0 #20212447;

  border-color: #dfe1e500;
}

main .main-input-container input {
  width: 430px;

  height: 40px;

  border: none;

  outline: none;
}

main .main-input-container .busqueda-icon {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png");

  background-position: center;

  background-size: contain;

  background-repeat: no-repeat;

  width: 20px;

  height: 20px;

  margin-left: 15px;
}

main .main-input-container .micro-icon {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png");

  background-position: center;

  background-size: contain;

  background-repeat: no-repeat;

  width: 20px;

  height: 20px;

  margin-right: 15px;
}

main .main-buttons {
  width: 530px;

  margin: 0 auto;
}

main .main-buttons div {
  display: inline-block;
}

main .main-buttons button {
  background-color: #f2f2f2;

  border: 1px solid #f2f2f2;

  border-radius: 4px;

  color: #5f6368;

  font-size: 14px;

  height: 36px;

  margin: 0px 5px;

  padding: 0 15px;
}

main .main-buttons button:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  background-color: #f8f8f8;

  border: 1px solid #c6c6c6;

  color: #222;
}
</style>
