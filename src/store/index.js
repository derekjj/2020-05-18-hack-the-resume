import Vuex from "vuex";
import Vue from "vue";

import savedResume from "../assets/resume.json";
Vue.use(Vuex);

const store = new Vuex.Store({
  //TODO: turn on and fix errors
  // strict: true,
  state: () => ({
    resume: savedResume,
  }),
  getters: {
    resume: (state) => state.resume,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    setResume(state, payload) {
      state.resume = payload;
    },
    addProfile(state) {
      state.resume.basics.profiles.push({ network: "", username: "", url: "" });
    },
    removeProfile(state, index) {
      state.resume.basics.profiles.splice(index, 1);
    },
    addWork(state) {
      state.resume.work.push({
        company: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [],
      });
    },
    removeWork(state, index) {
      state.resume.work.splice(index, 1);
    },
    addWorkHighlight(state, index) {
      state.resume.work[index].highlights.push("");
    },
    removeWorkHighlight(state, { iWork, iHighlights }) {
      state.resume.work[iWork].highlights.splice(iHighlights, 1);
    },
    addVolunteerHighlight(state, index) {
      state.resume.volunteer[index].highlights.push("");
    },
    removeVolunteerHighlight(state, { iVolunteer, iVolunteerHighlight }) {
      state.resume.volunteer[iVolunteer].highlights.splice(
        iVolunteerHighlight,
        1
      );
    },
    addEducation(state) {
      state.resume.education.push({
        institution: "",
        area: "",
        studyType: "",
        startDate: "",
        endDate: "",
        gpa: "",
        courses: [],
      });
    },
    removeEducation(state, index) {
      state.resume.education.splice(index, 1);
    },
    addEducationCourse(state, index) {
      state.resume.education[index].courses.push("");
    },
    removeEducationCourse(state, { iEducation, iEducationCourse }) {
      state.resume.education[iEducation].courses.splice(iEducationCourse, 1);
    },
  },
  actions: {
    setResume(context, payload) {
      context.commit("setResume", payload);
    },
    edit(context, payload) {
      context.commit("edit", payload);
    },
    addProfile(context) {
      context.commit("addProfile");
    },
    removeProfile(context, index) {
      context.commit("removeProfile", index);
    },
    addWork(context) {
      context.commit("addWork");
    },
    removeWork(context, index) {
      context.commit("removeWork", index);
    },
    addWorkHighlight(context, index) {
      context.commit("addWorkHighlight", index);
    },
    removeWorkHighlight(context, { iWork, iWorkHighlight }) {
      context.commit("removeWorkHighlight", { iWork, iWorkHighlight });
    },
    addVolunteerHighlight(context, index) {
      context.commit("addVolunteerHighlight", index);
    },
    removeVolunteerHighlight(context, { iVolunteer, iVolunteerHighlight }) {
      context.commit("removeVolunteerHighlight", {
        iVolunteer,
        iVolunteerHighlight,
      });
    },
    addEducation(context) {
      context.commit("addEducation");
    },
    removeEducation(context, index) {
      context.commit("removeEducation", index);
    },
    addEducationCourse(context, index) {
      context.commit("addEducationCourse", index);
    },
    removeEducationCourse(context, index) {
      context.commit("removeEducationCourse", index);
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
