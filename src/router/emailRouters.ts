import adapterRouters from "../adapter/adapterRouters/adapterRouters";

import SendEmailController from "../useCases/Email/SendEmail/SendEmailController";

import { Router } from "express";

const router = Router();

router.post("/email", adapterRouters(SendEmailController.handle));

export default router;