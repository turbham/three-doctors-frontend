<template>
  <VideoBackground
    src="./smoke_video_4.mp4"
    poster="poster.jpg"
    :sources="[
      { src: '900>.mp4', res: 900, autoplay: true },
      {
        src: '640.mp4',
        res: 638,
        autoplay: true,
      },
    ]"
    class="relative max-h-[50%] h-[40vh] md:h-[50vh]"
    overlay="linear-gradient(0deg,#2a4ae430,#1C1D22)"
  >
    <div class="">
      <img
        src="../assets/images/3Doctors-yellow-footer-logo.svg"
        class="w-full absolute bottom-0"
        alt=""
      />
    </div>
  </VideoBackground>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "Footer",
  components: {
    VideoBackground,
  },
};
</script>
