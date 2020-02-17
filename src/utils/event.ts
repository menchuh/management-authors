import FormObjType from "../type/form";

export default class EventClass {

    private address: string;
    private name: string;

    constructor(e: object, formItems: FormObjType) {
        const namedValues = e["namedValues"];
        this.address = namedValues[formItems["address"]][0];
        this.name = namedValues[formItems["name"]][0];
    }

    public getAddress(): string {
        return this.address;
    }

    public getName(): string {
        return this.name;
    }

}
