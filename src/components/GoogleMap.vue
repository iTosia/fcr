<template>
  <div class="google-map">
    <GMapMap
        :center="center"
        :zoom="16"
        map-type-id="terrain"
        :style="style"
    >
      <GMapMarker
          :key="index"
          v-for="(marker, index) in markers"
          :position="marker.position"
          :clickable="true"
          :draggable="true"
      />
    </GMapMap>
  </div>
</template>

<script setup>
import { reactive, ref} from 'vue'

const style = reactive({
  border: `0px`,
})

const center = ref({ lat: 50.449385, lng: 30.497803 })
const markers = ref([
  {
    position: {
      lat: 50.449385, lng: 30.497803
    },
  }
])
</script>