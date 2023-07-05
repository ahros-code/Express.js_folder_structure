import {readFile, writeFile} from "../utils/fs.helper.js";

const users = readFile("users.json");
export default {
  getAllUsers : (req, res) => {
    try {
      res.send(readFile("users.json"));
    } catch (err) {
      return `Error while reading a file: ${res.message}`
    }
  },
  getSingleUser : (req, res) => {
    let {id} = req.params;
    const user = users.find(u => u.id === +id);
    res.send(user);
  },
  addUser : (req, res) => {
    try {
      const data = readFile("users.json");
      const {name, age} = req.body;
      if (name && age) {
        data.push({id: data.at(-1)?.id + 1 || 1, name, age})
      } else {
        res.status(400)
        res.send({
          "error": "Fill all rows"
        });
        return;
      }
      writeFile("users.json", data);
      res.send(`User ${name} added successfully!`)
    } catch (err) {
      res.send(err.message);
    }
  },
  updateUser : (req, res) => {
    try {
      let {id} = req.params;
      let {name, age} = req.body;
      const user = users.find(u => u.id === +id);
      name ? user.name = name : user.name;
      age ? user.age = age : user.age;
      writeFile("users.json", users);
      res.send(`User updated successfully`)
    } catch (err) {
      res.status(400);
      res.send({"error": err.message})
      return;
    }
  },
  deleteUser : (req, res) => {
    try {
      let {id} = req.params;
      const newUsers = users.filter(u => u.id !== +id);
      writeFile("users.json", newUsers);
      res.send("User deleted successfully!");
      return;
    } catch (err) {
      res.status(400);
      res.send({"error": err.message})
      return;
    }
  }
}