<template lang="pug">  
  b-form-group(
    id="input-group-work"
    label="Work:"
    label-class="card-header mt-4 p-2 bg-success")
    div.m-1(v-for="(work, iWork) in resume.work")
      b-form-input(
        v-model="work.company"
        type="text"  
        placeholder="Enter company")
      b-form-input(
        v-model="work.position"
        type="text"  
        placeholder="Enter position")
      b-form-input(
        v-model="work.website"
        type="text"  
        placeholder="Enter website")
      b-input-group.mb-3
        b-input-group.mt-2
          b-input-group-append
            b-form-input(
              id="example-input"
              :value="formattedDate(work.startDate)"
              type="text"
              placeholder="Month Year"
              autocomplete="off"
              disabled)
            b-form-datepicker(
              v-model="work.startDate"
              button-only
              right
              locale="en-US"
              aria-controls="example-input")
          b-input-group-append
            b-form-input(
              id="example-input"
              :value="formattedDate(work.endDate)"
              type="text"
              placeholder="Month Year"
              autocomplete="off"
              disabled)
            b-form-datepicker(
              v-model="work.endDate"
              button-only
              right
              locale="en-US"
              aria-controls="example-input")
      b-form-input(
        v-model="work.summary"
        type="text"  
        placeholder="Enter summary")
      b-form-group(
        id="input-group-work"
        label="Highlights:"
        label-class="card-header mt-4 p-2 bg-success")
        div(
          v-for="(highlight, index) in work.highlights")
          b-form-input(
            v-model="work.highlights[index]"
            type="text"  
            placeholder="Enter highlight")
          .m-1
            b-button.m-1(variant="danger" @click="removeWorkHighlight({iWork, index})") Remove Highlight
        .m-1
          b-button.m-1(variant="success" @click="addWorkHighlight(iWork)") Add Highlight
      .m-1
        b-button.m-1(variant="danger" @click="removeWork(iWork)") Remove Work
    .m-1
      b-button.m-1(variant="success" @click="addWork") Add work
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
      "addWork",
      "removeWork",
      "addWorkHighlight",
      "removeWorkHighlight"
    ]),
    formattedDate(date) {
      return moment(date).format("MMMM YYYY");
    },
  }
};
</script>