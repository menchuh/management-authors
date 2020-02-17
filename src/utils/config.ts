import ConfigType from "../type/config";

export default class ConfigClass {

    private sheetname: string;

    public setSheetName(sheetname: string) {
        this.sheetname = sheetname;
    }

    public getValues(sheetKeysName: object, keysColumn: string, valuesColumn: string): ConfigType {
        const SHEET = this.genSheet(this.sheetname);
        const keys: string[] = this.storeValuesFromSheet(SHEET, keysColumn);
        const values: string[] = this.storeValuesFromSheet(SHEET, valuesColumn);
        let config: ConfigType = {
            address: "",
            line_notify_token: "",
            parent_folder_id: "",
            sender_name: "",
            subject: "",
        };
        Object.keys(sheetKeysName).forEach((key) => {
            config[key] = values[keys.indexOf(sheetKeysName[key])];
        });
        return config;
    }

    private genSheet(sheetname: string): GoogleAppsScript.Spreadsheet.Sheet {
        return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
    }

    private storeValuesFromSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet, column: string): string[] {
        const values: string[] = [].concat.apply([], sheet.getRange(`${column}:${column}`).getValues()).filter((elm: string) => {
            return elm !== "";
        });
        return values;
    }

}
