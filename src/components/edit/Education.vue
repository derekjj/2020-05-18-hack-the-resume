<template lang="pug">
div
  div.m-1(v-for="(education, iEducation) in resume.education")
    b-form-input(
      v-model="education.institution"
      type="text"  
      placeholder="Enter institution")
    b-form-input(
      v-model="education.area"
      type="text"  
      placeholder="Enter area")
    b-form-input(
      v-model="education.studyType"
      type="text"  
      placeholder="Enter study type")
    b-input-group.mb-3
      b-input-group.mt-2
        b-input-group-append
          b-form-input(
            v-if="education.startDate.length > 0"
            id="example-input"
            :value="formattedDate(education.startDate)"
            type="text"
            placeholder="Month Year"
            autocomplete="off"
            disabled)
          b-form-input(
            id="example-input"
            :value="education.startDate.length > 0 ? formattedDate(education.startDate) : null"
            type="text"
            placeholder="Month Year"
            autocomplete="off"
            disabled)
          b-form-datepicker(
            v-model="education.startDate"
            button-only
            right
            locale="en-US"
            aria-controls="example-input")
        b-input-group-append
          b-form-input(
            id="example-input"
            :value="formattedDate(education.endDate)"
            type="text"
            placeholder="Month Year"
            autocomplete="off"
            disabled)
          b-form-datepicker(
            v-model="education.endDate"
            button-only
            right
            locale="en-US"
            aria-controls="example-input")
    b-form-input(
      v-model="education.gpa"
      type="text"  
      placeholder="Enter gpa")
    b-form-group(
      id="input-group-education"
      label="Courses:"
      label-class="card-header mt-4 p-2 bg-success")
      div(
        v-for="(course, index) in education.courses")
        b-form-input(
          v-model="education.courses[index]"
          type="text"  
          placeholder="Enter course")
        .m-1
          b-button.m-1(variant="danger" @click="removeEducationCourse({iEducation, index})") Remove Course
      .m-1
        b-button.m-1(variant="success" @click="addEducationCourse(iEducation)") Add Course
    .m-1
      b-button.m-1(variant="danger" @click="removeEducation(iEducation)") Remove Education
  .m-1
    b-button.m-1(variant="success" @click="addEducation") Add Education
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
      "addEducation",
      "removeEducation",
      "addEducationCourse",
      "removeEducationCourse"
    ]),
    formattedDate(date) {
      return moment(date).format("MMMM YYYY");
    },
    onReset() {}
  }
};
</script>