import Helper from "./Helper";

describe("Test of environment variable get", () => {

	test("Should return environment variable ", () => {
          
		const email = Helper.getEmailEnvironmentVariable();
		const password = Helper.getEmailPasswordEnvironmentVariable();
		const appUrl = Helper.getAppUrlEnvironmentVariable();
        
		expect(email).not.toBeUndefined();
		expect(password).not.toBeUndefined();
		expect(appUrl).not.toBeUndefined();
	});
});