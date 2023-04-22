import express from "express";
import cors from "cors";
import { createServer } from "http";

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);
const PORT = 3000;

const users = [{ email: "admin", password: "123456" }];

app.get("/", (req, res) => {
  res.send(`<h1 style="text-align: center; color: blue">
      Wi<span style="color: blueviolet">ta</span>my
    </h1>
    <h2 style="text-align: center; color: black">Api używane do logowania!</h2>`);
});

app.get("*", (req, res) => {
  if (res.status(404)) {
    res.send(`<h1 style="text-align: center; color: blue">
      4<span style="color: blueviolet">0</span>4
    </h1>
    <h2 style="text-align: center; color: red">Page not found</h2>`);
  }
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email == email && user.password == password
  );
  if (user) {
    res.send({ status: "success", message: "Login successful" });
  } else {
    res
      .status(401)
      .send({ status: "error", message: "Invalid email or password" });
  }
});

server.listen(
  {
    port: PORT,
  },
  () => {
    console.log(`Server is running on port ${PORT}`);
  }
);
