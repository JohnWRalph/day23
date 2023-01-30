import express from "express";
import Message from "./message";
import User from "./user";


const users: User[] = [];
const messages: Message[] = [];
let messagesByUser: Message[] =[];

var userIDIncrement: number = 0;
var messageIDIncrement: number = 0;

const app = express()
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})


// creates new user
app.post("/user", function (req, res) {
  const user: User = {
    userID: userIDIncrement,
    name: req.body.name,
    isAdmin: req.body.isAdmin,
    roles: req.body.roles,
    createdAt: new Date()
  }
  userIDIncrement = userIDIncrement + 1;
  users.push(user)
  res.send(user)
})


//creates a new message
app.post("/message", function (req, res) {
  const message: Message = {
    messageID: messageIDIncrement,
    message: req.body.message,
    user: req.body.user,
    keks: req.body.keks,
    isEditted: false,
  }
  messageIDIncrement = messageIDIncrement + 1;
  messages.push(message)
  res.send(message)
})

// gets user from input
app.get("/user/:name", function (req, res) {
  //find user by name
  const user = users.find((u) => u.name === req.params.name);
  if (user) {
    res.send(user);
  } else {
    res.send({});
  }
 
})


 //find user by name, if user exists search all messages for user, return message if message user
app.get("/message/:name", function (req, res) {
  const user = users.find((u) => u.name === req.params.name);
  messagesByUser=[];
  if (user) {
    messages.forEach(m => {
      if (m.user === req.params.name) {
        messagesByUser.push(m)
      }
    })
    res.send(messagesByUser)
    // res.send(messages);
  } else {
    res.send({});
  }
})

//get the number inputted in the search bar, find the message by index, then replace the message text with a new message and set message as editted
app.put("/message/:messageID",function(req,res) {
  const index:number = parseInt(req.params.messageID)
  const oldMessage = messages[index]
  messages[index].message = req.body.newMessage
  messages[index].isEditted = true;
  res.send(messages)
})

app.listen(3002);