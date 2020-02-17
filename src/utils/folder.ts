export default class FolderClass {

    private parentFolderId: string;

    constructor(parentFolderId: string) {
        this.parentFolderId = parentFolderId;
    }

    public createSubFolder(address: string, name: string): void {
        const subFolder: GoogleAppsScript.Drive.Folder = DriveApp.getFolderById(this.parentFolderId).createFolder(name);
        this.addEditor(subFolder, address);
    }

    private addEditor(folder: GoogleAppsScript.Drive.Folder, address: string): void {
        folder.addEditor(address);
    }

}
