<template>
  <div class="fetch-user">
    <h3>{{ msg }}</h3>
    <button class="btn btn-fetchUser" @click="listUsersAxios">
      List Reqres Users
    </button>
  </div>
</template>

<script>
// can add axios to this to replace fetch for list and add user functions
// import axios from "axios";
import axios from "axios";

export default {
  name: "Module2",
  data() {
    return {
      msg: "fetching user data here",
    };
  },
  methods: {
    listUsers() {
      console.time("OK"); // start timer when fetch api starts
      fetch("https://reqres.in/api/users").then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
          res
            .json()
            .then((data) => console.log(data)) // printing out the data if res.ok is true (i.e successfully fetched data)
            .catch((error) => console.log(error)); // for if fetch api itself fails
        } else {
          console.log("FAILURE");
        }
      });
      console.timeEnd("OK"); // end timer when fetch api ends, regardless of success or failure (i.e. returns a 400 level status instead of 200 level status)
    },
    addUser(firstName, lastName, eMail) {
      console.time("OK"); // start timer when fetch api starts
      fetch("https://reqres.in/api/users", {
        method: "POST", // or "PUT"
        // update not required since re-posting would end up being the same as an update anyways lmao,
        // can't believe I didn't think of that clearer earlier
        headers: {
          // we need to tell fetch API we are sending JSON data, why JSON? Below there is an answer
          "Content-Type": "application/json",
        },
        body: JSON.Stringify({
          // need to stringify into JSON, need to send info in JSON form to save the data properly
          first_name: firstName,
          last_name: lastName,
          email: eMail,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      console.timeEnd("OK"); // end timer when fetch api ends, regardless of success or failure
    },

    // separating fetch methods and axios methods
    async listUsersAxios() {
      console.time("OK"); // start timer when fetch api starts

      let options = {
        headers: { Accept: "application/json" },
      };
      let url = "https://reqres.in/api/users?page=2";

      try {
        const listOfUsers = await this.$http.get(url, options); // using axios import globally
        // const listOfUsers = await axios.get(url, options); // using axios import locally
        // console.log(listOfUsers.data.data);
        console.log(listOfUsers.data.data[0].email);
      } catch (err) {
        console.log(err, err.response);
      }

      console.timeEnd("OK"); // end timer when fetch api ends, regardless of success or failure (i.e. returns a 400 level status instead of 200 level status)
    },

    async addUserAxios(firstName, lastName, eMail) {
      console.time("OK"); // start timer when fetch api starts

      let config = {
        method: "post",
        headers: { Accept: "application/json" },
        url: "https://reqres.in/api/users",
        data: {
          firstname: firstName,
          lastname: lastName,
          email: eMail,
        },
      };

      try {
        const addedUser = await axios(config); // direct
        console.log(addedUser, addedUser.data);
      } catch (err) {
        console.log(err, err.response);
      }

      console.timeEnd("OK"); // end timer when fetch api ends, regardless of success or failure
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fetch-user {
  margin: 2rem;
}
.btn {
  display: inline-block;
  padding: 0.75em 1em;
  /* border: none; */
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(101, 142, 179);
}
.btn-fetchUser {
  background-color: steelblue;
  border-radius: 8px;
  border-color: slategray;
}
</style>
