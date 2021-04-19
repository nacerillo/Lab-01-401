"use strict";

const supertest = require("supertest");
const server = require("../server.js");
const request = supertest(server.app); //supertest takes in our server application which includes our routes,midd
describe("SERVER TESTS: ", () => {
  // 'it' is an individual test
  it("should handle unfound routes - 404", async () => {
    //expect -> this is an assertion, as part of a test
    const response = await request.get("./not-there");
    expect(response.status).toEqual(404);

    //test the output of your routes
    //test the shape of your data
    //test status code of your response
  });

  it("should send proper resonse on a successful route", async () => {
    const response = await request.get("/data");
    expect(response.status).toEqual(200);
    expect(response.body.timestamp).toBe("string");
  });
});
