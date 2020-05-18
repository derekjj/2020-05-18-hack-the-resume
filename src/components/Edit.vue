<template lang="pug">
  div
    b-form
      Basic
      Profile
      Work
      Volunteer
      Education
</template>
<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

import Basic from "./edit/Basic.vue";
import Profile from "./edit/Profile.vue";
import Work from "./edit/Work.vue";
import Volunteer from "./edit/Volunteer.vue";
import Education from "./edit/Education.vue";
export default {
  components: { Basic, Profile , Work, Volunteer, Education },
  computed: {
    ...mapGetters(["resume"]),
  },
  methods: {
    ...mapActions(["addProfile", "removeProfile"]),
    formattedDate(date) {
      return moment(date).format("MMMM YYYY");
    },
  }
};
</script>
