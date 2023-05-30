<template>
  <div class="bg-DarkJungleGreen text-white">
    <div class="container mx-auto pt-12 md:pt-24 z-50">
      <div
        class="flex flex-col space-y-6 md:space-y-0 md:flex-row items-start"
      ></div>
    </div>
    <div class="relative">
      <div class="flex justify-center bg-DarkJungleGreen">
        <img
          src="../assets/images/3Doctors-yellow-footer-logo.svg"
          class="w-full bg-DarkJungleGreen"
          alt=""
        />
      </div>
      <div class="absolute bottom-0 right-0">
        <img
          class="cloudL"
          src="https://constructidecepticon.files.wordpress.com/2013/06/nubepreplanes05.png"
          alt="smoke"
        />
      </div>
      <div class="absolute bottom-0 right-0">
        <img
          class="cloudR"
          src="https://constructidecepticon.files.wordpress.com/2013/06/nubepreplanes05.png"
          alt="smoke"
        />
      </div>
      <div class="absolute bottom-0 right-0">
        <img
          class="cloudL2"
          src="https://constructidecepticon.files.wordpress.com/2013/06/nubepreplanes05.png"
          alt="smoke"
        />
      </div>
      <div class="absolute bottom-0 right-0">
        <img
          class="cloudR2"
          src="https://constructidecepticon.files.wordpress.com/2013/06/nubepreplanes05.png"
          alt="smoke"
        />
      </div>
      <div class="absolute bottom-0 right-0">
        <img
          class="cloudL3"
          src="https://constructidecepticon.files.wordpress.com/2013/06/nubepreplanes05.png"
          alt="smoke"
        />
      </div>
      <div class="absolute bottom-0 right-0">
        <img
          class="cloudR3"
          src="https://constructidecepticon.files.wordpress.com/2013/06/nubepreplanes05.png"
          alt="smoke"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.cloudL {
  visibility: hidden;
  animation: smkL 5s infinite 1s ease-in;
}
.cloudR {
  visibility: hidden;
  animation: smkR 5s infinite 2s ease-in;
}
.cloudL2 {
  visibility: hidden;
  animation: smkR 5s infinite 3s ease-in;
}
.cloudR2 {
  visibility: hidden;
  animation: smkR 5s infinite 4s ease-in;
}
.cloudL3 {
  visibility: hidden;
  animation: smkR 5s infinite 5s ease-in;
}
.cloudR3 {
  visibility: hidden;
  animation: smkR 5s infinite 6s ease-in;
}

@keyframes smkL {
  0% {
    visibility: visible;
    transform: scale(0.01, 0.01) rotate(0deg);
  }
  100% {
    transform: scale(0.5, 0.5) translate(-100px, -400px) rotate(90deg);
    opacity: 0;
  }
}
@keyframes smkR {
  0% {
    visibility: visible;
    transform: scale(0.01, 0.01) rotate(0deg);
  }
  100% {
    transform: scale(0.5, 0.5) translate(100px, -400px) rotate(-90deg);
    opacity: 0;
  }
}
</style>
