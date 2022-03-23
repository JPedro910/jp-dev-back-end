import ISendEmail from "./ISendEmail";
import Mail from "../../../providers/Mail/Mail";
import Helper from "../../../utils/helper/Helper";
import { MissingParamError } from "../../../utils/errors";

export default class SendEmailRules {

	private mail: Mail;

	constructor(){
		this.mail = new Mail();
	}

	async execute( { name, email, message }: ISendEmail ) {

		if(!name || !email || !message)
			return new MissingParamError("Preencha todos os campos");

		await this.mail.sendMail(Helper.getMyEmailEnvironmentVariable(), "Contato", "mainEmailBody", {
			name: name,
			email: email,
			message: message
		}); 

		return "Mensagem enviada com sucesso";
	}
}