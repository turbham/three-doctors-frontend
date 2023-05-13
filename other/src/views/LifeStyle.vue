<template>
  <div>
    <Navbar />
    <LifeStyleHeader />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LifeStyleHeader from "@/components/LifeStyleHeader.vue";
export default {
  name: "LifeStyle",
  components: {
    Navbar,
    LifeStyleHeader,
  },
};
</script>
