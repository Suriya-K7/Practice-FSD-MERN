const io = require("socket.io")(5000);

const cors = require("cors");

io.use(cors());

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;

  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      console.log(recipient);

      const newRecipients = recipients.filter((r) => r != recipient);

      console.log(newRecipients);

      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});
