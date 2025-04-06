import { File } from './file.entity';
import { Folder } from './folder.entity';

export class Content {
  constructor(
    public subFolders: Folder[],
    public files: File[]
  ) { }
}
