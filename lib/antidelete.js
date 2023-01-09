const {
	delay
} = require('@adiwajshing/baileys')

module.exports = async (xylaa, m) => {
	console.log(m)
	if (!m) m = false;
	const m.isGroup = m.remoteJid.endsWith('@g.us')
	if (!m.isGroup) return
	try {
		const dataChat = require(`./database/antidelete.json`)
		let mess = dataChat.find((a) => a.id == m.id);

		let mek = m.sender;
		let participant = mek.key.remoteJid.endsWith("@g.us") ? mek.key.participant : mek.key.remoteJid;
		let froms = mek.key.remoteJid;
		const moment = require('moment-timezone')
		await xylaa.sendMessage(
			froms, {
				text: `「 *Anti delete Message* 」
    
    🤠 *Name* : ${mek.pushName}
    👾 *User* : @${mek.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    💫 *MessageType* : ${mek.mtype}
    `,
				mentions: [participant],
			}, {
				quoted: mek
			}
		);

		await xylaa.copyNForward(froms, mek, true);
  //  await xylaa.relayMessage(froms, mek, { messageId: mek.key.id });
		await delay(4000)
		let messek = dataChat.find((a) => a.id == m.id);
		for (let [i, te] of dataChat.entries()) {
			if (te.id === m.id) {
				dataChat.splice(i, 1); // Tim is now removed from "users"
				console.log("[ PROSES DELETE PESAN DI DB ]")
			}
		}

	} catch (err) {
	}
}