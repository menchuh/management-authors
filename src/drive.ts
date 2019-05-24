export default function driveProcess(name: string, address: string, parentFolderId: string) {

    // create folder
    // grant editorial authority to the created folder
    const FOLDER = DriveApp.getFolderById(parentFolderId).createFolder(name).addEditor(address);

}
