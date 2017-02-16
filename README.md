# README #

### What is this repository for? ###

* An app for Weather
* Version 1.0.0

### How do I get set up? ###

```
#!bash

npm install
nodemon
```

Make a JSON file at the root of the project called apiKey.json

    { "OWMapiKey": "your-app-id-from-OWM" }


### Contribution guidelines ###

Be Nice

### Who do I talk to? ###

* Repo owner or admin

### Refactoring TODO List ###

* give OWM api some calls/(time-unit) limits.
* remove Public from repo commits
* clean npm dev and prod deps - right now set for heroku to build and serve, but without commiting an API Key this can be tricky for first deployments to the untrained dev.
* Need to setup only to commit public to heroku to clean prod deps. 💡 Perhaps a branch with some git automagical trickery would have git post-recieve push only the public to heroku.
* api Key could be a config var on Heroku???
* Remember that you know nothing John Snow
