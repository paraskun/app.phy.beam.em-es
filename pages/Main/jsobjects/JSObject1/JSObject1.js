export default {
	state: "Down",
	config: {

	},

	async up() {
		await this.putConfig();
		await Up.run();
	},

	async down() {
		await Down.run();
	},

	async refresh() {
		this.state = await GetState.run();
		this.config = await GetConfig.run();
	},

	async getState() {
		this.state = await GetState.run();
	},

	async getConfig() {
		this.config = await GetConfig.run();
	},

	async putConfig() {
		await PutConfig.run();
	},
}