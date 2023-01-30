1) We want to install express with "npm install express --save", 
and tehn the Typescript types for it with "npm i -D typescript @types/express @types/node"

then `npx tsc --init"

HOMEWORK:
1) Create a new express server that has a route for creating Discord users, and a route for getting Discord user's by name.
The discord user should have a name, isAdmin, roles, and createdAt where createdAt is the current timestamp when the user is created. The user should be stored into a users array.

The .get route should look in that user array for the provided name.

2) Do the same for discord messages, and a route to edit discord message texts. 
So, a post route to create a discord message, and you pass in data to it like: {message: "hello", user: "Horseman", keks: 0}. Then create a new discord message, push it to a messages array, and return it with res.send. give each discord message a unique ID as well, it can just be a number, incrementing from 0.

Then, a route to get discord messages by username. Pass in a username, and look through the messages array to find all messages from that user and  return them.

Then, a new ".put" route (different from get or post, put is for editing existing records). It should accept an ID of a message in the route name, "/message/:I'd The route should find the message by ID in the messages array, and update the text to the new text. It should accept data like {newMessage: "newMessage here"} 