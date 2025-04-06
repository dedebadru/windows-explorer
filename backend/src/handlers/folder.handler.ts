import { Elysia } from 'elysia';
import { FolderImplRepository } from '../repositories/folder.repository';
import { FileImplRepository } from '../repositories/file.repository';
import { FolderService } from '../services/folder.service';

const folderService = new FolderService(new FolderImplRepository(), new FileImplRepository());
const app = new Elysia();

// Get all root folders
app.get('/api/v1/folders', async ({ set }) => {
  try {
    const folders = await folderService.getRootFolders();
    return { code: set.status, message: "success", data: folders };
  } catch (error) {
    set.status = 500
    const errorMessage = error instanceof Error ? error.message : "Error fetching folder";
    return { code: set.status, message: errorMessage };
  }
});

// Get sub folder and files by folder id
app.get('/api/v1/folders/:id', async ({ params, set }) => {
  let folderId = null;

  try {
    folderId = BigInt(params.id);
  } catch (error) {
    set.status = 400
    return { code: set.status, message: "folder id must be a number" };
  }

  if (folderId == null) {
    set.status = 400
    return { code: set.status, message: "folder id is required" };
  }

  try {
    const folders = await folderService.getFolderContents(folderId);
    return { code: set.status, message: "success", data: folders };
  } catch (error) {
    set.status = 500
    const errorMessage = error instanceof Error ? error.message : "Error fetching folder";
    return { code: set.status, message: errorMessage };
  }
});

export { app };