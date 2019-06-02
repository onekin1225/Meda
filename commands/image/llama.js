const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: "llama",
        desc: "sends a random picture of a llama.",
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
        fetch("https://apis.duncte123.me/llama")
            .then(res => res.json())
            .then(data => {
                message.channel.send(client.embed.image(data.data.file).setAuthor(client.user.username, client.user.displayAvatarURL));
            });
    }
}