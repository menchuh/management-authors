export default function getVaclues(e: object, keys: string[]): object {

    const values = {};

    keys.forEach((key) => {
        values[key] = e[key][0];
    });

    return values;
}
