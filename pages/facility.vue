<template>
  <div>
    <Navbar />
    <FacilityCarousel />
    <Footer />
  </div>
</template>

<script>
import FacilityCarousel from '@/components/FacilityCarousel.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    FacilityCarousel,
    Navbar,
    Footer
  },
}
</script>
