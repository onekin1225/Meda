const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: "birb",
        desc: "sends a random picture of a birb.",
        group: "image",
        usage: "",
        aliases: [],
        guildOnly: false,
        ownerOnly: false,
        userPerms: [],
        clientPerms: []
    },

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        fetch("https://api.alexflipnote.dev/birb")
            .then(res => res.json())
            .then(data => {
                message.channel.send(client.embed.image(data.file).setAuthor(client.user.username, client.user.displayAvatarURL));
            });
    }
}