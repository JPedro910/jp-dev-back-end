import ISendEmail from "./ISendEmail";
import Mail from "../../../provider/Mail/Mail";
import { MissingParamError } from "../../../utils/errors";

export default class SendEmailRules {

	private mail: Mail;

	constructor(){
		this.mail = new Mail();
	}

	async execute( { name, email, message }: ISendEmail ) {

		if(!name || !email || !message)
			return new MissingParamError("Preencha todos os campos");

		await this.mail.sendMail(email, "Contato", "mainEmailBody", {
			name: name,
			email: email,
			message: message
		}); 

		return "Mensagem enviada com sucesso";
	}
}