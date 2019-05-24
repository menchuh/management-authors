export default function gmmailProcess(myaddress: string, address: string, name: string, title: string, body: string) {

    // =======================================================
    // genrate parameters
    // =======================================================
    const recipient: string = address;
    const mailtext: string = body.replace(/\$name/g, name).replace(/\$address/g, address);
    const option: object = {
        cc: myaddress,
        name: "Automatic Emailer Script",
    };

    GmailApp.sendEmail(recipient, title, mailtext, option);

}
