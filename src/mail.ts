export default function gmmailProcess(address: string[], title: string, body: string) {

    const recipient = address.join(",");

    GmailApp.sendEmail(recipient, title, body);

}
