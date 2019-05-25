export default function gmmailProcess(myaddress: string, address: string, senderName: string, name: string, title: string, body: string) {

    try {

        // genrate parameters
        const recipient: string = address;
        const mailtext: string = body.replace(/\$name/g, name).replace(/\$address/g, address);
        const option: object = {
            cc: myaddress,
            name: senderName,
        };

        // send mail
        const mail = GmailApp.sendEmail(recipient, title, mailtext, option);

    } catch (error) {

        throw new Error(error);

    }

}
