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
    const NAME = EVENT_VALUES.name;

    // =======================================================
    // Google Spreadsheet process
    // =======================================================
    const SHEET_VAR_OBJ: SpreadObjType = spreadsheetProcess(ENV_VAR_OBJ.sheet_name, ENV_VAR_OBJ.sheet_columns);

    // extract values
    const MY_MAIL_ADDRESS = SHEET_VAR_OBJ.address;

    // =======================================================
    // Google Drive process
    // =======================================================
    // driveProcess(NAME, MAIL_ADDRESS, SHEET_VAR_OBJ.parent_folder_id);

    // =======================================================
    // Gmail process
    // =======================================================
    gmmailProcess(MY_MAIL_ADDRESS, MAIL_ADDRESS, NAME, ENV_VAR_OBJ.mail_title, ENV_VAR_OBJ.mail_body);

}
