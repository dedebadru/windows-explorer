import axios from 'axios';
import type { Folder } from '@/models/Folder';
import type { Content } from '@/models/Content';

export const FolderService = {
  async getFolders(): Promise<Folder[]> {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/folders');
      console.log(response);
      return response.data.data; // Extract the data array
    } catch (error) {
      console.error('Error fetching folders:', error);
      return [];
    }
  },

  async getContent(folderId: string): Promise<Content> {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/folders/${folderId}`);
      return response.data.data; // Extract the data array
    } catch (error) {
      console.error(`Error fetching subfolders for folder ${folderId}:`, error);
      return { subFolders: [], files: [] };
    }
  }
};