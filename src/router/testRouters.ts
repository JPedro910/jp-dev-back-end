/* eslint-disable @typescript-eslint/no-unused-vars */

import { MissingParamError } from "../utils/errors";

import IRequestRouters from "../adapter/interfaces/IRequestRouters";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import { ok } from "../adapter/adapterResponses/adapterResponses";

import { Router } from "express";

const router = Router();

router.get("/router", adapterRouters((request: IRequestRouters) => {
	return ok("Response");
}));	

router.post("/router-email", adapterRouters((request: IRequestRouters) => {
	const { email } = request.body;
	return ok(email);
}));	

router.get("/router-error", adapterRouters((request: IRequestRouters) => {
	return ok(new MissingParamError("Preencha todos os campos"));
}));	


export default router;