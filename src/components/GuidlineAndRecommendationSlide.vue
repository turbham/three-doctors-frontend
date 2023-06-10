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
    class="relative max-h-[50%] h-[60vh] sm:h-[65vh] md:h-[65vh] lg:h-[135vh]"
    overlay="linear-gradient(0deg,#2a4ae430,#1C1D22)"
  >
    <div class="pt-12 md:pt-20">
      <div class="container mx-auto space-y-16">
        <p class="text-white text-xl md:text-5xl mb-6 font-windsor-pro-bold">
          Filter Guideline and Recommendations
        </p>

        <div
          class="border-[3px] border-DarkJungleGreen slider w-full h-[200px] lg:h-[500px]"
        >
          <div
            class="flex slide"
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ active: activeIndex === index }"
          >
            <div class="w-full relative">
              <img :src="slide.imageSrc" class="w-full h-full" alt="" />
              <div
                class="absolute bottom-2 md:bottom-4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 dots"
              >
                <span
                  class="dot"
                  v-for="(slide, index) in slides"
                  :key="index"
                  :class="{ active: activeIndex === index }"
                  @click="setActiveSlide(index)"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import slider from "./Slider.vue";
import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "GuidlineAndRecommendationSlide",
  components: {
    slider,
    VideoBackground,
  },
  data() {
    return {
      activeIndex: 0,
      slides: [
        {
          imageSrc: require("../assets/images/cover.jpg"),
        },
        {
          imageSrc: require("../assets/images/cover_2.jpg"),
        },
        {
          imageSrc: require("../assets/images/cover_3.jpg"),
        },
        {
          imageSrc: require("../assets/images/cover_4.jpg"),
        },
        {
          imageSrc: require("../assets/images/cover_5.jpg"),
        },
      ],
    };
  },
  methods: {
    setActiveSlide(index) {
      this.activeIndex = index;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 7000);
  },
};
</script>

<style scoped>
.slider {
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.dot {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 5px;
  background-color: #bec0ca;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #602300;
}

@media screen and (max-width: 496px) {
  .dot {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 3px;
  }
}
</style>
