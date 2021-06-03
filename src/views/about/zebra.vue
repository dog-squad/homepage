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
        src="@/assets/zebra.jpg"
        class="rounded-circle mb-4"
        style="height:128px;"
      />
      <h2>Zebra</h2>
      <h3 class="h6">Developer</h3>
      <div class="socials mt-3">
        <a
          href="https://steamcommunity.com/id/elzeber"
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
            Hey, I’m a student at the Ludwig Maximilian University of Munich for
            a MSc in Physics. I graduated with a BSc in Physics at the LMU
            Munich in 2019. I also have a keen interest in programming. I
            started out with Gmod LUA and switched to C# in 2016.
          </h5>
        </div>
        <div class="col-12 my-5">
          <div class="row">
            <div class="col-12 col-xl-8">
              <h5>👷‍♂️ Projects</h5>
              <ul>
                <li>
                  <h6>bluedog minigames (Gmod)</h6>
                  LUA Developer responsible for: Gamemodes, Weapons, Misc Addons
                </li>
                <li>
                  <h6>Sneaker bots</h6>
                  Software to automatically purchase limited sneakers online
                  (for personal use) written in C# using .NET Frameworks
                  HttpClient.
                </li>
                <li>
                  <h6>Proxy Forwarder</h6>
                  TCP proxy forwarder written in C using Epoll to handle up to
                  12k concurrent requests. Request is parsed, authorization
                  header validated then replaced and then forwarded to the
                  corresponding host.
                </li>
              </ul>
            </div>
            <div class="col-12 col-xl-4">
              <h5>🛠 Works with</h5>
              <ul>
                <li>C# (.NET Framework & .NET Core)</li>
                <li>LUA (Gmod)</li>
                <li>Python (University courses)</li>
                <li>C (TCP Sockets)</li>
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
    titleTemplate: "%s | zebra",
  },
};
</script>
