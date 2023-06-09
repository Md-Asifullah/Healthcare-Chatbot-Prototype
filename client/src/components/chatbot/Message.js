import React from 'react';

const Message = (props) => (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                {props.speaks === 'bot' && (
                    <div className="col s2">
                        <img
                            src={require('../images/cakap_sihat_avatar.png')}
                            alt="logo"
                            style={{
                                width: 50,
                            }}
                        />
                    </div>
                )}
                <div className="col s10">
                    <span className="black-text">{props.text}</span>
                </div>
                {props.speaks === 'user' && (
                    <div className="col s2">
                        <img
                            src={require('../images/user_avatar.png')}
                            alt="logo"
                            style={{
                                width: 50,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
);
export default Message;
