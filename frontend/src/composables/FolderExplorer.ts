import { ref, type Ref } from 'vue';
import type { Folder } from '@/models/Folder';
import type { Content } from '@/models/Content';
import { FolderService } from '@/services/FolderService';

export function FolderExplorer() {
  const rootFolders: Ref<Folder[]> = ref([]);
  const selectedFolderContent: Ref<Content | null> = ref(null);
  const selectedFolder: Ref<Folder | null> = ref(null);

  async function loadRootFolders() {
    rootFolders.value = await FolderService.getFolders();
  }

  async function selectFolder(folder: Folder) {
    selectedFolder.value = folder;
    try {
      selectedFolderContent.value = await FolderService.getContent(folder.id);
    } catch (error) {
      selectedFolderContent.value = null;
    }
  }

  return {
    rootFolders,
    selectedFolderContent,
    selectedFolder,
    loadRootFolders,
    selectFolder
  };
}