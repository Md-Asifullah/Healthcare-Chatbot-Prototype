import React from 'react';

const Card = (props) => (
    <div style={{ float: 'left', paddingRight: 30, width: 270 }}>
        <div className="card">
            <div className="card-image" style={{ width: 240 }}>
                <img
                    style={{
                        height: 150,
                        width: 150,
                        objectFit: 'scale-down',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    src={props.payload.fields.image.stringValue}
                    alt={props.payload.fields.header.stringValue}
                />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                    {props.payload.fields.header.stringValue}
                </span>
                {props.payload.fields.description.stringValue}
            </div>
            <div className="card-action">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.payload.fields.link.stringValue}
                >
                    VISIT
                </a>
            </div>
        </div>
    </div>
);

export default Card;
