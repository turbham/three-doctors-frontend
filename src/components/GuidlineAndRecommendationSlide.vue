<template>
  <div class="bg-PaleRose py-12 md:py-20">
    <div class="container mx-auto space-y-16">
      <p
        class="text-DarkJungleGreen text-xl md:text-5xl mb-6 font-windsor-pro-bold"
      >
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
</template>

<script>
import slider from "./Slider.vue";

export default {
  name: "GuidlineAndRecommendationSlide",
  components: {
    slider,
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
