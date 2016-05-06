# raziloBind - Examples - Todo App

A basic todo app from the raziloBind website

## What does this do?

Doesn't do a great deal, but it shows you how to set out a projxt, how to use loops, and also helps you to get to grips with phantom properties.

## What Next?

So you have downloaded it, I would recommend running with docker, it's the bees knees, no really, once you go docker you will never go back! The docker file is there for you if oyu want to do this, it has the express server app here too to allow you to spawn it onto port 8080 of localhost.

You will need node, npm, grunt (global) to run this, you can do it via docker, it's nice and simple. Install docker, docker-compose (if you wish) and spawn a new container from the Dockerfile.

Once you have downloaded this, you will need to ensure all deps are loaded and then build your distributable. From the root dir...

```
npm install
```

If you do not have grunt installed locally...

```
npm install -g grunt
```

Then build and start express web server

```
grunt build
node ./server.js
```
