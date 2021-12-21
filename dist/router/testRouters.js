"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
const adapterRouters_1 = __importDefault(require("../adapter/adapterRouters/adapterRouters"));
const adapterResponses_1 = require("../adapter/adapterResponses/adapterResponses");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/router", (0, adapterRouters_1.default)((request) => {
    return (0, adapterResponses_1.ok)("Response");
}));
router.post("/router-email", (0, adapterRouters_1.default)((request) => {
    const { email } = request.body;
    return (0, adapterResponses_1.ok)(email);
}));
router.get("/router-error", (0, adapterRouters_1.default)((request) => {
    return (0, adapterResponses_1.ok)(new errors_1.MissingParamError("Preencha todos os campos"));
}));
exports.default = router;
