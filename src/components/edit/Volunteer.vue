<template lang="pug">
  b-form-group(
    id="input-group-volunteer"
    label="Volunteer:"
    label-class="card-header mt-4 p-2 bg-success")
    div.m-1(v-for="(volunteer, iVolunteer) in resume.volunteer")
      b-form-input(
        v-model="volunteer.organization"
        type="text"  
        placeholder="Enter volunteer")
      b-form-input(
        v-model="volunteer.position"
        type="text"  
        placeholder="Enter position")
      b-form-input(
        v-model="volunteer.website"
        type="text"  
        placeholder="Enter website")
      b-input-group.mb-3
        b-input-group.mt-2
          b-input-group-append
            b-form-input(
              id="example-input"
              :value="formattedDate(volunteer.startDate)"
              type="text"
              placeholder="Month Year"
              autocomplete="off"
              disabled)
            b-form-datepicker(
              v-model="volunteer.startDate"
              button-only
              right
              locale="en-US"
              aria-controls="example-input")
          b-input-group-append
            b-form-input(
              id="example-input"
              :value="formattedDate(volunteer.endDate)"
              type="text"
              placeholder="Month Year"
              autocomplete="off"
              disabled)
            b-form-datepicker(
              v-model="volunteer.endDate"
              button-only
              right
              locale="en-US"
              aria-controls="example-input")
      b-form-input(
        v-model="volunteer.summary"
        type="text"  
        placeholder="Enter summary")
      b-form-group(
        id="input-group-volunteer"
        label="Highlights:"
        label-class="card-header mt-4 p-2 bg-success")
        div(
          v-for="(highlight, index) in volunteer.highlights")
          b-form-input(
            v-model="volunteer.highlights[index]"
            type="text"  
            placeholder="Enter highlight")
          .m-1
            b-button.m-1(variant="danger" @click="removeVolunteerHighlight({iVolunteer, index})") Remove Highlight
        .m-1
          b-button.m-1(variant="success" @click="addVolunteerHighlight(iVolunteer)") Add Highlight
      .m-1
        b-button.m-1(variant="danger" @click="removeVolunteer(iWork)") Remove Work
    .m-1
      b-button.m-1(variant="success" @click="addVolunteer()") Add Work
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["resume"]),
  },
  methods: {
    ...mapActions([
      "addVolunteer",
      "removeVolunteer",
      "addVolunteerHighlight",
      "removeVolunteerHighlight",
    ]),
    formattedDate(date) {
      return moment(date).format("MMMM YYYY");
    },
  }
};
</script>
