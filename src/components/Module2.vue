<template>
  <div class="fetch-user">
    <h3>{{ msg }}</h3>
    <button class="btn btn-fetchUser" @click="listUsers">
      List Reqres Users
    </button>
  </div>
</template>

<script>
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
  },
  // computed: {
  //   // insert computed values here, plan to use reqres.in, okie nvm doesn't work, use method instead, thx
  //   listUsers() {
  //     fetch("https://reqres.in/api/users").then(res => res.json()).then(data => console.log(data));
  //     return null;
  //   },
  // },
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
