import React from 'react';

const QuickReply = (props) => {
    if (props.reply.structValue.fields.payload) {
        return (
            <a
                style={{ margin: 3, fontSize: 10 }}
                href="/"
                className="btn-floating btn-large waves-effect waves-light pink"
                onClick={(event) => {
                    props.click(
                        event,
                        props.reply.structValue.fields.payload.stringValue,
                        props.reply.structValue.fields.text.stringValue
                    );
                }}
            >
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    } else {
        return (
            <a
                target="_blank"
                rel="noreferrer"
                style={{ margin: 3, fontSize: 10 }}
                href={props.reply.structValue.fields.link.stringValue}
                className="btn-floating btn-large waves-effect waves-light pink"
            >
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }
};

export default QuickReply;
