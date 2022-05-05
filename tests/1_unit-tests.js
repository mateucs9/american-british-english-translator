const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator()

suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', (done) => {
    let text = 'Mangoes are my favorite fruit.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "Mangoes are my favourite fruit."
    assert.equal(translation, check)
    done()
  })

  test('Translate I ate yogurt for breakfast. to British English', (done) => {
    let text = 'I ate yogurt for breakfast.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "I ate yoghurt for breakfast."
    assert.equal(translation, check)
    done()
  })

  test("Translate We had a party at my friend's condo. to British English", (done) => {
    let text = "We had a party at my friend's condo."
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "We had a party at my friend's flat."
    assert.equal(translation, check)
    done()
  })

  test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
    let text = 'Can you toss this in the trashcan for me?'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "Can you toss this in the bin for me?"
    assert.equal(translation, check)
    done()
  })

  test('Translate The parking lot was full. to British English', (done) => {
    let text = 'The parking lot was full.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "The car park was full."
    assert.equal(translation, check)
    done()
  })

  test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
    let text = 'Like a high tech Rube Goldberg machine.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "Like a high tech Heath Robinson Device."
    assert.equal(translation, check)
    done()
  })

  test('Translate To play hooky means to skip class or work. to British English', (done) => {
    let text = 'To play hooky means to skip class or work.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "To bunk off means to skip class or work."
    assert.equal(translation, check)
    done()
  })

  test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
    let text = 'No Mr. Bond, I expect you to die.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "No Mr Bond, I expect you to die."
    assert.equal(translation, check)
    done()
  })

  test('Translate Dr. Grosh will see you now. to British English', (done) => {
    let text = 'Dr. Grosh will see you now.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "Dr Grosh will see you now."
    assert.equal(translation, check)
    done()
  })

  test('Translate Lunch is at 12:15 today. to British English', (done) => {
    let text = 'Lunch is at 12:15 today.'
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, false).translation
    let check = "Lunch is at 12.15 today."
    assert.equal(translation, check)
    done()
  })

  test('Translate We watched the footie match for a while. to American English', (done) => {
    let text = 'We watched the footie match for a while.'
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "We watched the soccer match for a while."
    assert.equal(translation, check)
    done()
  })

  test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
    let text = 'Paracetamol takes up to an hour to work.'
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "Tylenol takes up to an hour to work."
    assert.equal(translation, check)
    done()
  })

  test('Translate First, caramelise the onions. to American English', (done) => {
    let text = 'First, caramelise the onions.'
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "First, caramelize the onions."
    assert.equal(translation, check)
    done()
  })

  test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
    let text = 'I spent the bank holiday at the funfair.'
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "I spent the public holiday at the carnival."
    assert.equal(translation, check)
    done()
  })

  test('Translate I had a bicky then went to the chippy. to American English', (done) => {
    let text = 'I had a bicky then went to the chippy.'
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "I had a cookie then went to the fish-and-chip shop."
    assert.equal(translation, check)
    done()
  })

  test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
    let text = "I've just got bits and bobs in my bum bag."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "I've just got odds and ends in my fanny pack."
    assert.equal(translation, check)
    done()
  })

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    let text = "The car boot sale at Boxted Airfield was called off."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "The swap meet at Boxted Airfield was called off."
    assert.equal(translation, check)
    done()
  })

  test("Translate Have you met Mrs Kalyani? to American English", (done) => {
    let text = "Have you met Mrs Kalyani?"
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "Have you met Mrs. Kalyani?"
    assert.equal(translation, check)
    done()
  })


  test("Translate Prof Joyner of King's College, London. to American English", (done) => {
    let text = "Prof Joyner of King's College, London."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "Prof. Joyner of King's College, London."
    assert.equal(translation, check)
    done()
  })

  test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
    let text = "Tea time is usually around 4 or 4.30."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, false).translation
    let check = "Tea time is usually around 4 or 4:30."
    assert.equal(translation, check)
    done()
  })


  test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
    let text = "Mangoes are my favorite fruit."
    let locale = 'american-to-british'
    let translation = translator.translate(text, locale, true).translation
    let check = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    assert.equal(translation, check)
    done()
  })

  test("Highlight translation in I ate yogurt for breakfast.", (done) => {
    let text = "Tea time is usually around 4 or 4.30."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, true).translation
    let check = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
    assert.equal(translation, check)
    done()
  })

  test("Highlight translation in We watched the footie match for a while.", (done) => {
    let text = "We watched the footie match for a while."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, true).translation
    let check = 'We watched the <span class="highlight">soccer</span> match for a while.'
    assert.equal(translation, check)
    done()
  })

  test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    let text = "Paracetamol takes up to an hour to work."
    let locale = 'british-to-american'
    let translation = translator.translate(text, locale, true).translation
    let check = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    assert.equal(translation, check)
    done()
  })


});
