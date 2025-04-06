import { describe, beforeEach, it, expect, jest } from "bun:test";
import { FolderService } from '../../src/services/folder.service';
import { FolderImplRepository } from '../../src/repositories/folder.repository';
import { FileImplRepository } from '../../src/repositories/file.repository';
import { Folder } from '../../src/entities/folder.entity';

const mockFolderRepository = {
  getFoldersByParentId: jest.fn(),
};

const mockFileRepository = {
  getFilesByFolderId: jest.fn(),
};

describe('FolderService', () => {
  let folderService: FolderService;

  beforeEach(() => {
    folderService = new FolderService(
      mockFolderRepository as unknown as FolderImplRepository,
      mockFileRepository as unknown as FileImplRepository
    );
  });

  it('should get root folders', async () => {
    const mockFolders: Folder[] = [
      { id: '1', name: 'Root Folder' },
    ];
    mockFolderRepository.getFoldersByParentId.mockResolvedValue(mockFolders);

    const folders = await folderService.getRootFolders();

    expect(mockFolderRepository.getFoldersByParentId).toHaveBeenCalledWith(null);
    expect(folders).toEqual(mockFolders);
  });

  it('should get folder contents by id', async () => {
    const folderId = BigInt(1);
    const mockSubFolders: Folder[] = [
      { id: '2', name: 'Subfolder 1' },
    ];
    const mockFiles = [{ id: '3', name: 'File 1' }];
    mockFolderRepository.getFoldersByParentId.mockResolvedValue(mockSubFolders);
    mockFileRepository.getFilesByFolderId.mockResolvedValue(mockFiles);

    const content = await folderService.getFolderContents(folderId);

    expect(mockFolderRepository.getFoldersByParentId).toHaveBeenCalledWith(folderId);
    expect(mockFileRepository.getFilesByFolderId).toHaveBeenCalledWith(folderId);
    expect(content.subFolders).toEqual(mockSubFolders);
    expect(content.files).toEqual(mockFiles);
  });
});
