const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502395334";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/253a0784291e1f967edf4.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_55_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwZ3VJeFJWQW9MeUJoTlIvTXF5aW12WjhpSExHVUlEMk9sRlUveVRSSG1NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTU3MDAxNDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjI0RjRDQjVCRjQ0Qjg4RDZBMTI1NDFBRDFCRTAyMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MTMzMjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTR5aUwwUkZRc0tBbW1CeFpjZ0ZfQVwiLFxuICBcInBob25lSWRcIjogXCI4YTMxM2RmOS1hMjhkLTRhMzQtOGJkOC01NmJkYTg4OWRkNDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMjMzLFxuICAgICAgMjIxLFxuICAgICAgMTk4LFxuICAgICAgMTY4LFxuICAgICAgMTg0LFxuICAgICAgMTE3LFxuICAgICAgNDAsXG4gICAgICAxOTQsXG4gICAgICA2LFxuICAgICAgMzYsXG4gICAgICA0MCxcbiAgICAgIDE1NixcbiAgICAgIDI0OCxcbiAgICAgIDI0OSxcbiAgICAgIDEyMCxcbiAgICAgIDI0MyxcbiAgICAgIDkzLFxuICAgICAgMjQwLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDkwLFxuICAgICAgMTM5LFxuICAgICAgMjksXG4gICAgICAyNTAsXG4gICAgICAxLFxuICAgICAgMjEyLFxuICAgICAgMTIzLFxuICAgICAgMTY5LFxuICAgICAgMTE0LFxuICAgICAgMzUsXG4gICAgICAxMzEsXG4gICAgICAyNTAsXG4gICAgICA0MyxcbiAgICAgIDU2LFxuICAgICAgMTQ1LFxuICAgICAgNDksXG4gICAgICA5NixcbiAgICAgIDEyNyxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC93anFBRkVPS0F3TFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhSTd5Rm9MVG5JSldVLzZoa0dKUklVY1ErOHFqSzRITWRyZU1KSjR5RVRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZyN3ZhSkFSZDBINXBaNVNGbWxRSUdRMVJMbGNzSVRTLzRLWmxybjNLNnd2TXZSUys4TVFlUWVXYThNZ3hETGdaMkRzdEE0M28yUjREcmo3U2o5Q0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhYUVl5SEZWVTJiMFJhVkprWnFnNU1wdTg3bnc2bVpGSWlIcWZtNlVCRWNaK0ppTms5NGZVcGh1d1VhU2R2N3hPK3JHOWlNRkcyYkg1ay80WTZUT0JBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NTcwMDE0OTg6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2OTQxMDY2NTI0NjkwNDoxOEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTU3MDAxNDk4OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MTMzMTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp0Ui5qc29uIjogIntcImtleURhdGFcIjpcIkpwN3RqbTdpNGprekllUGp6bVNTK2dmVXRFd2V2WXkwTmZ2b2g3a1Z4cHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwOTUyOTk4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnRTLmpzb24iOiAie1wia2V5RGF0YVwiOlwidzNTWUtKQ1pWbUluSXR5TW5XYmF0SUtOVmhJUmlkejRVRGFJbjJneG1rUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA5NTI5OTgzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg2MjY5MjY1MzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmQllyKzhQcENSNHVJTGxMRTRJN1lyOXhiVG1VSE52eU9SN2s0aytsMlRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MDk1Mjk5ODMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUxNzk0MTc1NVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "€",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Christophe D Dragnir",
  packname: process.env.PACK_NAME || "Songosai",
  botname : process.env.BOT_NAME  || "Songosai",
  ownername:process.env.OWNER_NAME|| "Christophe D Dragnir",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
