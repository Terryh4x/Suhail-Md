const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348088861949";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_55_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFMEw1ZWlCZkVQOFZHaXFGUjUwbm1hRXB2RG5zMVNmUCt2MnI5TC9RL1dBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0aU9vRC1oQ1Q2LU1sUU1Hbk50emFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzYWNjMWY2LTUyNDMtNDJmYy04OGVkLThmYzgwYWMzMThiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxMTQsXG4gICAgICAxNjUsXG4gICAgICA2NixcbiAgICAgIDE4MCxcbiAgICAgIDI1MSxcbiAgICAgIDM1LFxuICAgICAgMjQzLFxuICAgICAgMTE3LFxuICAgICAgMTI5LFxuICAgICAgNDUsXG4gICAgICAxOTIsXG4gICAgICAxNjcsXG4gICAgICAxNjksXG4gICAgICAyMCxcbiAgICAgIDMzLFxuICAgICAgODcsXG4gICAgICA3NyxcbiAgICAgIDE0NCxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTQzLFxuICAgICAgMTUzLFxuICAgICAgMjMxLFxuICAgICAgMTM2LFxuICAgICAgNDYsXG4gICAgICAyNyxcbiAgICAgIDE2NCxcbiAgICAgIDIzMCxcbiAgICAgIDExNSxcbiAgICAgIDEzMixcbiAgICAgIDg1LFxuICAgICAgMTg2LFxuICAgICAgMjMzLFxuICAgICAgMTkwLFxuICAgICAgMjUwLFxuICAgICAgMzIsXG4gICAgICAxMjUsXG4gICAgICA2MyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0RadDc4SkVPTDV1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhd2ZlN2xEOTJvdmpXNjVsT2xLOFFwVEhONmJReVFzRTVuWUo2bDBEelQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFJMkZXUmZWeGpjSThZZW5lWFhMUkgvdzJTOStneUl6cFM1OVcycWJFR3F4RGQ0L1VHUHNVUEZwVVV3TFYzUXk0SzhwYVFjUXVXMmtUVzJYQ1hoZERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllkTUplVnBZWUVhcGI0czJrUmE4MXg5bU83T1NrZjJtQThGTWRqeHM3eGFvdFZZMExYK1pUQ0FoK1hzSHdkTWFkQmV0Zkdjbkcwcy9zOTk3cXlpNmpBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4ODg2MTg0OTo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzYwMTM1NTI0NjgwNDM6NTNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg4ODYxODQ5OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjMwNTAxXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
