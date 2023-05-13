<template>
  <div>
    <Navbar />
    <SportGearHeader />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SportGearHeader from "@/components/SportGearHeader.vue";
export default {
  name: "SportGear",
  components: {
    Navbar,
    SportGearHeader,
  },
};
</script>
