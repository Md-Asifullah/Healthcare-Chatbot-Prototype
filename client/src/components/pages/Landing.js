import React from 'react';

const Landing = () => (
    <div style={{ textAlign: 'center' }}>
        <h1 className="teal-text text-darken-1">Welcome to Cakap Sihat!</h1>
        <p>Your friendly chatbot to improve your health literacy</p>
        <br />
        <br />
        <br />
        <div className="container">
            <div className="row">
                <div className="col s4">
                    <i className="large material-icons">question_answer</i>
                    <h4 className="teal-text text-darken-1">
                        Answering your health related queries
                    </h4>
                    <p>
                        I am trained to give answer to your health related
                        queries. My untimate goal is to enhance your health
                        literacy. Just ask me any queries you have and I will
                        try my level best to answer you. 🙂
                    </p>
                </div>
                <div className="col s4">
                    <i className="large material-icons">chat</i>
                    <h4 className="teal-text text-darken-1">
                        Your personal friendly chatbot
                    </h4>
                    <p>
                        It is my ultimate desire to give you a very friendly
                        exprience while you spend time with me. I am a fun
                        loving chatbot. I am very glad that you are here and I
                        will be very happy to assist you.
                    </p>
                </div>
                <div className="col s4">
                    <i className="large material-icons">system_update_alt</i>
                    <h4 className="teal-text text-darken-1">
                        Constantly evolving in health related topics
                    </h4>
                    <p>
                        I am a learner. Unlike you I learn thorugh taking input
                        in my database, knowledgebase and intents. So, I am in a
                        consistent process of learning to give you an enriched
                        exprience with time.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Landing;
