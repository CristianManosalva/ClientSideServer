<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col sm="12" md="7" style="text-align: center;">
          <p>
            Prueba Tecnica Software Engineer - Intern Truora Inc.
            <img
              src="../assets/logo-truora.png"
              alt="logo"
              height="40px"
            /><strong>Truora</strong>
          </p>
        </b-col>
        <b-col
          sm="12"
          md="5"
          style="display: flex; justify-content: center; align-items: center;"
        >
          <p>
            Designed by
            <a target="_blank" href="https://github.com/CristianManosalva"
              >@Cristian</a
            >
          </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 10px;
  padding: 10px 0;
  /* background: linear-gradient(90deg, #1c3643, #273b47 25%, #1e5472); */
  background-color: #343a40;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.col {
  border: 1px solid red;
}
.footer {
  color: white;

  text-align: center;
}

p {
  padding: 0;
  margin: 0;
}

strong {
  letter-spacing: 2px;
}
</style>
