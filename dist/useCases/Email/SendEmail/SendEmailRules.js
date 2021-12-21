"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = __importDefault(require("../../../provider/Mail/Mail"));
const Helper_1 = __importDefault(require("../../../utils/helper/Helper"));
const errors_1 = require("../../../utils/errors");
class SendEmailRules {
    constructor() {
        this.mail = new Mail_1.default();
    }
    execute({ name, email, message }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !message)
                return new errors_1.MissingParamError("Preencha todos os campos");
            yield this.mail.sendMail(Helper_1.default.getMyEmailEnvironmentVariable(), "Contato", "mainEmailBody", {
                name: name,
                email: email,
                message: message
            });
            return "Mensagem enviada com sucesso";
        });
    }
}
exports.default = SendEmailRules;
