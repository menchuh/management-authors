export default class NotifyClass {

    private address: string;
    private senderName: string;
    private token: string;
    private url: string;

    public setLineInfo(token: string, url: string) {
        this.token = token;
        this.url = url;
    }

    public setSMailInfo(address: string, senderName: string) {
        this.address = address;
        this.senderName = senderName;
    }

    public sendEmail(cc: string, name: string, mailtext: string, subject: string): void {
        const mailText = this.createMessage(mailtext, name);
        const option = {
            cc: cc,
            name: this.senderName,
        };
        GmailApp.sendEmail(this.address, subject, mailText, option);
    }

    public sendMessage(message: string, name: string): void {
        // variables
        const LINE_NOTIFY_URL: string = this.url;
        const METHOD: string = "post";
        // options
        const options: object = {
            contentType: "application/x-www-form-urlencoded",
            headers: {
            Authorization: `Bearer ${this.token}`,
            },
            method: METHOD,
            payload: {
            message: this.createMessage(message, name),
            },
        };
        // request
        UrlFetchApp.fetch(LINE_NOTIFY_URL, options);
    }

    private createMessage(body: string, name: string): string {
        return body.replace(/\$name/g, name).replace(/\$address/g, this.address);
    }

}
