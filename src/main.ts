// ===========================================================
// import packages
// ===========================================================
import ConfigType from "./type/config";
import FormObjType from "./type/form";
import ConfigClass from "./utils/config";
import EnvClass from "./utils/env";
import EventClass from "./utils/event";
import FolderClass from "./utils/folder";
import NotifyClass from "./utils/notify";

// ===========================================================
// main process
// ===========================================================
function main(e: object) {

    try {

        // =======================================================
        // get environment variables
        // =======================================================
        const Env = new EnvClass();
        // extract values
        const FORM_ITEMS: FormObjType = Env.form_items;
        const SHEET_NAME = Env.sheet_name;
        const SHEET_KEYS_NAME = Env.sheet_keys_name;
        const SHEET_KEYS_COLUMN = Env.sheet_keys_column;
        const SHEET_VALUES_COLUMN = Env.sheet_values_column;
        const MAIL_BODY = Env.mail_body;
        const LINE_NOTIFY_URL = Env.line_notify_url;
        const LINE_MESSAGE = Env.line_message;

        // =======================================================
        // get event variables
        // =======================================================
        const Event = new EventClass(e, FORM_ITEMS);
        // extract values
        const MAIL_ADDRESS: string = Event.getAddress();
        const AUTHOR_NAME: string = Event.getName();

        // =======================================================
        // Get configurations
        // =======================================================
        const Config = new ConfigClass();
        Config.setSheetName(SHEET_NAME);
        const configObj: ConfigType = Config.getValues(SHEET_KEYS_NAME, SHEET_KEYS_COLUMN, SHEET_VALUES_COLUMN);

        // extract values
        const MY_MAIL_ADDRESS: string = configObj.address;
        const LINE_NOTIFY_TOKEN: string = configObj.line_notify_token;
        const PARENT_FOLDER_ID: string = configObj.parent_folder_id;
        const SENDER_NAME: string = configObj.sender_name;
        const MAIL_SUBJECT: string = configObj.subject;

        // =======================================================
        // Create a folder and attach authority.
        // =======================================================
        const parentFolder = new FolderClass(PARENT_FOLDER_ID);
        parentFolder.createSubFolder(MAIL_ADDRESS, AUTHOR_NAME);

        // =======================================================
        // Send notifications
        // =======================================================
        const Notiry = new NotifyClass();
        Notiry.setSMailInfo(MAIL_ADDRESS, SENDER_NAME);
        Notiry.setLineInfo(LINE_NOTIFY_TOKEN, LINE_NOTIFY_URL);
        Notiry.sendEmail(MY_MAIL_ADDRESS, AUTHOR_NAME, MAIL_BODY, MAIL_SUBJECT);
        Notiry.sendMessage(LINE_MESSAGE, AUTHOR_NAME);

    } catch (error) {

        // ===================================================
        // Error process
        // ===================================================
        // error info
        const filename: string = `${error.fileName}.gs`;
        const lineNumber: number = error.lineNumber;
        const errorText: string = LanguageApp.translate(error.message.replace("Exception: ", ""), "en", "ja");

        // timestamp
        const NOW: string = Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd HH:mm:ss");

        // write to spreadsheet
        const SHEET: GoogleAppsScript.Spreadsheet.Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("エラーログ");
        SHEET.appendRow([NOW, filename, lineNumber, errorText]);

    }

}
