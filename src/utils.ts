const LS_KEY_PREFIX = "mail-template-for-work-from-home-";
export const LS_KEYS = {
  to: `${LS_KEY_PREFIX}to`,
  start_subject: `${LS_KEY_PREFIX}start_subject`,
  end_subject: `${LS_KEY_PREFIX}end_subject`,
  start_header: `${LS_KEY_PREFIX}start_header`,
  end_header: `${LS_KEY_PREFIX}end_header`,
  start_header_ext: `${LS_KEY_PREFIX}start_header_ext`,
  end_header_ext: `${LS_KEY_PREFIX}end_header_ext`,
  time_label: `${LS_KEY_PREFIX}time_label`,
  content_label: `${LS_KEY_PREFIX}content_label`,
  content_text: `${LS_KEY_PREFIX}content_text`,
  footer: `${LS_KEY_PREFIX}footer`,
  footer_ext: `${LS_KEY_PREFIX}footer_ext`,
  start_time: `${LS_KEY_PREFIX}start_time`,
  end_time: `${LS_KEY_PREFIX}end_time`,
  config_url: `${LS_KEY_PREFIX}config_url`,
  schema_json_data: `${LS_KEY_PREFIX}schema_json_data`,
};

export const extParam = new URLSearchParams(
  window.location.hash.replace(/#/, "")
);
