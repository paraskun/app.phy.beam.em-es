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

	updateX(cam,  weight) {
		this.config.cams[cam].axes.x.weight = weight;
	},

	updateZ(cam,  weight) {
		this.config.cams[cam].axes.z.weight = weight;
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