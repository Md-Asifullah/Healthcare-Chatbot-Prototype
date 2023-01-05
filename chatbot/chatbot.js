'use strict';

const dialogflow = require('@google-cloud/dialogflow');
const structjson = require('./structjson');
const { struct } = require('pb-util');
const { response } = require('express');
const config = require('../config/keys');

const projectID = config.googleProjectID;
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.Google_Private_Key,
};

const sessionClient = new dialogflow.SessionsClient({
    projectID,
    credentials,
});
const sessionPath = sessionClient.projectAgentSessionPath(
    config.googleProjectID,
    config.dialogFlowSessionID
);

module.exports = {
    textQuery: async function (text, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: text,
                    // The language used by the client (en-US)
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters,
                },
            },
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },

    eventQuery: async function (event, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    // The query to send to the dialogflow agent
                    name: event,
                    // parameters: structjson.jsonToStructProto(parameters),
                    parameters: struct.encode(parameters),
                    // The language used by the client (en-US)
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    handleAction: function (responses) {
        return responses;
    },
};
