const { WebhookClient } = require('dialogflow-fulfillment');
const mongoose = require('mongoose');
const HealthyLifestyle = mongoose.model('healthyLifestyle');
const MedicinesInformation = mongoose.model('medicines');

module.exports = (app) => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function EffectsOfSmoking(agent) {
            agent.add(`Welcome to my Effect of smoking fulfillment!`);
        }

        async function Medicines(agent) {
            // console.log('xxxxxxxxxxxxxxxxxxxxx');
            // console.log(agent.parameters.medicine);
            // console.log('xxxxxxxxxxxxxxxxxxxxx');
            let medicinefetch = await MedicinesInformation.findOne({
                name: agent.parameters.medicine,
            });
            // console.log('-------------------');
            // console.log(medicinefetch.description);
            // console.log('-------------------');
            if (medicinefetch !== null) {
                // console.log('This code is executed!');
                responseText = `${medicinefetch.description}`;
                agent.add(responseText);
            }
            // agent.add('I hope this information is helpful for you!');
        }

        function Lifestyle(agent) {
            HealthyLifestyle.findOne(
                { Lifestyle: agent.parameters.Lifestyle },
                function (err, lifestyle) {
                    if (lifestyle !== null) {
                        lifestyle.counter++;
                        lifestyle.save();
                    } else {
                        const goodLifestyle = new HealthyLifestyle({
                            Lifestyle: agent.parameters.Lifestyle,
                        });
                        goodLifestyle.save();
                    }
                }
            );
            let responseText = `You want to learn about ${agent.parameters.Lifestyle}. 
                    Here is a link to healthy lifestyle information: https://www.healthline.com/health/fitness-nutrition/healthy-lifestyle-benefits`;
            agent.add(responseText);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('EffectsOfSmoking', EffectsOfSmoking);
        intentMap.set('HealthyLifestyle', Lifestyle);
        intentMap.set('MedicinesInfo', Medicines);
        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });
};
