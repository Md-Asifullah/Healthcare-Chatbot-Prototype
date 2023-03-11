'use strict';

const dialogflow = require('@google-cloud/dialogflow').v2beta1;
// const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const { struct } = require('pb-util');
const { response } = require('express');
const config = require('../config/keys');
const mongoose = require('mongoose');

const sessionId = config.dialogFlowSessionID;

const projectID = config.googleProjectID;
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.Google_Private_Key,
};

const sessionClient = new dialogflow.SessionsClient({
    projectID,
    credentials,
});

const knowledgeBaseId = 'MzU3NjM1MzQzNDEyMDQ4NjkxMg';

const knowledgeBasePath =
    'projects/' +
    config.googleProjectID +
    '/knowledgeBases/' +
    knowledgeBaseId +
    '';

const sessionPath = sessionClient.projectAgentSessionPath(projectID, sessionId);
// const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const HealthScreeningRegistration = mongoose.model(
    'health_screening_registration'
);

module.exports = {
    textQuery: async function (text, userID, parameters = {}) {
        let self = module.exports;
        let sessionPath = sessionClient.projectAgentSessionPath(
            config.googleProjectID,
            sessionId + userID
        );
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
            // queryParams: {
            //     payload: {
            //         data: parameters,
            //     },
            // },
            queryParams: {
                payload: {
                    data: parameters,
                },
                knowledgeBaseNames: [knowledgeBasePath],
            },
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },

    eventQuery: async function (event, userID, parameters = {}) {
        let self = module.exports;
        // let sessionPath = sessionClient.sessionPath(
        //     config.googleProjectID,
        //     sessionId + userID
        // );
        let sessionPath = sessionClient.projectAgentSessionPath(
            config.googleProjectID,
            sessionId + userID
        );
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    // The query to send to the dialogflow agent
                    name: event,
                    // parameters: structjson.jsonToStructProto(parameters),
                    // JUST DID THIS
                    // parameters: struct.encode(parameters),
                    parameters: structjson.jsonToStructProto(parameters),
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
        let self = module.exports;
        let queryResult = responses[0].queryResult;

        switch (queryResult.action) {
            case 'HealthScreening-yes':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveHealthScreeningRegistration(
                        queryResult.parameters.fields
                    );
                }
                break;
        }
        // console.log(queryResult.action);
        // console.log(queryResult.allRequiredParamsPresent);
        // console.log(queryResult.fulfillmentMessages);
        // console.log(queryResult.parameters.fields);
        return responses;
    },
    saveHealthScreeningRegistration: async function (fields) {
        const registration = new HealthScreeningRegistration({
            name: fields.name.structValue.fields.name.stringValue,
            address: fields.address.stringValue,
            phone: fields.phone.stringValue,
            email: fields.email.stringValue,
            symptoms: fields.symptoms.stringValue,
            dateSent: Date,
        });
        try {
            let reg = await registration.save();
            console.log(reg);
        } catch (err) {
            console.log(err);
        }
    },
};
