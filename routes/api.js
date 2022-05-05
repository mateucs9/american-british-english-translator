'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      if(req.body.text == undefined || req.body.locale == undefined){
        res.send({
          error: 'Required field(s) missing'
        })

      } else if (req.body.text == '' || req.body.text == undefined || req.body.text == null) {
        res.send({
          error: 'No text to translate'
        })
      } else if (req.body.locale != 'american-to-british' && req.body.locale != 'british-to-american') {
        res.send({
          error: 'Invalid value for locale field'
        })
      } else {
        let translation = translator.translate(req.body.text, req.body.locale, true)
        res.send(translation)
      }

    });
};
