import type { Folder } from "./Folder";
import type { File } from "./File";

export interface Content {
  subFolders: Folder[];
  files: File[];
}