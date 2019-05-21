//===========================================================
// 
//===========================================================
export default function getValues(e: object, keys: string[]): object {

    let values = {};

    keys.forEach((key) => {
        values[key] = e[key][0];
    });

    return values;
}