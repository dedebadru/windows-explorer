import { PrismaClient } from '@prisma/client';
import { Folder } from '../entities/folder.entity';

export interface FolderRepository {
  getFoldersByParentId(id: BigInt | null): Promise<Folder[]>;
}

export class FolderImplRepository implements FolderRepository {
  private prisma = new PrismaClient();

  async getFoldersByParentId(id: BigInt | null): Promise<Folder[]> {
    const folders = await this.prisma.folder.findMany({
      where: { parentId: id == null ? null : BigInt(id.toString()) },
    });

    return folders.map(
      (folder) => new Folder(
        folder.id.toString(),
        folder.name,
        folder.createdAt,
        folder.updatedAt
      )
    );
  }
}
