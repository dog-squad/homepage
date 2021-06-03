<template>
  <div id="app" class="container d-flex h-100">
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  metaInfo: {
    title: "dogsquad software",
    titleTemplate: "%s",
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
html,
body {
  height: 100%;
  color: #fff;
  background: #606c88; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f4c6b,
    #606c88
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3f4c6b,
    #606c88
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Lato", sans-serif;
}

h1,
h2,
h3 {
  font-weight: 700;
}

h5.subline {
  line-height: 40px;
  font-weight: 400;
}

.socials {
  font-size: 24px;
}

a {
  color: rgb(207, 207, 207);
}

a:hover {
  color: #fff;
}

a.steam {
  color: rgb(189, 189, 189);
}
a.steam :hover {
  color: #fff;
}

@media (max-width: 767px) {
  .border-end {
    border: 0px solid !important;
  }
}
</style>
