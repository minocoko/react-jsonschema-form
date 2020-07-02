import React from "react";

import { FieldProps } from "@minocoko/rjsf-core";

import { Text } from "office-ui-fabric-react/lib/Text";

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    return <Text>{description}</Text>;
  }

  return null;
};

export default DescriptionField;
