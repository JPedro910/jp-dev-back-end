"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adapterRouters_1 = __importDefault(require("../adapter/adapterRouters/adapterRouters"));
const SendEmailController_1 = __importDefault(require("../useCases/Email/SendEmail/SendEmailController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/email", (0, adapterRouters_1.default)(SendEmailController_1.default.handle));
exports.default = router;
