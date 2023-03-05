# 🏒 Hockey Stats Extravaganza! 📊

## Description

Welcome to the ultimate stat tracker for hockey enthusiasts! Get ready to dive into the exhilarating world of NHL players and teams, and keep tabs on their mind-blowing stats like never before. Brace yourself for an unforgettable journey into the heart of the game!

⚠️ Note: To unlock the full potential of our stat tracker, make sure to sign in with your Google account. Don't miss out on the exclusive features available only to registered users! You'll gain the ability to add teams, players, and even edit player profiles. Strap in and get ready to experience hockey stats like a pro!

 ## Technologies that Power the Madness 🚀
Prepare yourself for an incredible blend of cutting-edge technologies that make this stat tracker a force to be reckoned with:

-HTML: The foundation upon which our web pages come to life.
-CSS: Styling magic that creates an immersive and visually stunning experience.
-JavaScript: The powerhouse behind the interactivity and dynamic features.
-EJS: A templating engine that brings unparalleled flexibility and simplicity to our project.
-Node: The mighty backend technology that powers our stat tracker with robust functionality.
-MongoDB: A state-of-the-art database management system that securely stores all your precious stats.
-Express: The backbone of our server, providing seamless communication between front and back ends.
-OAuth: Your passport to a personalized and secure profile experience.
-Trello: Our trusty companion for project management, ensuring smooth progress every step of the way.
-Figma: The creative genius behind our breathtaking ERD (Entity Relationship Diagram) and wireframes.

## Behold, the Visual Spectacle! 📸

Prepare to be dazzled by a glimpse into the glorious world of my stat tracker. Feast your eyes upon these stunning screenshots:

![sc1](public/pictures/sc1.png)

![sc2](public/pictures/sc2.png)

 ## Blueprint of Brilliance 📝

Discover the masterful artistry that went into crafting our stat tracker with these remarkable wireframes:

![wireframe1](public/pictures/wireframe1.png)

![wireframe2](public/pictures/wireframe2.png)

![wireframe3](public/pictures/wireframe3.png)

![wireframe4](public/pictures/wireframe4.png)

## The Inner Workings Unveiled 🔍

Behold, the magnificent Entity Relationship Diagram (ERD) that reveals the intricate connections behind our stat tracker's architecture:

![erd](public/pictures/erd.png)

## The Journey Begins! 🚀

To keep our development journey on track, we rely on the trusty assistance of Trello. Join us as we embark on this epic adventure by following our Trello board:

[Trello Project Management](https://trello.com/b/oZkWDkc9/project-management)

## Future Updates on the Horizon 🌅

My mission to deliver the ultimate hockey stats experience doesn't end here! Stay tuned for these thrilling future updates:

- Profile Page: Unleash your passion for the game by showcasing your favorite teams and players on your personalized profile page.
- API Integration: Tap into the vast resources of hockey data available through APIs, opening up a world of endless possibilities for exploring and analyzing stats like never before.
- Get ready to be captivated by the exhilarating world of hockey stats like never before! Join us on this extraordinary journey and let the games begin! 🏒⛸️

## Pseudocode

teamSchema {
   //maybe (logo: Picture?)
    name: String,
    city: String
    arena: String,
    year: Date
    cups: Number,
    gamesplayed: Number,
    wins: Number,
    loss: Number,
    players: [{type: Schema.Types.ObjectID, ref: 'Player'}]
}

playerSchema: {
//maybe (playerPic: Picture)
name: String,
jerseyNo: Number,
position: String,
team: [{type: Schema.Types.ObjectID, ref: 'Team'}]
birthplace: String,
birthday: Date,
height: String,
weight: String,
cupsWon: Number,
gamesPlayed: Number,
points: Number,
goals: Number,
assists: Number,
shots: Number,
pim: Number,
plusMinus: Number
}

userSchema: {
    name: String,
    email: String,
    favoritePlayers: [{type: Schema.Types.ObjectID, ref: 'Player'}]
    favoriteTeams: [{type: Schema.Types.ObjectID, ref: 'Team'}]
}

### controllers

module.exports = {
    create,
    index,
    new: newTeam (new: newPlayer),
    edit,
    delete,
    show
}