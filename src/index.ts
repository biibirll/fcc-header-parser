import express from "express";
import cors from "cors";

const port = 3000;

const app = express();
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  const ipaddress = req.socket.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({ ipaddress, language, software });
});

const listener = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
