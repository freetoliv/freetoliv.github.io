<template>
  <DefaultInfoCard
  />
  <NucleicDay />
  <br>
  <AcidTesting />
  
  <InfoCode />
</template>
<script>
import "./assets/bootstrap.min.css";
import DefaultInfoCard from "./examples/Cards/InfoCard.vue";
import NucleicDay from "./examples/Cards/NucleicDay.vue";
import AcidTesting from "./examples/Cards/AcidTesting.vue";
import InfoCode from "./examples/Cards/InfoCode.vue";

export default {
  name: "App",
  components: {
    DefaultInfoCard,
    NucleicDay,
    AcidTesting,
    InfoCode
  },
  data() {
    return {
     
    }
  }
};
</script>
