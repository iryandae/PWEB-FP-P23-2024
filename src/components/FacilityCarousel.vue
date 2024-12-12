<template>
  <div class="facility-carousel">
    <div v-if="facilities.length" class="carousel flex overflow-x-auto snap-x snap-mandatory">
      <div v-for="(facility, index) in facilities" :key="index" class="carousel-item flex-none w-full snap-start relative">
        <img :src="facility.image" :alt="facility.name" class="w-full h-auto" />
        <div class="carousel-caption absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2">
          <h3 class="text-lg font-bold">{{ facility.name }}</h3>
          <p class="text-sm">{{ facility.description }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>No facilities available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacilityCarousel',
  data() {
    return {
      facilities: [
        {
          name: 'Swimming Pool',
          description: 'A large swimming pool with clean water.',
          image: ''
        },
        {
          name: 'Gym',
          description: 'A well-equipped gym with modern machines.',
          image: ''
        },
        // Add more facilities as needed
      ]
    };
  }
};
</script>

<style scoped>
.facility-carousel {
  width: 100%;
  overflow: hidden;
}
</style>
