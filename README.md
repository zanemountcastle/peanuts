# Peanuts

Peanuts is an application that allows for individual honors-system based scoring.
This application was originally built and customized for the [Peanuts](https://www.pagat.com/patience/nerts.html)
card game, a family favorite. It allows each user to control only his or her
score, but allows for all users in the game to view the scores of their opponents
at any time. More than anything, however, Peanuts is a personal project I embarked
upon to familiarize myself with the Meteor ecosystem.

## Resources

- [Meteor](https://www.meteor.com/) for an application framework
- [React](https://facebook.github.io/react/) for UI rendering
- [React Router](https://github.com/reactjs/react-router) for app routing
- [Node.js](http://nodejs.org/) for a Javascript server
- [MongoDB](https://www.mongodb.com/) for a database layer

## Getting Started

To run Peanuts locally, run the following:

```
git clone https://github.com/zanemountcastle/peanuts.git
cd peanuts
meteor npm install
meteor
```

## Deploy

I prefer to deploy Peanuts to an Amazon EC2 instance rather than deploying to Galaxy because of its more generous free tier. To deploy Peanuts to an Amazon EC2 instance using Meteor Up, run the following locally:

```
npm install -g mup
cd peanuts
mkdir .deploy && cd .deploy
mup init
```

The `/peanuts/.deploy` directory will then have two files: `settings.json` and `mup.js`. Edit `mup.js` as needed. 

Below is a basic  implementation. Replace `<EC2_PUBLIC_IP>`, `<EC2_PEM_FILE>`, `<PATH_TO_APP>`, `<APPLICATION_URL>`, `<MONGODB_SERVER_URL>` with your server and application information as necessary.

```
module.exports = {
  servers: {
    one: {
      host: '<EC2_PUBLIC_IP>',
      username: 'ubuntu',
      pem: '<EC2_PEM_FILE>'
    }
  },

  app: {
    name: 'Peanuts',
    path: '<PATH_TO_APP>',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: '<APPLICATION_URL>',
      MONGO_URL: '<MONGODB_SERVER_URL>'
    },

    docker: {
      image: 'abernix/meteord:node-8.4.0-base',
      prepareBundle: false
    },

    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
```
*Note: A free MongoDB server can be obtained from [mLab](https://mlab.com/create).*

Next, run the following commands:

```
mup setup
mup deploy
```

Your Peanuts application should be live at your EC2 instance's public IP address.

## License

The MIT License

Copyright (c) 2018 Zane Mountcastle

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
