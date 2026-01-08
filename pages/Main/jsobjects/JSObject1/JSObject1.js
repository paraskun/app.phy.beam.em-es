export default {
	state: "down",
	async getState() {
		this.state = await State.run();
	}
}