import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const createComponent = (name) => {
    const ComponentPart = ({ children }) => (
        <div className={`l-vertical-trichotomy--${name}`}>
            {children}
        </div>
    );

    ComponentPart.propTypes = {
        children: PropTypes.node,
    };
    ComponentPart.defaultProps = {
        children: null,
    };

    return ComponentPart;
};

const VerticalTrichotomy = ({ children }) => (
    <div className="l-vertical-trichotomy">
        {children}
    </div>
);

VerticalTrichotomy.propTypes = {
    children: PropTypes.node,
};

VerticalTrichotomy.defaultProps = {
    children: null,
};

['header', 'body', 'footer'].forEach((name) => {
    VerticalTrichotomy[name] = createComponent(name);
});

export default VerticalTrichotomy;
