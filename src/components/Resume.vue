<template lang="pug">
  .container
    .row.mt-2(v-if="resume.basics.image.length > 0")
      .col-3
        img.rounded-circle(:src="resume.basics.image")
      .col-6
        .row.h-100.justify-content-center
          .col-12.mt-5
            h1 {{resume.basics.name}}
          .col-12
            | {{resume.basics.label}}
            br
            | {{resume.basics.location.region}}, {{resume.basics.location.countryCode}}
      .col-3
        .row.h-100.justify-content-center.p-3
          div(v-if="resume.basics.email.length > 0")
            a(:href="'mailto:'+resume.basics.email") {{resume.basics.email}}
          div(v-if="resume.basics.phone.length > 0") {{resume.basics.phone}}
          div(v-if="resume.basics.url.length > 0")
            a(:href="resume.basics.url") {{resume.basics.url}}
          div(v-for="(profile,index) in resume.basics.profiles")
            a(:href="profile.url") {{profile.network}} @ {{profile.username}}
          div {{resume.basics.location.address}}
          div {{resume.basics.location.city}}
    .row(v-else)
      .col-12
        h1 {{resume.basics.name}}
      .col-12 {{resume.basics.label}}
      .col-12
        .row
          .col-md-4 
            a(:href="'mailto:'+resume.basics.email") {{resume.basics.email}}
          .col-md-4(v-if="resume.basics.phone.length > 0") {{resume.basics.phone}}
          .col-md-4 
            a(v-if="resume.basics.url.length > 0" :href="resume.basics.url") {{resume.basics.url}}
          .col-md-4(v-for="(profile,index) in resume.basics.profiles")
            a(:href="profile.url") {{profile.network}} @ {{profile.username}}
          .col-md-4(v-if="resume.basics.location.address.length > 0") {{resume.basics.location.address}}
          .col-md-4(v-if="resume.basics.location.city.length > 0") {{resume.basics.location.city}}
          .col-md-4(v-if="resume.basics.url.length > 0") {{resume.basics.location.region}}, {{resume.basics.location.countryCode}}
    .row#summary.pt-2
      .col-md-12 {{resume.basics.summary}}
    .row#subtitle(v-if=("resume.work.length > 0"))
      .col-12.text-left#subtitle
        h5 Work Experience
      .col-12#work(v-for="(work, index) in resume.work")
        .row
          .col-md-6.text-left
            h6 {{work.company}}
          .col-md-6.text-right
            h6(v-if="work.startDate.length > 0 && work.endDate.length > 0")
              | {{formattedDate(work.startDate)}} - {{formattedDate(work.endDate)}}
            h6(v-else) {{formattedDate(work.endDate)}}
          .col-md-6.text-left {{work.position}}
          .col-md-6.text-right
            a(:href="work.website") {{work.website}}
          .col-12.text-left {{work.summary}}
          .col-12.mt-3.text-left(v-for="(highlight, index) in work.highlights")
            | {{highlight}}
    .row#subtitle(v-if=("resume.volunteer.length > 0"))
      .col-12.text-left#subtitle
        h5 Volunteer Experience
      .col-12#volunteer(v-for="(volunteer, index) in resume.volunteer")
        .row
          .col-md-6.text-left
            h6 {{volunteer.organization}}
          .col-md-6.text-right
            h6(v-if="volunteer.startDate.length > 0 && volunteer.endDate.length > 0")
              | {{formattedDate(volunteer.startDate)}} - {{formattedDate(volunteer.endDate)}}
            h6(v-else)
              | {{formattedDate(volunteer.endDate)}}
          .col-md-6.text-left {{volunteer.position}}
          .col-md-6.text-right
            a(:href="volunteer.website") {{volunteer.website}}
          .col-12.text-left {{volunteer.summary}}
          .col-6(v-for="(highlight, index) in volunteer.highlights")
            | {{highlight}}
    .row#subtitle(v-if=("resume.education.length > 0"))
      .col-12.text-left#subtitle
        h5 Education
      .col-12#education(v-for="(education, index) in resume.education")
        .row
          .col-md-6.text-left
            h6 {{education.institution}}
          .col-md-6.text-right
            h6(v-if="education.startDate.length > 0 && education.endDate.length > 0")
              | {{formattedDate(education.startDate)}} -
            h6(v-else) {{formattedDate(education.endDate)}}
          .col-md-6.text-left {{education.area}}, {{education.studyType}}
          .col-md-6.text-right {{education.gpa}}
          .col-md-4(v-for="(course, index) in education.courses")
            | {{course}}
    .row#subtitle(v-if=("resume.awards.length > 0"))
      .col-12.text-left#subtitle
        h5 Awards
      .col-md-6#awards(v-for="(award, index) in resume.awards")
        .row
          .col-md-6.text-left
            h6 {{award.title}}
          .col-md-6.text-right
            h6 {{formattedDate(award.date)}}
          .col-md-6.text-left {{award.awarder}}
          .col-md-6.text-right {{award.summary}}
    .row#subtitle(v-if=("resume.references.length > 0"))
      .col-12.text-left#subtitle
        h5 Interests
      .col-3#interests(v-for="(interest, index) in resume.interests")
        .row
          .col-md-12
            h6 {{interest.name}}
            section(v-for="(keyword, index) in interest.keywords")
              | {{keyword}}
    .row#subtitle(v-if=("resume.references.length > 0"))
      .col-12.text-left#subtitle
        h5 References
      .col-6#reference(v-for="(reference, index) in resume.references")
        .row
          .col-md-6.text-left
            h6 {{reference.name}}
            | {{reference.reference}}
    .row#subtitle(v-else)
      .col-12.text-right#subtitle
        | references aviable upon request.
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["resume"])
  },
  methods: {
    formattedDate(date) {
      return moment(date).format("MMMM YYYY");
    }
  }
};
</script>