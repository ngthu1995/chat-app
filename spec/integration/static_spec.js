const request = require("request");
const base = "http://localhost:3000/";
const server = require("../../index");

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

  describe("GET /asd", () => {
    it("should return status 404 for invalid route", done => {
      request.get(`${base}asd`, (err, res, body) => {
        expect(res.statusCode).toBe(404);
        expect(err).toBeNull;
        done();
      });
    });
  });
});
