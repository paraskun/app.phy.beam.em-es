export default {
	value: {
		initialCurrent: 50,
		beamLifeTime: 3000,
		noise: 5
	},

	setInitialCurrent(value) {
		this.value.initialCurrent = value;
		State.modified = true;
	},

	setBeamLifeTime(value) {
		this.value.beamLifeTime = value;
		State.modified = true;
	},

	setNoise(value) {
		this.value.noise = value;
		State.modified = true;
	},

	async get() {
		this.value = await GetConfig.run().then(r => JSON.parse(r));

		initialCurrent.setValue(this.value.initialCurrent)
		beamLifeTime.setValue(this.value.beamLifeTime)
		noise.setValue(this.value.noise)

		State.modified = false;
	},
}