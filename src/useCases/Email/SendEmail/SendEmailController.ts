import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import SendEmailRules from "./SendEmailRules";

export default new class SendEmailController {

	async handle(request: IRequestRouters) {

		const { name, email, message } = request.body;

		const sendEmailRules = new SendEmailRules();

		const response = await sendEmailRules.execute( { name, email, message } );
        
		return ok(response);
	}
};