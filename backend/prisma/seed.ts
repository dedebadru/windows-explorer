import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const folder_1 = await prisma.folder.create({
    data: {
      name: 'Root Folder 1',
      parentId: null,
      files: {
        create: {
          name: 'File-1.txt'
        },
      },
      subfolders: {
        create: [{
          name: 'Sub Folder 1.1',
          files: {
            create: [{
              name: 'File-1-1.txt'
            }, {
              name: 'File-1-2.txt'
            }, {
              name: 'File-1-3.txt'
            }],
          },
          subfolders: {
            create: [{
              name: 'Sub Sub Folder 1.1.1',
              files: {
                create: [{
                  name: 'File-1-1-1.txt'
                }, {
                  name: 'File-1-1-2.txt'
                }]
              }
            }, {
              name: 'Sub Sub Folder 1.1.2'
            }]
          }
        }, {
          name: 'Sub Folder 1.2'
        }]
      }
    }
  })

  const folder_2 = await prisma.folder.create({
    data: {
      name: 'Root Folder 2',
      parentId: null,
      subfolders: {
        create: {
          name: 'Sub Folder 2.1',
          files: {
            create: {
              name: 'File-2-1.txt'
            }
          }
        }
      }
    }
  })

  const folder_3 = await prisma.folder.create({
    data: {
      name: 'Root Folder 3',
      parentId: null,
      files: {
        create: [{
          name: 'File-3-1.txt'
        }, {
          name: 'File-3-2.txt'
        }, {
          name: 'File-3-3.txt'
        }]
      }
    }
  })

  const folder_4 = await prisma.folder.create({
    data: {
      name: 'Root Folder 4',
      parentId: null
    }
  })

  console.log({ folder_1, folder_2, folder_3, folder_4 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
