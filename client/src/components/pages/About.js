import React from 'react';

const About = () => (
    <div style={{ textAlign: 'center' }}>
        <h1 className="teal-text text-darken-1">About Cakap Sihat</h1>
        <p
            style={{
                textAlign: 'justify',
                paddingLeft: '50px',
                paddingRight: '50px',
            }}
        >
            Cakap Sihat is a chatbot prototype developed by Md Asifullah for
            fulfillment of thesis in MSc. In Software Engineering. This chatbot
            was built keeping 2 functionalities in mind. The first idea was to
            promote the health literacy amonng the university students.
            Secondly, to promote basic fitness related literacy. Although this
            application was created for global univeristy students but the
            primary focus was Malaysia. As a result, top health related issues
            in Malaysia has been prioritized in the knowledgebase of the
            application.
        </p>
        <p
            style={{
                textAlign: 'justify',
                paddingLeft: '50px',
                paddingRight: '50px',
            }}
        >
            Health and fitness related data from credible sources about common
            diseases, medicines, healthy lifestyles, fitness, Covid-19 has been
            fed into the knowledgebase of CakapSihat. So, it will try its level
            best to answer any query related to them when asked. Of Course the
            health and fitness domain are enormous domains. This is just a
            prototype for fulfillment of requriement of complete a thesis and
            there was a time limit to complete this project. As a result not
            everything about health and fitness has been inserted to it's
            knowledgebase. Only the most common aspects are covered.
        </p>
        <p
            style={{
                textAlign: 'justify',
                paddingLeft: '50px',
                paddingRight: '50px',
            }}
        >
            Finally to add a little humour Small Talk feature of Dialogflow has
            been enabled. So, user can have very simple conversations with the
            application and there was a effort to make it as friendly and fun as
            possible.
        </p>
    </div>
);

export default About;
