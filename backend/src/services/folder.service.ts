import { FolderRepository } from '../repositories/folder.repository';
import { FileRepository } from '../repositories/file.repository';
import { Folder } from '../entities/folder.entity';
import { Content } from '../entities/content.entity';

export class FolderService {
  constructor(private folderRepository: FolderRepository, private fileRepository: FileRepository) { }

  async getRootFolders(): Promise<Folder[]> {
    return await this.folderRepository.getFoldersByParentId(null);
  }

  async getFolderContents(id: BigInt): Promise<Content> {
    const subFolders = await this.folderRepository.getFoldersByParentId(id);
    const files = await this.fileRepository.getFilesByFolderId(id);
    return new Content(subFolders, files);
  }
}