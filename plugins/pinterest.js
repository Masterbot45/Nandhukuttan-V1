let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nexample:\n${usedPrefix + command} logo`
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: text
  }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  conn.sendFile(m.chat, pint, '', '© 𝙉𝘼𝙉𝘿𝙃𝙐𝙆𝙐𝙏𝙏𝘼𝙉 𝙑1', m, 0, { thumbnail: await (await fetch(pint)).buffer() })
}
handler.help = ['pinterest <search>']
handler.tags = ['internet']
handler.command = /^(pint(erest)?)$/i

module.exports = handler
