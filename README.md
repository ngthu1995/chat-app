# Chat App

## Single real-time chat app allows multiple users to chat at the same time

The application uses NodeJS, Express, Socket.io while supporting custom usernames with some functions such as leave and join the chatroom.

### Completed:

Users are able to join with custom names, their messages show up in different tabs as well.

### Screenshot:

![Main site](/public/css/screenshot.JPG "Screenshot of the application")

### In progress & future:

Find a better way to organize the files. Enhance app UI.

## Getting Started

Node.js installed wih Express and Socket.io

## Technologies & Tools

- NodeJs
- Express
- HTML/CSS
- Socket.Io

## Installing

1. Clone the repo to your local machine:\
   `$ git clone https://github.com/ngthu1995/chat-app`

2. Install dependencies:\
   `$ npm install`

3. Start server:\
   `$ npm start`

4. Test the specs:\
   `$ npm test`

App now running on localhost:5000

## Running the test

Test Driven Development (TDD) is used throughout the application ultitlizing Jasmine. Tests can be performed by running `npm test` or `set NODE_ENV=test && jasmine`. If you are using Mac OS, please use `export NODE_ENV=test && jasmine` instead.

Below are two examples of tests:

```
describe("routes: static", () => {
  describe("GET /", () => {
    it("should return status code 200", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Thu's Chat App");
        done();
      });
    });
  });
```

## Deployment

The site is not yet deployed.

## Built With

NodeJS, Express, Socket.io, Jasmine

## Versioning

- Node: 10.15.0
- Socket.io: 2.2.0
- Express: 4.16.4
- Jasmine: 3.4.0

## Author

Thu Nguyen - personal website: http://thunguyen.space/

## License

This project is licensed under ThuNguyen@2019.

## Acknowledgments

A big thank to all the articles from medium and helpful guide, support from people around me.
