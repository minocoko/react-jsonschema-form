import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Form from "./";

function withTheme(themeProps) {
  return forwardRef(({ fields, widgets, formRef, ...directProps }, ref) => {
    fields = { ...themeProps.fields, ...fields };
    widgets = { ...themeProps.widgets, ...widgets };

    const currentRef = formRef ? formRef : ref;

    return (
      <Form
        {...themeProps}
        {...directProps}
        fields={fields}
        widgets={widgets}
        ref={currentRef}
      />
    );
  });
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
