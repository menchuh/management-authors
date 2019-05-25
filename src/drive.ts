export default function driveProcess(name: string, address: string, parentFolderId: string) {

    try {

    // create folder
    // grant editorial authority to the created folder
    const FOLDER: GoogleAppsScript.Drive.Folder = DriveApp.getFolderById(parentFolderId).createFolder(name).addEditor(address);

    } catch (error) {

        throw new Error(error);

    }

}
