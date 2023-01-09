require('./settings')
const yargs = require('yargs/yargs')
const moment = require('moment-timezone')
const { modul } = require('./module')
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./color')
const log = (pino = require("pino"))
const qrcode = require('qrcode')
const rimraf = require("rimraf")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []
const jadibot = async (kayla, m, from) => {
const { sendImage, sendMessage } = kayla
const { reply, sender } = m
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/rentbot/${num.split("@")[0]}`), log({ level: "silent" }))
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const kayla = await makeWaSocket({
auth: state,
browser: [`Sora-RentBot`, "Safari", "6.6.6"],
logger: log({ level: "silent" }),
version,
})

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 60 * 1000)


    store.bind(xylaa.ev)
    
    // anticall auto block
    xylaa.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let xeonfek = await xylaa.sendContact(callerId, global.owner)
    xylaa.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : xeonfek })
    await sleep(8000)
    await xylaa.updateBlockStatus(callerId, "block")
    }
    })
    xylaa.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
if (mek.key.remoteJid === 'status@broadcast') {
				let bot = xylaa.decodeJid(xylaa.user.id)
				if (!xylaa.autosw) return
				setTimeout(() => {
					xylaa.readMessages([mek.key])
					let mt = getContentType(mek.message)
					console.log((/protocolMessage/i.test(mt)) ? `${mek.key.participant.split('@')[0]} Telah menghapus Story nya` : 'Melihat story user : '+mek.key.participant.split('@')[0]);
					if (/protocolMessage/i.test(mt)) xylaa.sendMessage(xylaa.sendsw, {text:'Status dari @'+mek.key.participant.split('@')[0]+' Telah dihapus', mentions: [mek.key.participant]})
					if (/(imageMessage|videoMessage|extendedTextMessage)/i.test(mt)) {
						let keke = (mt == 'extendedTextMessage') ? `\nStory Teks Berisi : ${mek.message.extendedTextMessage.text}` : (mt == 'imageMessage') ? `\nStory Gambar dengan Caption : ${mek.message.imageMessage.caption}` : (mt == 'videoMessage') ? `\nStory Video dengan Caption : ${mek.message.videoMessage.caption}` : '\nTidak diketahui cek saja langsung!!!'
						xylaa.sendMessage(xylaa.sendsw, {text: 'Melihat story dari @'+mek.key.participant.split('@')[0] + keke, mentions: [mek.key.participant]});
					}
				}, 0);
			}
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (!xylaa.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(xylaa, mek, store)
        require("./sora-bot")(xylaa, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    // Group Update
    xylaa.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await xylaa.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.xylaaarridho.my.id/rg1oT'
       }
       let lolXeon = { url : ppgc }
       if (pea[0].announce == true) {
       xylaa.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, lolXeon, [])
       } else if(pea[0].announce == false) {
       xylaa.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, lolXeon, [])
       } else if (pea[0].restrict == true) {
       xylaa.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, lolXeon, [])
       } else if (pea[0].restrict == false) {
       xylaa.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, lolXeon, [])
       } else {
       xylaa.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, lolXeon, [])
     }
    })
    
    //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

    xylaa.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await xylaa.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
			try {
			ppuser = await xylaa.getProfilePicture(num, 'image')
			} catch {
			ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
				// Get Profile Group
				try {
                    ppgroup = await xylaa.getProfilePicture(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                //welcome\\
//TIME
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good morning 🌉'
 }
 
 //just stfu
 xeonName = num
const menums = ` 𝑯𝒂𝒊 @${xeonName.split("@")[0]}, ${ucapanWaktu}
⤷━━━━━『 Welcome 』━━━━━⤶` 
//just stfu2
const menums2 = ` 𝑯𝒂𝒊 @${xeonName.split("@")[0]}, ${ucapanWaktu}
⤷━━━━━『 Leave 』━━━━━⤶`


                //welcome\\

if (xylaa.welcome) { 				
let nama = await xylaa.getName(num)
let namagc = await metadata.subject
let descgc = await metadata.desc
let memb = await metadata.participants.length
XeonWlcm = await getBuffer(`https://saipulanuar.ga/api/canvas/welcome2?name=${nama}&gcname=${namagc}&pp=${ppuser}&bg=https://telegra.ph/file/55564928d193174f4851e.jpg&membercount=${memb}`)
XeonLft = await getBuffer(`https://saipulanuar.ga/api/canvas/goodbye4?name=${nama}&gcname=${namagc}&pp=${ppuser}&bg=https://telegra.ph/file/98e7ac6a1e97c47190095.jpg`)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
                const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: XeonWlcm, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                welcomenya = (`┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
   │✑  ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xmembers}th
   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
   │✑ ${xtime} ${xdate}
   └───────────────┈ ⳹
   
   ${descgc}`)
xylaa.sendImage(anu.id, XeonWlcm, welcomenya, unicorndoc)
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	                const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: XeonLft, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    leavenya = (`┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗟𝗲𝗳𝘁 
   │✑ ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xeonmembers}th
   │✑  𝗧𝗶𝗺𝗲 : 
   │✑  ${xeontime} ${xeondate}
   └───────────────┈ ⳹
   
   ${descgc}`)
xylaa.sendImage(anu.id, XeonLft, leavenya, unicorndoc)
                }
            }}
        } catch (err) {
            console.log(err)
        }
    })
    //Setting\\
    xylaa.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    xylaa.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = xylaa.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    xylaa.getName = (jid, withoutContact  = false) => {
        id = xylaa.decodeJid(jid)
        withoutContact = xylaa.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = xylaa.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === xylaa.decodeJid(xylaa.user.id) ?
            xylaa.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    xylaa.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await xylaa.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await xylaa.getName(i + '@s.whatsapp.net')}\nFN:${await xylaa.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:💚 WangSaff\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:📧 Email\nitem3.URL:${global.website}\nitem3.X-ABLabel:⚙️GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:🌍 Region\nitem5.URL:${global.roblox}\nitem5.X-ABLabel:🦋 Roblox\nitem6.URL:${global.ig}\nitem6.X-ABLabel:👑 Instagram\nitem7.URL:${global.tg}\nitem8.X-ABLabel:💙 Telegram\nEND:VCARD`
	    	
	    })
	}
	xylaa.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    xylaa.setStatus = (status) => {
        xylaa.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    xylaa.public = true
    xylaa.autosw = true
    xylaa.autoreact = false
    xylaa.autoread = false
    xylaa.welcome = true
    xylaa.autobio = true
    xylaa.autoonline = true
	xylaa.sendsw = '6281338302495@s.whatsapp.net'
    xylaa.serializeM = (m) => smsg(xylaa, m, store)
	
store.bind(xylaa.ev);
xylaa.ev.on("creds.update", saveCreds);
xylaa.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to Sora-RentBot")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 30 detik', m)
console.log(connection)
if (connection == "open") {
xylaa.id = xylaa.decodeJid(xylaa.user.id)
xylaa.time = Date.now()
global.conns.push(xylaa)
await m.reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× id : ${xylaa.decodeJid(xylaa.user.id)}*_`)
user = `${xylaa.decodeJid(xylaa.user.id)}`
txt = `*Detected Users Sora-RentBot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6281338302495@s.whatsapp.net`,{text: txt, mentions : [user]})
}    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); xylaa.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("🦄Connection closed, reconnecting...."); startxylaa(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("🦄Connection Lost from Server, reconnecting..."); startxylaa(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("🦄Connection Replaced, Another New Session Opened, Please Close Current Session First"); xylaa.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`🦄Device Logged Out, Please Scan Again And Run.`); xylaa.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("🦄Restart Required, Restarting..."); startxylaa(); }
            else if (reason === DisconnectReason.timedOut) { console.log("🦄Connection TimedOut, Reconnecting..."); startxylaa(); }
            else xylaa.end(`🦄Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    xylaa.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    xylaa.send5ButImg = async (jid , text = '❣︎xylaa✞' , footer = '❣︎𝟔𝐱𝐑𝐞𝐯𝐞𝐠𝐞𝐧𝐜𝐲✞', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: xylaa.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            xylaa.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    xylaa.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        xylaa.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendText = (jid, text, quoted = '', options) => xylaa.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await xylaa.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await xylaa.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await xylaa.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendTextWithMentions = async (jid, text, quoted, options = {}) => xylaa.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await xylaa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await xylaa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    xylaa.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    xylaa.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    xylaa.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await xylaa.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await xylaa.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    xylaa.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await xylaa.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    xylaa.cMod = (jid, copy, text = '', sender = xylaa.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === xylaa.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


//send 5 button image by xeon
    xylaa.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: xylaa.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            xylaa.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    //send5butvid by xeon
        xylaa.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: xylaa.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            xylaa.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
    
    //send5butmsg by xeon
            xylaa.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        xylaa.sendMessage(jid, templateMessage)
        }


//sendlistmsg by xeon
        xylaa.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        xylaa.sendMessage(jid, listMes, { quoted: quoted })
        }


    //send5butgif by xeon
        xylaa.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: xylaa.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            xylaa.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    xylaa.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return xylaa
}
}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { rentbot, listRentBot }