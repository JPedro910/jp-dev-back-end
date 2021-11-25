jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

describe(("Send email"), () => {

	test("Should not send the email, because the email field is empty", async () => {
		const response = await request(app)
			.post("/email")
			.send({
				email: "",
				name: "João Pedro",
				message: "Olá"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not send the email, because the name field is empty", async () => {
		const response = await request(app)
			.post("/email")
			.send({
				email: "joao@teste.com",
				name: "",
				message: "Olá"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not send the email, because the message field is empty", async () => {
		const response = await request(app)
			.post("/email")
			.send({
				email: "joao@teste.com",
				name: "João Pedro",
				message: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not send the email, because the all fields are empty", async () => {
		const response = await request(app)
			.post("/email")
			.send({
				email: "",
				name: "",
				message: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should send the email", async () => {
		const response = await request(app)
			.post("/email")
			.send({
				email: "joao@teste.com",
				name: "João Pedro",
				message: "Olá"
			});

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Mensagem enviada com sucesso");
	});
});