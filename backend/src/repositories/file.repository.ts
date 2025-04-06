import { PrismaClient } from '@prisma/client';
import { File } from '../entities/file.entity';

export interface FileRepository {
  getFilesByFolderId(id: BigInt): Promise<File[]>;
}

export class FileImplRepository implements FileRepository {
  private prisma = new PrismaClient();

  async getFilesByFolderId(id: BigInt): Promise<File[]> {
    const files = await this.prisma.file.findMany({
      where: { folderId: BigInt(id.toString()) },
    });

    return files.map(
      (file) => new File(
        file.id.toString(),
        file.name,
        file.createdAt,
        file.updatedAt
      )
    );
  }
}
