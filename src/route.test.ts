import request from "supertest";
import routes from "./routes";

describe("GET / - a simple api endpoint", () => {
    it("GET API Request", async () => {
        const result = await request(routes).get("/");
        expect(result.text).toEqual("GET Express + TypeScript Server is running");
        expect(result.statusCode).toEqual(200);
    });

    it("POST API Request", async () => {
        const result = await request(routes).post("/");
        expect(result.text).toEqual("POST Express + TypeScript Server is running");
        expect(result.statusCode).toEqual(200);
    });

    it("PUT API Request", async () => {
        const result = await request(routes).put("/");
        expect(result.text).toEqual("PUT Express + TypeScript Server is running");
        expect(result.statusCode).toEqual(200);
    });

    it("PATCH API Request", async () => {
        const result = await request(routes).patch("/");
        expect(result.text).toEqual("PATCH Express + TypeScript Server is running");
        expect(result.statusCode).toEqual(200);
    });

    it("DELETE API Request", async () => {
        const result = await request(routes).delete("/");
        expect(result.text).toEqual("DELETE Express + TypeScript Server is running");
        expect(result.statusCode).toEqual(200);
    });
});
