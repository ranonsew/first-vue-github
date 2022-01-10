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
  setup() {
    const msg = "fetching user data here";

    const listUsers = () => {
      console.time("OK");
      fetch("https://reqres.in/api/users").then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
          res
            .json()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        } else console.log("FAILURE");
      });
      console.timeEnd("OK");
    };

    const addUser = (firstName, lastName, eMail) => {
      console.time("OK");
      fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.Stringify({
          first_name: firstName,
          last_name: lastName,
          email: eMail,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    const listUsersAxios = async () => {
      console.time("OK");
      let options = { headers: { Accept: "application/json" } };
      let url = "https://reqres.in/api/users?page=2";
      try {
        const listOfUsers = await axios.get(url, options);
        console.log(listOfUsers.data.data[0].email);
      } catch (err) {
        console.log(err, err.response);
      }
      console.timeEnd("OK");
    };

    const addUserAxios = async (firstName, lastName, eMail) => {
      console.time("OK");
      let config = {
        method: "POST",
        headers: { Accept: "application/json" },
        url: "https://reqres.in/api/users",
        data: { firstName, lastName, eMail },
      };
      try {
        const addedUser = await axios(config);
        console.log(addedUser, addedUser.data);
      } catch (err) {
        console.log(err, err.response.body);
      }
      console.timeEnd("OK");
    };

    return { msg, listUsers, addUser, listUsersAxios, addUserAxios };
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
