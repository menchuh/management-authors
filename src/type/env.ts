import FormObjType from "./form";

export default interface EnvObjType {
    form_items: FormObjType;
    line_message: string;
    line_notify_url: string;
    mail_body: string;
    sheet_keys_name: object;
    sheet_keys_column: string;
    sheet_values_column: string;
    sheet_name: string;
}
