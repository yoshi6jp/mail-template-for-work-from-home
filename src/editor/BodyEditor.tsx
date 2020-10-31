import React, { useState, useContext, useEffect } from "react";
import yaml from "js-yaml";
import { MailHeaderEditor } from "./MailHeaderEditor";
import { JsonForm } from "../json_form/JsonForm";
import { TimeEditor } from "./TimeEditor";
import { MailContentEditor } from "./MailContentEditor";
import { MailFooterEditor } from "./MailFooterEditor";
import { RootContext } from "../Provider";
import { extParam } from "../utils";
const yamlStart = "```yaml";
const yamlEnd = "```";
export const BodyEditor: React.FC = () => {
  const { dispatch, schema, formData } = useContext(RootContext);
  const [header, setHeader] = useState("");
  const [timeText, setTimeText] = useState("");
  const [content, setContent] = useState("");
  const [footer, setFooter] = useState("");
  useEffect(() => {
    let body = "";
    if (extParam.get("content")) {
      body = `${header}

${timeText}    

${extParam.get("content")}

${footer}`;
    } else if (schema) {
      let formText = "";
      try {
        formText = yaml.safeDump(formData || "");
      } catch (e) {
        console.log(e);
      }
      body = `${header}

${timeText}

${yamlStart}
${formText}
${yamlEnd}

${footer}`;
    } else {
      body = `${header}

${timeText}    

${content}

${footer}`;
    }
    dispatch({ type: "SetBody", payload: body });
  }, [header, timeText, content, footer, schema, formData, dispatch]);

  return (
    <div>
      <div className="d-none d-sm-block">
        <p className="lead">本文</p>
        <MailHeaderEditor onChange={setHeader} />
        <TimeEditor onChange={setTimeText} />
      </div>
      {extParam.get("content") ? (
        <pre className="border p-2">{extParam.get("content")}</pre>
      ) : (
        <>
          {schema ? <JsonForm /> : <MailContentEditor onChange={setContent} />}
        </>
      )}
      <div className="d-none d-sm-block">
        <MailFooterEditor onChange={setFooter} />
      </div>
    </div>
  );
};
