import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  }, // main data store
  mutations: {
    increment(state) {
      // like setup passing props, pass state to use
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  }, // syncronous mutations using .commit
  actions: {
    async incrementing() {
      try {
        let x = await axios.get("https://reqres.in/api/users/2");
        console.log(x);
      } catch (err) {
        console.log(err);
      }
    },
    async decrementing({ commit }) {
      // can pass in the commit methods from mutations
      try {
        let user5 = await axios.get("https://reqres.in/api/users/5");
        console.log(user5);
        commit("decrement");
      } catch (err) {
        console.log(err);
      }
    },
  }, // asynchronous actions using .dispatch
  getters: {
    // akin to computed properties
    // returns the square of the current count to display
    counterSquared(state) {
      // pass state through
      return state.counter ** 2;
    },
  }, // retrieving data from the state, change/filter data in some way that we can't when directly getting data from store (like before it is available to components)
  // like if we want to grab square of counter, and make available everywhere, use a getter
  modules: {}, // break up store into multiple mod, each has own state/mutation/action/getter, like a second pg with diff functionality
});
