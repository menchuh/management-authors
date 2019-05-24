// ===========================================================
// import packages
// ===========================================================
import EventObjType from "./type/event";

// ===========================================================
// return event variables object
// ===========================================================
export default function getValues(e: object, formItems: object): EventObjType {

    // =======================================================
    // declare variables
    // =======================================================
    let eventValues: EventObjType = {
        address: "",
        name: "",
    };
    const namedValues = e["namedValues"];

    // =======================================================
    // get values
    // =======================================================
    Object.keys(formItems).forEach((key) => {
        eventValues[key] = namedValues[formItems[key]][0];
    });

    return eventValues;
}
