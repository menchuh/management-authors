export default function driveProcess(name: string, address: string) {

    const FOLDER = DriveApp.createFolder(name);

    FOLDER.addEditor(address);

}
