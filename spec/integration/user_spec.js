const request = require("request");
const server = require("../../index");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

describe("socket", () => {
  beforeEach(done => {
    io.on("connection", function(socket) {
      socket.on("user_join", function(data) {
        this.username = "123";
        socket.broadcast.emit("user_join", "123");
        done();
      });

      socket.on("chat_message", function(data) {
        data.username = this.username;
        data = "123";
        socket.broadcast.emit("chat_message", data);
        done();
      });

      socket.on("disconnect", function(data) {
        socket.broadcast.emit("user_leave", this.username);
        done();
      });
    });
    done();
  });
  it("should communicate and make user appear with their chosen name", done => {
    io.emit("user_join", "123");
    done();
  });

  it("should associate chat message with user name", done => {
    io.emit("chat_message", "123");
    done();
  });

  it("should appear user name that left the chat", done => {
    io.emit("user_leave", "123");
    done();
  });
});
