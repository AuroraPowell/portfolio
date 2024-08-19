import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "password",
  database: "eventDB",
});

app.get("/events", (req, res) => {
  const q = "SELECT * FROM events";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// implement react-auth-kit
app.post("/login", async (req, res) => {
  // const { email, password } = req.body;
  // const userWithEmail = await User.findOne({ where: { email } }).catch(
  //   (err) => {
  //     console.log("Error:");
  //   }
  // );
});

app.post("/events/:id", (req, res) => {
  // always active
  const eventQ = "INSERT INTO events ( id, name, date, desc, loc ) VALUES (?)";

  // will only update if it detects new user
  const userQ =
    "INSERT INTO eventUsers ( userId, userName, userAlias ) VALUES (?)";

  // // will add posting user to RSVP eventually
  const rsvpQ = "INSERT INTO eventRSVP ( eventId, userId ) VALUES (?)";

  const values =
    (req.body.id, req.body.name, req.body.date, req.body.desc, req.body.loc);

  const userValues = (req.body.userId, req.body.userName, req.body.userAlias);

  const rsvpValues = (req.body.eventId, req.body.userId);

  // inserting into events
  db.query(eventQ, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });

  // inserting into eventUsers
  db.query(userQ, [userValues], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });

  // inserting into eventRSVP
  // this needs to pull from the authentication
  db.query(rsvpQ, [rsvpValues], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("Connected to backend");
});
