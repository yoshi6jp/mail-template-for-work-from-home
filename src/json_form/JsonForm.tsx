import React, { useContext, useCallback, useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import { RootContext } from "../Provider";
import Form from "@rjsf/bootstrap-4";
export const JsonForm: React.FC = () => {
  const { schema, uiSchema, dispatch } = useContext(RootContext);
  const [data, setData] = useState<object>({});
  const handleChange = useCallback(
    (evt: IChangeEvent) => {
      const { formData } = evt;
      dispatch({ type: "SetFormData", payload: formData });
      console.log(formData);
      setData(formData);
    },
    [dispatch, setData]
  );
  if (schema && uiSchema) {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={data}
        onChange={handleChange}
      >
        <hr />
      </Form>
    );
  }
  return <></>;
};
