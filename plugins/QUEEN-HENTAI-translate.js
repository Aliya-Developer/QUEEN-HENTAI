
import translate from '@vitalets/google-translate-api'
const defaultLang = 'en'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
ALIYA_MD 💞
         Translator

🔊 ex :

.translate <id> [text]
.translate en i love my bro ali raza resident of 39.4/L

🇵🇰 List of supported 
                   languages: 🇵🇰

Plzz visit following link..

https://cloud.google.com/translate/docs/languages

🔊 Generated by 
       ALIYA_MD 💞
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
    } catch (e) {
        throw err
    } 

}
handler.help = ['trad <leng> <text>']
handler.tags = ['tools']
handler.command = ['translate', 'tl', 'trad', 'tr']

export default handler
