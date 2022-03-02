module.exports = {
    name: "test",
    description: "testing command",
    aliases: ["t"],
    roles: [],
    run: async (client, message, args) => {
        message.channel.send({ content: "poggers" })
    }
}