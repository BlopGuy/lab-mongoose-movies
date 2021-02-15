const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((allcelebritiesDB) => {
            res.render('celebrities/index', { celebrities: allcelebritiesDB });
        })
        .catch((err) => {
            next();
            console.log('Error detected ', err);
        });

});

router.get('/celebrities/create', (req, res) => {
    Celebrity.find()
        .then((celebrityFromDB) => {
            res.render('celebrities/new', { celebrities: celebrityFromDB });
        });
});

router.post('/celebrities/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => {
            res.redirect('/celebrities');
        });
});

router.post('/celebrities/:celebrityId/delete', (req, res) => {
    const celebrityId = req.params.celebrityId;
    Celebrity.findByIdAndDelete(celebrityId).then(() => {
      res.redirect('/celebrities');
    });
  });

router.get('/celebrities/:celebrityId', (req, res, next) => {
    const celebrityId = req.params.celebrityId;

    Celebrity.findById(celebrityId)
        .then((celebrityFromDB) => {
            res.render('celebrities/show', { celebrity: celebrityFromDB });
        });
});





module.exports = router;