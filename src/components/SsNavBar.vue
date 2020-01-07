<template>
  <header class="mb-4">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <img src="../assets/robot_navbar.png" height="40px" width="40x" alt="logo">
        <b-navbar-brand id="nav-title" to="/" href="#" style="font-weight: bold;">
          DomaInfo
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item active to="/">Consultar</b-nav-item>
            <b-nav-item active to="/historial">Historial</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>
