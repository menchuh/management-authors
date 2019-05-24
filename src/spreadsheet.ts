// ===========================================================
// import packages
// ===========================================================
import SheetObjType from "./type/spreadsheet";

// ===========================================================
// return sheet variables object
// ===========================================================
export default function spreadsheetProcess(sheetname: string, sheetcolumns: object): SheetObjType {

    // get Sheet Object by name(env).
    const SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);

    // get keys from rows (A columns).
    // flatten array and exclude empty string.
    const KEYS: string[] = [].concat.apply([], SHEET.getRange("A:A").getValues()).filter((elm: string) => {
        return elm !== "";
    });

    // get values from rows (B columns).
    // flatten array and exclude empty string.
    const VALUES: string[] = [].concat.apply([], SHEET.getRange("B:B").getValues()).filter((elm: string) => {
        return elm !== "";
    });

    // create an object to be returned
    let obj: SheetObjType = {
        address: "",
        parent_folder_id: "",
    };
    Object.keys(sheetcolumns).forEach((key) => {
        obj[key] = VALUES[KEYS.indexOf(sheetcolumns[key])];
    });

    return obj;

}
