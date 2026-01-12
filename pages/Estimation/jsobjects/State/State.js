export default {
	value: "Down",
	modified: false,
	autorefresh: false,

	toggle() {
		if (this.autorefresh) {
			clearInterval('refresh');
			this.autorefresh = false;
		} else {
			this.autorefresh = true;
			setInterval(() => {
				this.get();
			}, 5000, 'refresh');
		}
	},

	async up() {
		if (this.modified) {
			await PutConfig.run();
		}

		await Up.run();
	},

	async down() {
		await Down.run();
	},

	async get() {
		this.value = await GetState.run();
	},
}