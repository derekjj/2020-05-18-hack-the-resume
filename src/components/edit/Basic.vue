<template lang="pug">
  b-form-group(
    id="input-group-basics"
    label="Basics:"
    label-class="card-header mt-4 p-2 bg-success")
    b-form-input(
      v-model="resume.basics.name"
      type="text"
      placeholder="Enter full name")
    b-form-input(
      v-model="resume.basics.label"
      type="text"
      placeholder="Enter label")
    b-form-input(
      v-model="resume.basics.image"
      type="url"
      placeholder="Url of picture")
    b-form-input(
      v-model="resume.basics.email"
      type="email"
      placeholder="Enter email")
    b-form-input(
      v-model="resume.basics.phone"
      type="text"
      placeholder="Enter phone number")
    b-form-input(
      v-model="resume.basics.url"
      type="url"
      placeholder="Url of website")
    b-form-textarea(
      v-model="resume.basics.summary"
      placeholder="Enter summary..."
      rows="3")
    b-form-group(
      id="input-group-location"
      label="Location:"
      label-class="card-header mt-4 p-2 bg-success")
      b-form-input(
        v-model="resume.basics.location.address"
        type="text"
        placeholder="Enter address")
      b-form-input(
        v-model="resume.basics.location.postalCode"
        type="text"
        placeholder="Enter postal code")
      b-form-input(
        v-model="resume.basics.location.city"
        type="text"
        placeholder="Enter city")
      b-form-input(
        v-model="resume.basics.location.countryCode"
        type="text"
        placeholder="Enter countryCode")
      b-form-input(
        v-model="resume.basics.location.region"
        type="text"
        placeholder="Enter region")
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["resume"]),
  },
};
</script>
