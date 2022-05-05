const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  translate(text, locale, highlight) {
    let dict = this.getDict(locale)
    let re;
    let timeDelimFrom;
    let timeDelimTo;
    let newOriginalText = text;
    let newTranslatedText = text;

    if (locale == 'american-to-british') {
      re = /\d?\d:\d\d/
      timeDelimFrom = ':'
      timeDelimTo = '.'
    } else if (locale == 'british-to-american') {
      re = /\d?\d\.\d\d/
      timeDelimFrom = '.'
      timeDelimTo = ':'
    }

    if (re.exec(newOriginalText) != null) {
      let originalWord = re.exec(newOriginalText)[0]
      let translatedWord = originalWord.replace(timeDelimFrom, timeDelimTo)
      newOriginalText = newOriginalText.replace(originalWord, '/' + originalWord + '/')
      newTranslatedText = newTranslatedText.replace(originalWord, '/' + translatedWord + '/')
    }

    for (const word of Object.keys(dict)) {
      if (text.toLowerCase().includes(word)) {
        let position = text.toLowerCase().indexOf(word)
        let lastPosition = position + word.length

        if (text[lastPosition] == ' ' || text[lastPosition] == '.' || text[lastPosition] == undefined) {
          let originalWord = text.slice(position, position + word.length)
          let translatedWord = this.capitalize(originalWord, dict[word])

          newOriginalText = newOriginalText.replace(originalWord, '/' + originalWord + '/')
          newTranslatedText = newTranslatedText.replace(originalWord, '/' + translatedWord + '/')
        }
      }
    }
    newOriginalText = newOriginalText.split('/')
    newOriginalText = newOriginalText.filter(n => n)
    newTranslatedText = newTranslatedText.split('/')
    newTranslatedText = newTranslatedText.filter(n => n)

    return this.convertToString(newOriginalText, newTranslatedText, highlight)
  }


  getDict(locale) {
    let dict;
    if (locale == 'american-to-british') {
      dict = {
        ...americanOnly,
        ...americanToBritishSpelling,
        ...americanToBritishTitles
      }
    } else if (locale == 'british-to-american') {
      dict = {
        ...this.swapObject(americanToBritishSpelling),
        ...this.swapObject(americanToBritishTitles),
        ...britishOnly
      }
    }
    return dict;
  }

  swapObject(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))
  }

  convertToString(originalText, translatedText, highlight = true) {
    let newTranslatedText = []
    if (highlight) {
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] != translatedText[i]) {
          newTranslatedText.push(`<span class="highlight">${translatedText[i]}</span>`)
        } else {
          newTranslatedText.push(translatedText[i])
        }
      }
    } else {
      newTranslatedText = translatedText
    }

    if(originalText.join('') === newTranslatedText.join('')){
      newTranslatedText = 'Everything looks good to me!'
    } else {
      newTranslatedText = newTranslatedText.join('')
    }

    return { text: originalText.join(''), translation: newTranslatedText }
  }

  capitalize(originalWord, translatedWord) {
    let newTranslatedWord = translatedWord.split(' ')
    if (originalWord.charAt(0) == originalWord.charAt(0).toUpperCase()) {
      newTranslatedWord = []
      for (const word of translatedWord.split(' ')) {
        newTranslatedWord.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
      }
    }
    return newTranslatedWord.join(' ')
  }

}

module.exports = Translator;