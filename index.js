const express = require('express');

require('dotenv').config();

const app = express();

const port = 4000;

const githubData = {
    "login": "aakarshpateriya",
    "id": 118469559,
    "node_id": "U_kgDOBw-ztw",
    "avatar_url": "https://avatars.githubusercontent.com/u/118469559?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aakarshpateriya",
    "html_url": "https://github.com/aakarshpateriya",
    "followers_url": "https://api.github.com/users/aakarshpateriya/followers",
    "following_url": "https://api.github.com/users/aakarshpateriya/following{/other_user}",
    "gists_url": "https://api.github.com/users/aakarshpateriya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aakarshpateriya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aakarshpateriya/subscriptions",
    "organizations_url": "https://api.github.com/users/aakarshpateriya/orgs",
    "repos_url": "https://api.github.com/users/aakarshpateriya/repos",
    "events_url": "https://api.github.com/users/aakarshpateriya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aakarshpateriya/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Aakarsh Pateriya",
    "company": null,
    "blog": "https://0bkjc0zs-5501.inc1.devtunnels.ms/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I am a student of B Tech CSE.",
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2022-11-17T16:57:56Z",
    "updated_at": "2024-12-22T22:08:07Z"
}

app.get('/twitter', (req, res) =>{
    res.send('Hello World');
})

app.get('/login', (req, res) => {
    res.send('<h1> Hello Login Page </h1>');
})

app.get('/youtube', (req, res) =>{
    res.send('<h1> NFC </h1>');
})


app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listning on port ${port}`);
})