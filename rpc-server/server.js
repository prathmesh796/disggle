"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var discord_rich_presence_1 = require("discord-rich-presence");
var dotenv = require("dotenv");
dotenv.config();
var DISCORD_CLIENT_ID = process.env.DISCORD_APP_CLIENT_ID;
if (!DISCORD_CLIENT_ID) {
    console.error("Please set DISCORD_CLIENT_ID in server.js (from Discord Developer Portal).");
    process.exit(1);
}
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var client = (0, discord_rich_presence_1.default)(DISCORD_CLIENT_ID);
var lastActivity = null;
function makePresencePayload(activity) {
    // Map activity types to presence fields
    var base = {
        details: activity.title,
        state: "On Kaggle (".concat(activity.type, ")"),
        startTimestamp: activity.startedAt || Date.now(),
        largeImageKey: "kaggle_logo", // you must upload this asset in your Discord App
        largeImageText: "Kaggle",
        smallImageKey: "coding", // optional - use an uploaded asset or remove
        smallImageText: "Working",
    };
    // adjust details based on type
    if (activity.type === "notebook") {
        base.details = "Working on: ".concat(activity.title);
        base.state = "Editing notebook";
    }
    else if (activity.type === "dataset") {
        base.details = "Viewing dataset: ".concat(activity.title);
        base.state = "Browsing dataset";
    }
    else if (activity.type === "competition") {
        base.details = "Checking competition: ".concat(activity.title);
        base.state = "Competition page";
    }
    else if (activity.type === "profile") {
        base.details = "Viewing profile: ".concat(activity.title);
        base.state = "Profile";
    }
    return base;
}
app.post("/activity", function (req, res) {
    var body = req.body;
    if (!body || typeof body !== "object") {
        return res.status(400).send({ error: "Invalid payload" });
    }
    lastActivity = body;
    var payload = makePresencePayload(body);
    try {
        client.updatePresence(payload);
        console.log("Updated presence:", payload.details, payload.state);
        res.send({ ok: true });
    }
    catch (err) {
        console.error("RPC update error:", err);
        res.status(500).send({ error: "Failed to update presence" });
    }
});
// Optional: clear presence endpoint
app.post("/clear", function (req, res) {
    try {
        client.disconnect();
        console.log("Cleared presence (disconnected).");
        res.send({ ok: true });
    }
    catch (err) {
        res.status(500).send({ error: "Failed to clear presence" });
    }
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Kaggle RPC bridge running on http://localhost:".concat(PORT));
});
