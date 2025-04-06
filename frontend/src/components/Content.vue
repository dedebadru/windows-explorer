<template>
  <div class="content">
    <h4 v-if="selectedFolder">Content of {{ selectedFolder.name }}</h4>
    <h4 v-else>Select a folder to view</h4>

    <BRow v-if="selectedFolder && content.subFolders && content.subFolders.length">
      <FolderItem v-for="folder in content.subFolders" :key="folder.id" :folder="folder"
        :isSelected="selectedSubfolder?.id === folder.id" @select-folder="onSelectSubfolder" />
    </BRow>

    <BRow v-if="selectedFolder && content.files && content.files.length" class="mt-3">
      <FileItem v-for="file in content.files" :key="file.id" :file="file" />
    </BRow>

    <BRow
      v-if="selectedFolder && content.subFolders && content.subFolders.length == 0 && content.files && content.files.length == 0">
      <BCol cols="4" class="text-center">
        <BCard>
          <img src="@/assets/empty.png" />
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import type { Folder } from '@/models/Folder';
import FolderItem from './FolderItem.vue';
import FileItem from './FileItem.vue';
import { ref } from 'vue';

defineProps<{
  content: Content;
  selectedFolder: Folder | null;
}>()

const emit = defineEmits<{
  (e: 'select-folder', folder: Folder): void
}>()

const selectedSubfolder = ref<Folder | null>(null)

function onSelectSubfolder(folder: Folder) {
  selectedSubfolder.value = folder;
  emit('select-folder', folder);
}
</script>
