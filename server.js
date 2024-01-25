const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("./sessions");
const recruiters = require("./recruiters");
const applicants = require("./applicants");
const postings = require("./postings");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static("../public"));
app.use(express.json());




//sessions
// fetching the user of a particular session
app.get("/api/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  console.log("i am in get api/session");

  if (!sid || !recruiters.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  res.json({ username });
});



// login
app.post("/api/session", (req, res) => {
  const { username, userType } = req.body;
  if (!recruiters.isValid(username)) {
    res.status(400).json({ error: "required-username" });
    return;
  }

  if (username.toLowerCase() === "dog") {
    res.status(403).json({ error: "auth-insufficient" });
    return;
  }

  if (userType === "recruiter" && recruiters.isNewUser(username)) {
    res.status(402).json({ error: "new-user" });
    return;
  } else if (userType === "applicant" && applicants.isNewUser(username)) {
    res.status(402).json({ error: "new-user" });
    return;
  }

  const sid = sessions.addSession(username);

  res.cookie("sid", sid);
  res.json({ username, postings: postings.getAllPostings(), userType });
});



// register
app.put("/api/session", (req, res) => {
  const { username, userType } = req.body;
  if (!recruiters.isValid(username)) {
    res.status(400).json({ error: "required-username" });
    return;
  }

  if (username === "dog") {
    res.status(403).json({ error: "auth-insufficient" });
    return;
  }

  if (userType === "recruiter") {
    recruiters.createRecruiterData(username.toLowerCase());
  } else {
    applicants.createApplicantData(username.toLowerCase());
  }
  console.log(recruiters.getRecruiters());
  res.json({ username, userType });
});




app.delete("/api/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (sid) {
    res.clearCookie("sid");
  }

  if (username) {
    sessions.deleteSession(sid);
  }

  res.json({ username });
});




app.get("/api/posting", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

    console.log('sid',sid);
    console.log('usernmae',username);
  if (!sid || !recruiters.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  res.json({ recPostings: recruiters.getRecruiterPostings(username) });
});



app.get("/api/applications", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
  
    if (!sid || !recruiters.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    res.json({ myApplications : applicants.getApplicantsData(username) });
  });

app.get("/api/postings", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (!sid || !recruiters.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  res.json({ postings: postings.getAllPostings() });
});



app.post("/api/postings", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (!sid || !recruiters.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }

  const { posting } = req.body;

  if (!posting) {
    res.status(400).json({ error: "required-task" });
    return;
  }

  postings.addPosting({ username, posting });
  res.json({ posting: postings.getAllPostings().slice(-1)[0] });
});


app.post("/api/applications", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
  
    if (!sid || !recruiters.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
      return;
    }

    const { postingId, postedBy } = req.body;
  
    if (!postingId) {
      res.status(400).json({ error: "required-task" });
      return;
    }
    
    applicants.addMyApplication({username,postingId})
    recruiters.addApplicants({ username, postingId, postedBy})

    res.json({ myApplications: applicants.getApplicantsData(username)});
  });

  app.post("/api/withdraw", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
  
    if (!sid || !recruiters.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
      return;
    }

    const { postingId, postedBy } = req.body;
  
    if (!postingId) {
      res.status(400).json({ error: "required-task" });
      return;
    }
    
    applicants.removedMyApplication({username,postingId})
    recruiters.removeApplicants({ username, postingId, postedBy})

    res.json({ myApplications: applicants.getApplicantsData(username) , message: "Application withdrawn"});
  });


 

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
