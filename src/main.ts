// ===========================================================
// import packages
// ===========================================================
import driveProcess from "./drive";
import getEnv from "./env";
import getValues from "./event";
import gmmailProcess from "./mail";
import spreadsheetProcess from "./spreadsheet";
import EnvObjType from "./type/env";
import EventObjType from "./type/event";
import SpreadObjType from "./type/spreadsheet";

// ===========================================================
// main process
// ===========================================================
function main(e: object) {

    try {

    // =======================================================
    // get environment variables
    // =======================================================
    const ENV_VAR_OBJ: EnvObjType = getEnv();

    // =======================================================
    // get event variables
    // =======================================================
    const EVENT_VALUES: EventObjType = getValues(e, ENV_VAR_OBJ.form_items);

    // extract values
    const MAIL_ADDRESS = EVENT_VALUES.address;

    // =======================================================
    // Google Spreadsheet process
    // =======================================================
    const SHEET_VAR_OBJ: SpreadObjType = spreadsheetProcess(ENV_VAR_OBJ.sheet_name, ENV_VAR_OBJ.sheet_keys_name, ENV_VAR_OBJ.sheet_keys_column, ENV_VAR_OBJ.sheet_values_column);

    // extract values
    const MY_MAIL_ADDRESS = SHEET_VAR_OBJ.address;

    // =======================================================
    // Google Drive process
    // =======================================================
    driveProcess(EVENT_VALUES.name, MAIL_ADDRESS, SHEET_VAR_OBJ.parent_folder_id);

    // =======================================================
    // Gmail process
    // =======================================================
    gmmailProcess(MY_MAIL_ADDRESS, MAIL_ADDRESS, SHEET_VAR_OBJ.sender_name, EVENT_VALUES.name, SHEET_VAR_OBJ.subject, ENV_VAR_OBJ.mail_body);

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
