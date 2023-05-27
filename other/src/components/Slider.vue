<template>
  <div class="slider">
    <div
      class="slides"
      ref="slides"
      @mouseover="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <slot />
    </div>
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="changeSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlide: 0,
      slides: [],
      autoSlideInterval: null,
    };
  },
  methods: {
    changeSlide(index) {
      this.currentSlide = index;
    },
    startAutoSlide() {
      if (!this.autoSlideInterval) {
        this.autoSlideInterval = setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        }, 500);
      }
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
  },
  created() {
    // this.slides = this.$slots.default.filter((node) => node.tag);
    if (this.$slots.default && Array.isArray(this.$slots.default)) {
      this.slides = this.$slots.default.filter((node) => node.tag);
    }
    this.startAutoSlide();
  },
  //   data() {
  //     return {
  //       currentSlide: 0,
  //       slides: [],
  //     };
  //   },
  //   methods: {
  //     changeSlide(index) {
  //       this.currentSlide = index;
  //     },
  //   },
  //   created() {
  //     if (this.$slots.default && Array.isArray(this.$slots.default)) {
  //       this.slides = this.$slots.default.filter((node) => node.tag);
  //     }
  //   },
};
</script>

<style>
.slider {
  position: relative;
}

.slides {
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.slides > * {
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: center;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dots > span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}

.dots > span.active {
  background-color: #333;
}
</style>
