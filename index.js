'use strict';

var Alexa = require('alexa-sdk');
 
exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = { 
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },
    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    },
    'TowerIntent': function () {
	this.emit(':tell', 'Hello Winchester!');
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Welcome to Dove's Guide for Church Bell Ringers. What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "OK");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "OK");
    }
};
