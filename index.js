'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.0b0a3f55-188e-4915-b768-32bc70710451";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('HelloIntent');
    },
    'HelloIntent': function () {
        this.emit(':tell', "Hello from Dove");
    },
    'TowerIntent': function () {
        this.emit(':tell', "TOWER");
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Help message";
        var reprompt = "Help reprompt";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "OK");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "OK");
    }
};
