// ===========================================================
// import packages
// ===========================================================
import SheetObjType from "./type/spreadsheet";

// ===========================================================
// return sheet variables object
// ===========================================================
export default function spreadsheetProcess(sheetname: string, sheetKeysName: object, keysColumn: string, valuesColumn: string): SheetObjType {

    try {

        // get Sheet Object by name(env).
        const SHEET: GoogleAppsScript.Spreadsheet.Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);

        // get keys from rows (A columns).
        // flatten array and exclude empty string.
        const KEYS: string[] = [].concat.apply([], SHEET.getRange(`${keysColumn}:${keysColumn}`).getValues()).filter((elm: string) => {
            return elm !== "";
        });

        // get values from rows (B columns).
        // flatten array and exclude empty string.
        const VALUES: string[] = [].concat.apply([], SHEET.getRange(`${valuesColumn}:${valuesColumn}`).getValues()).filter((elm: string) => {
            return elm !== "";
        });

        // create an object to be returned
        let obj: SheetObjType = {
            address: "",
            parent_folder_id: "",
        };
        Object.keys(sheetKeysName).forEach((key) => {
            obj[key] = VALUES[KEYS.indexOf(sheetKeysName[key])];
        });

        return obj;

    } catch (error) {

        throw new Error(error);

    }

}
