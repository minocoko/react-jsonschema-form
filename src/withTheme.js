import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./";

function withTheme(themeProps) {
  return class extends Component {
    render() {
      let { fields, widgets, formRef, ...directProps } = this.props;
      fields = { ...themeProps.fields, ...fields };
      widgets = { ...themeProps.widgets, ...widgets };

      return (
        <Form
          ref={formRef}
          {...themeProps}
          {...directProps}
          fields={fields}
          widgets={widgets}
        />
      );
    }
  };
}

withTheme.propTypes = {
  widgets: PropTypes.object,
  fields: PropTypes.object,
  formRef: PropTypes.object,
};

withTheme.defaultProps = {
  formRef: null,
};

export default withTheme;
