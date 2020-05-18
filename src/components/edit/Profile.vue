<template lang="pug">
  b-form-group(
    id="input-group-profiles"
    label="Profiles:"
    label-class="card-header mt-4 p-2 bg-success")
    div.m-1(
      v-for="(profile, index) in resume.basics.profiles"
      :key="profile.url")
      b-form-input(
        v-model="profile.network"
        type="text"  
        placeholder="Enter network")
      b-form-input(
        v-model="profile.username"
        type="text"  
        placeholder="Enter username")
      b-form-input(
        v-model="profile.url"
        type="text"  
        placeholder="Enter url")
      .m-1
        b-button.m-1(variant="danger" @click="removeProfile(index)") Remove Profile
    .m-1
      b-button.m-1(variant="success" @click="addProfile") Add Profile
</template>
<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

export default {
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