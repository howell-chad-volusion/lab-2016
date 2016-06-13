var Joi = require('joi');

var schema = {
    a: Joi.string()
};
 
Joi.validate({ a: 123 }, schema, function (err, value) { 

	if (err){
		console.log('error' + JSON.stringify(err));
	}
	else if (value){
		console.log('value' + JSON.stringify(value));
	}
});

// err === null -> object valid