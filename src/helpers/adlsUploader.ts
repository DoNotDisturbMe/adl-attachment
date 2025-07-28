import { BlobServiceClient } from '@azure/storage-blob';

export class AdlsUploader {
    private blobServiceClient: BlobServiceClient;
    private containerName: string;

    constructor(connectionString: string, containerName: string) {
        this.blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        this.containerName = containerName;
    }

    public async uploadFile(file: Buffer, fileName: string): Promise<void> {
        const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
        await containerClient.createIfNotExists();
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);
        await blockBlobClient.upload(file, file.length);
    }
}