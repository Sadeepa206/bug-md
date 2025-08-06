// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['62895414452026'] //Own Number
global.developer = "Akira" //Dev Name
global.botname = "Äkïrå Çrå§h" //Bot Name
global.version = "1.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By " //Pack Name 
global.author = "Akira" // Author

//Social Media Settings
global.ytube = "-/"
global.ttok = ""
global.igram = "-/"
global.chtele = ""
global.tgram = "https://t.meAkira/"
global.limitCount = 1,

global.mess = {
 owner: '*lu bukan owner anjinggg!!*',
 premium: '*lu belum prem minta ama akira sono*'
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})