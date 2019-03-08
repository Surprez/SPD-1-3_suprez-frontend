<p align="center">
    <img src="https://i.imgur.com/LBj9G8k.png" width = "250" />
</p>

TODO: API Routes

# Suprez - Not presentations, experiences.
> ### Check out our [Backend Repo!](https://github.com/noltron000/SPD-1-3_suprez-backend)

> ### View our [Live Demo](https://suprez.netlify.com)

[![HitCount](http://hits.dwyl.io/Suprez/https://github.com/noltron000/SPD-1-3_suprez-frontend.svg)](http://hits.dwyl.io/Suprez/https://github.com/noltron000/SPD-1-3_suprez-frontend)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://shields.io/#your-badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2c3e9440-e917-4504-9d7a-a2e3f3f0ccd4/deploy-status)](https://app.netlify.com/sites/suprez/deploys)

## What is Suprez?
When it comes to great performances what characteristics come to mind? Charisma? What about stage presence? Suprez is here to help with that. Many presenters are restricted in their movements. They are tethered to the small confined area that their laptops reside in. Someone has to change slides and understand the flow of your presentation. Often times that someone is you. 

That's where Suprez comes in. By using your voice Suprez can trigger on certain words that you would already talk about. Visuals and slides are generated dynamically. For example, you can talk about the "lightbulb" moment that you had when talking about your startup and have a lightbulb pop up on screen or the "spark" that drives you.

## How it works

In the case of a non logged in user they can activate it by saying "search" followed by the word that they want to be searched.

#### Non logged in user 
Once you clone the repo and run it locally go to "Begin Your Presentation" and click start listening. From here it will listen to all of the words you say and transcribing them live. Look at your browser's console to see what is being transcribed:
<img src="https://i.imgur.com/BIopDfj.jpg">

Activate the search by saying the word "Search". This will search the next word that is said. For example, if you wanted a GIF of a banana to appear you'd say "... search banana ...". 

<img src="https://i.imgur.com/VoQudwj.png">

#### Logged in user
Define keywords that you want to be searched in the "Keywords" bar at the top. From there you'll be able to activate GIF searches 

## Endpoints
### Presentations
#### '/speak' - create ONE ride
The user can start a presentation. Simply click "Start Listening" and "Stop Listening" when you're done. For further instructions click "Instructions"

#### '/keywords' - create ONE or MANY keywords
Logged in users can create keywords that will activate the GIF search. For example, "banana" will now look for a banana GIF as soon as the word is said.
<img src="https://i.imgur.com/clqGJTA.jpg">

### Authentication 🔐
#### '/signup' - get sign-up template
User can see the sign-up template and enter their sign-up information.

#### '/signup' - create ONE user
User sign-up information is validated and processed through a POST route. Their email address, username and phone number must all be unique in order for the login to be successful. They must also choose a password.

If successful, a JWT token will be created to keep them logged in for the duration of the session. This route will redirect to the rides index.

#### '/login' - get login template
User can see the login template and enter their login credentials.

#### '/login' - post ONE user
User login credentials are validated and processed through a POST route. Their username OR email address OR phone number must exactly match the information that we have on file. Their password must also be valid.

If successful, a JWT token will be created to keep them logged in for the duration of the session. This route will redirect to the rides index.

#### '/logout' - log user out
The route will destroy the user's JWT token removing authorization to create and delete rides and interact with their communities.

The user will be routed back to the root route.

## APIs
> [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) used for speech recognition

> [Giphy API](https://developers.giphy.com/) used to return GIFs upon triggering keyword

> A node compatible version of the Web Speech API can be found here:
https://www.npmjs.com/package/react-speech-recognition

## React Options
This project is bootstrapped with react. This come with several commands that you can run in the project directory:

### `npm install`
Installs needed components for client-side development mode.

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Meet the Team:
<p align="center">
    <img src="https://i.imgur.com/tLDhiES.jpg" width = 10% style="border-radius:50%" />
</p>

### Raymond Wu - [Github](https://github.com/RaymondDashWu)
  - Role(s): Full Stack Developer, UI/UX Design
  - Technologies: HTML, CSS, React, NodeJS, MongoDB, Postman, Photoshop, Illustrator

<p align="center">
    <img src="https://i.imgur.com/amM5Snh.jpg" width = 10% style="border-radius:50%" />
</p>

### Nolan Kovacik - [Github](https://github.com/noltron000)
  - Role(s): Front End Developer, Full Stack Developer, Gitmaster
  - Technologies: HTML, CSS, React, MongoDB, NodeJS, Express

<p align="center">
    <img src="https://i.imgur.com/M0GZNxu.jpg" width = 10% style="border-radius:50%" />
</p>

### Keoni Murray - [Github](https://github.com/Keyology)
  - Role(s): Back End Developer, API Integration
  - Technologies: NodeJS, MongoDB, React, Postman, Web Speech API

<p align="center">
    <img src="https://i.imgur.com/lexUEaK.jpg" width = 10% style="border-radius:50%" />
</p>

### KJ Wilson - [Github](https://github.com/sadboykj)
  - Role(s): Back End Developer, Ideator
  - Technologies: NodeJS, Express, MongoDB

### Todos

 - Write MORE Tests
 - Object detection around speaker

License
----

MIT


**Free Software, Hell Yeah!**
