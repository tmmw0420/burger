var express = require('require');
var router = express.Router();
var cat = require('.models/burger.js');

router.get('/burgers,' function(req, res) {
    burger.selectAll(function (data) {
        console.log({burgers: data});
        res.render('index', {bugers: data});
    });
});

router.post('/burgers/create', function(req, res) {
    burger.addBurger([''], [req.body.burger_name, req.body.devoured], function() {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);
    burger.update({devoured: req.body.sleepy}, condition, function(){
        res.redirect('/burgers');
    });
});

module.exports = router;