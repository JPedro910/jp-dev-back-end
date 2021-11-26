import "dotenv/config";

class Helper {

	static getEmailEnvironmentVariable(){
		return process.env.EMAIL;
	}

	static getEmailPasswordEnvironmentVariable(){
		return process.env.EMAIL_PASSWORD;
	}

	static getAppUrlEnvironmentVariable(){
		return process.env.APP_URL;
	}
}

export default Helper;