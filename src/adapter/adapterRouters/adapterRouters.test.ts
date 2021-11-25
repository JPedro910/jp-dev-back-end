/* eslint-disable @typescript-eslint/no-unused-vars */

jest.setTimeout(15000);

import request from "supertest";

import app from "../../app";

describe("Adapter routers test", () => {

	test("Should return Response with status code 200", async () => {

		const response = await request(app)
			.get("/router");

		expect(response.body.response).toBe("Response");
		expect(response.status).toBe(200);
	});

	test("Should return the body with the attribute email and the status code 200", async () => {

		const response = await request(app)
			.post("/router-email")
			.send({
				email: "email@teste.com"
			});

		expect(response.body.response).toBe("email@teste.com");
	});

	test("Should return the missing param error with the status code 400", async () => {

		const response = await request(app)
			.get("/router-error");

		expect(response.body.response).toBe("Preencha todos os campos");
		expect(response.status).toBe(400);
	});
});