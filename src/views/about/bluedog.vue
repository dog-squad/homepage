<template>
  <div
    class="row justify-content-center align-self-md-center align-self-xl-center"
  >
    <div class="col-12 mb-5">
      <router-link to="/" class="btn btn-dark">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        Back
      </router-link>
    </div>
    <div
      class="col-12 col-md-4 col-xl-3 mb-5 mb-md-0 mb-lg-0 text-center border-end"
    >
      <img
        src="@/assets/bluedog.jpg"
        class="rounded-circle mb-4"
        style="height:128px;"
      />
      <h2>bluedog</h2>
      <h3 class="h6">Developer/DevOps</h3>
      <div class="socials mt-3">
        <a
          href="https://steamcommunity.com/id/187z/"
          target="_blank"
          class="steam mx-2"
          ><font-awesome-icon :icon="['fab', 'steam']" />
        </a>
      </div>
    </div>
    <div class="col-12 col-md-7 offset-md-1 col-xl-8 offset-xl-1">
      <div class="row">
        <div class="col-12">
          <h5 class="lead">
            Hey, I'm a software engineer living in Utrecht, the Netherlands. I
            graduated with a BSc in software engineering and a degree in visual
            design. I love combining design and tech when creating
            web-applications.
          </h5>
        </div>
        <div class="col-12 my-5">
          <div class="row">
            <div class="col-12 col-xl-8">
              <h5>👷‍♂️ Projects</h5>
              <ul>
                <li>
                  <h6>Casual bananas (Gmod)</h6>
                  Webdeveloper & SysAdmin
                </li>
                <li>
                  <h6>Santos RP (Gmod)</h6>
                  Webdeveloper (IPB Software plugins, Custom webapplications),
                  SysAdmin
                </li>
                <li>
                  <h6>Bluedog minigames (Gmod)</h6>
                  Webdeveloper & SysAdmin
                </li>
                <li>
                  <h6>MonolithRP (Gmod)</h6>
                  Webdeveloper
                </li>
              </ul>
            </div>
            <div class="col-12 col-xl-4">
              <h5>🛠 Works with</h5>
              <ul>
                <li>C# (.net core + Entity Framework)</li>
                <li>PHP (Laravel + LiveWire)</li>
                <li>Python/NodeJS</li>
                <li>Vuejs / Nuxtjs</li>
                <li>AWS / DigitalOcean</li>
                <li>Docker / Traefik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | bluedog",
  },
};
</script>
