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
        src="@/assets/plexcon.png"
        class="rounded-circle mb-4"
        style="height:128px;"
      />
      <h2>Plexcon</h2>
      <h3 class="h6">SysAdmin/Designer</h3>
      <div class="socials mt-3">
        <a
          href="https://steamcommunity.com/profiles/76561198013083787/"
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
            Hey, I’m a system administrator with a big affinity for design. A
            big hobby of mine has always been branding and UI design. I
            currently work as a system administrator/engineer for a managed
            service provider.
          </h5>
        </div>
        <div class="col-12 my-5">
          <div class="row">
            <div class="col-12 col-xl-8">
              <h5>👷‍♂️ Projects</h5>
              <ul>
                <li>
                  <h6>Casual bananas (Gmod)</h6>
                </li>
                <li>
                  <h6>Santos RP (Gmod)</h6>
                  Logo for SantosRP and custom logos for every department,
                  Reworking the whole UI, Interactive google-maps like map.
                </li>
                <li>
                  <h6>Bluedog minigames (Gmod)</h6>
                  Branding, Custom UI and icons
                </li>
              </ul>
            </div>
            <div class="col-12 col-xl-4">
              <h5>🛠 Works with</h5>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Blender</li>
                <li>Proxmox</li>
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
    titleTemplate: "%s | plexcon",
  },
};
</script>