module.exports = {
	id: String,
	mutes: { type: Array, default: [] },
	cases: { type: Number, default: 0 },
	saves: { type: Array, default: [] },
	prefix: { type: String, default: "a!" },
	modrole: { type: String, default: "0" },
	muterole: { type: String, default: "0"  },
	adminrole: { type: String, default: "0" },
	defvolume: { type: Number, default: 50 },
	logchannel: { type: String, default: "0" },
	cmdchannel: { type: String, default: "0" },
	swearfilter: { type: Boolean, default: false },
	invitefilter: { type: Boolean, default: false }
};