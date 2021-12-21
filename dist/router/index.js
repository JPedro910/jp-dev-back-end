"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testRouters_1 = __importDefault(require("./testRouters"));
const emailRouters_1 = __importDefault(require("./emailRouters"));
const router = (0, express_1.Router)();
router.use(testRouters_1.default);
router.use(emailRouters_1.default);
exports.default = router;
