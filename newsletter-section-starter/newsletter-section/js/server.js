import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/subscribe", (req, res) => {

    const email=req.body.email||"";

    if (!email) {
        return res.status(400).json({ ok: false, error: "Email field cannot be empty" });
    }
    if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ ok: false, error: "Failed to subscribe. Please enter a valid email address" });
    }

    return res.json({ ok: true });

});

app.listen(3000);