export default {
	value: {
		"solver": {
			"maxIterations": 1000,
			"maxEvaluations": 1000,
			"relativeCost": 1e-10
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

	setX(cam,  weight) {
		this.value.cams[cam].axes.x.weight = weight;
		State.modified = true;
	},

	setZ(cam,  weight) {
		this.value.cams[cam].axes.z.weight = weight;
		State.modified = true;
	},

	async get() {
		this.value = await GetConfig.run().then(r => JSON.parse(r));

		c1m1lx.setValue(this.value.cams["1m1l"].axes.x.weight);
		c1m2lx.setValue(this.value.cams["1m2l"].axes.x.weight);
		c1m1rx.setValue(this.value.cams["1m1r"].axes.x.weight);
		c1m2rx.setValue(this.value.cams["1m2r"].axes.x.weight);
		c1m1lz.setValue(this.value.cams["1m1l"].axes.z.weight);
		c1m2lz.setValue(this.value.cams["1m2l"].axes.z.weight);
		c1m1rz.setValue(this.value.cams["1m1r"].axes.z.weight);
		c1m2rz.setValue(this.value.cams["1m2r"].axes.z.weight);

		c2m1lx.setValue(this.value.cams["2m1l"].axes.x.weight);
		c2m2lx.setValue(this.value.cams["2m2l"].axes.x.weight);
		c2m1rx.setValue(this.value.cams["2m1r"].axes.x.weight);
		c2m2rx.setValue(this.value.cams["2m2r"].axes.x.weight);
		c2m1lz.setValue(this.value.cams["2m1l"].axes.z.weight);
		c2m2lz.setValue(this.value.cams["2m2l"].axes.z.weight);
		c2m1rz.setValue(this.value.cams["2m1r"].axes.z.weight);
		c2m2rz.setValue(this.value.cams["2m2r"].axes.z.weight);

		c3m1lx.setValue(this.value.cams["3m1l"].axes.x.weight);
		c3m2lx.setValue(this.value.cams["3m2l"].axes.x.weight);
		c3m1rx.setValue(this.value.cams["3m1r"].axes.x.weight);
		c3m2rx.setValue(this.value.cams["3m2r"].axes.x.weight);
		c3m1lz.setValue(this.value.cams["3m1l"].axes.z.weight);
		c3m2lz.setValue(this.value.cams["3m2l"].axes.z.weight);
		c3m1rz.setValue(this.value.cams["3m1r"].axes.z.weight);
		c3m2rz.setValue(this.value.cams["3m2r"].axes.z.weight);

		c4m1lx.setValue(this.value.cams["4m1l"].axes.x.weight);
		c4m2lx.setValue(this.value.cams["4m2l"].axes.x.weight);
		c4m1rx.setValue(this.value.cams["4m1r"].axes.x.weight);
		c4m2rx.setValue(this.value.cams["4m2r"].axes.x.weight);
		c4m1lz.setValue(this.value.cams["4m1l"].axes.z.weight);
		c4m2lz.setValue(this.value.cams["4m2l"].axes.z.weight);
		c4m1rz.setValue(this.value.cams["4m1r"].axes.z.weight);
		c4m2rz.setValue(this.value.cams["4m2r"].axes.z.weight);

		State.modified = false;
	},
}