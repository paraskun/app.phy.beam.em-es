export default {
	state: "Down",
	config: {
		"solver": {
			"iter": 1000,
			"eval": 1000,
			"relCost": 1e-10
		},
		"cams": {
			"1m1l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"1m2l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"1m1r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"1m2r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"2m1l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"2m2l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"2m1r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"2m2r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"3m1l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"3m2l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"3m1r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"3m2r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"4m1l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"4m2l": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"4m1r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			},
			"4m2r": {
				"axes": {
					"x": {
						"weight": 1
					},
					"z": {
						"weight": 1
					}
				}
			}
		}
	},
	modified: false,

	updateX(cam,  weight) {
		this.modified = true;
		this.config.cams[cam].axes.x.weight = weight;
	},

	updateZ(cam,  weight) {
		this.modified = true;
		this.config.cams[cam].axes.z.weight = weight;
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

	async refresh() {
		await this.getState();
		await this.getConfig();
	},

	async getState() {
		this.state = await GetState.run();
	},

	async getConfig() {
		this.config = await GetConfig.run().then(r => JSON.parse(r));

		c1m1lx.setValue(this.config.cams["1m1l"].axes.x.weight);
		c1m2lx.setValue(this.config.cams["1m2l"].axes.x.weight);
		c1m1rx.setValue(this.config.cams["1m1r"].axes.x.weight);
		c1m2rx.setValue(this.config.cams["1m2r"].axes.x.weight);
		c1m1lz.setValue(this.config.cams["1m1l"].axes.z.weight);
		c1m2lz.setValue(this.config.cams["1m2l"].axes.z.weight);
		c1m1rz.setValue(this.config.cams["1m1r"].axes.z.weight);
		c1m2rz.setValue(this.config.cams["1m2r"].axes.z.weight);

		c2m1lx.setValue(this.config.cams["2m1l"].axes.x.weight);
		c2m2lx.setValue(this.config.cams["2m2l"].axes.x.weight);
		c2m1rx.setValue(this.config.cams["2m1r"].axes.x.weight);
		c2m2rx.setValue(this.config.cams["2m2r"].axes.x.weight);
		c2m1lz.setValue(this.config.cams["2m1l"].axes.z.weight);
		c2m2lz.setValue(this.config.cams["2m2l"].axes.z.weight);
		c2m1rz.setValue(this.config.cams["2m1r"].axes.z.weight);
		c2m2rz.setValue(this.config.cams["2m2r"].axes.z.weight);

		c3m1lx.setValue(this.config.cams["3m1l"].axes.x.weight);
		c3m2lx.setValue(this.config.cams["3m2l"].axes.x.weight);
		c3m1rx.setValue(this.config.cams["3m1r"].axes.x.weight);
		c3m2rx.setValue(this.config.cams["3m2r"].axes.x.weight);
		c3m1lz.setValue(this.config.cams["3m1l"].axes.z.weight);
		c3m2lz.setValue(this.config.cams["3m2l"].axes.z.weight);
		c3m1rz.setValue(this.config.cams["3m1r"].axes.z.weight);
		c3m2rz.setValue(this.config.cams["3m2r"].axes.z.weight);

		c4m1lx.setValue(this.config.cams["4m1l"].axes.x.weight);
		c4m2lx.setValue(this.config.cams["4m2l"].axes.x.weight);
		c4m1rx.setValue(this.config.cams["4m1r"].axes.x.weight);
		c4m2rx.setValue(this.config.cams["4m2r"].axes.x.weight);
		c4m1lz.setValue(this.config.cams["4m1l"].axes.z.weight);
		c4m2lz.setValue(this.config.cams["4m2l"].axes.z.weight);
		c4m1rz.setValue(this.config.cams["4m1r"].axes.z.weight);
		c4m2rz.setValue(this.config.cams["4m2r"].axes.z.weight);

		this.modified = false;
	},
}