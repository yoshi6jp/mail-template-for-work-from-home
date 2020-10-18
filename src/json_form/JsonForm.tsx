import React, { useContext, useCallback, useState, useEffect } from "react";
import { IChangeEvent } from "@rjsf/core";
import { RootContext } from "../Provider";
import Form from "@rjsf/bootstrap-4";
import { LS_KEYS } from "src/utils";
let SavedSchemaJsonData: object = {};
try {
  const text = localStorage.getItem(LS_KEYS.schema_json_data);
  if (text) {
    SavedSchemaJsonData = JSON.parse(text);
  }
} catch (e) {
  console.log(e);
}
export const JsonForm: React.FC = () => {
  const { schema, uiSchema, dispatch } = useContext(RootContext);
  const [data, setData] = useState<object>(SavedSchemaJsonData);
  const handleChange = useCallback(
    (evt: IChangeEvent) => {
      const { formData } = evt;
      // dispatch({ type: "SetFormData", payload: formData });
      setData(formData);
    },
    // [dispatch, setData]
    [setData]
  );
  useEffect(() => {
    dispatch({ type: "SetFormData", payload: data });
  }, [dispatch, data]);
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
