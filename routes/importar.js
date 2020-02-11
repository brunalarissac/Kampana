var express = require('express');
var router = express.Router();
var secured = require('../lib/middleware/secured');
var axios = require('axios')

router.get('/importar', secured(), (req, res) => {
	let animals;
	axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2', {})
	.then((response) => {
     console.log('Dados vindos do webservice:', response)
	})
	.catch(error => {
		console.log(error)
	})
	res.render('importar', {title: 'Importar'});
});

module.exports = router;