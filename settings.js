const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=W4YAmJQK#jw_KSrEB15weKoPaabRIieO1ss6LXun_Zv8hm6bNZTU' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94719199757' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
LOGO: process.env.LOGO || '' ,    
FOOTER: process.env.FOOTER || '',
LIMIT_PLUGIN: process.env.LIMIT_PLUGIN || '50' ,    
PREMIUM_USERS: process.env.PREMIUM_USERS || '94719199757',    
LANG: process.env.LANG || 'en',    
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? 'nonbutton' : process.env.MODE,
ALIVE:  process.env.ALIVE  || '> VAJIRA MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
JID: process.env.JID || "",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vac3pnlBlHpXLrUBym3a`
};
