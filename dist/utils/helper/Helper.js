"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
class Helper {
    static getEmailEnvironmentVariable() {
        return process.env.EMAIL;
    }
    static getMyEmailEnvironmentVariable() {
        return process.env.MY_EMAIL;
    }
    static getEmailPasswordEnvironmentVariable() {
        return process.env.EMAIL_PASSWORD;
    }
    static getAppUrlEnvironmentVariable() {
        return process.env.APP_URL;
    }
}
exports.default = Helper;
