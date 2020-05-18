<template lang="pug">
  .container-flex
    .row.m-0
      .col-12.text-center
        b-button(variant="info" @click="toggleMode") Toggle Mode
    .row.m-0(v-if="!print")
      .col-4.vh-100(style="overflow-y:scroll;")
        Edit
      .col-8.vh-100(style="overflow-y:scroll;")
        Resume
    .row.m-0(v-else)
      .col
        Resume
</template>
<script>
import Edit from "./components/Edit.vue";
import Resume from "./components/Resume.vue";
export default {
  components: {
    Edit,
    Resume
  },
  data() {
    return {
      print: false,
    }
  },
  methods: {
    toggleMode(){
      this.print = !this.print
    }
  }
};
</script>