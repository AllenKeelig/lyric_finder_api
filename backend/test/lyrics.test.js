const request = require("supertest");
const app = require("../app");

describe("GET /lyrics", () => {
  it("should return lyrics if found", async () => {
    const res = await request(app).get("/lyrics?title=Hello&artist=Adele");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("lyrics");
  });
});
