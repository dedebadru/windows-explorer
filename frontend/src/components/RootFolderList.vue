<template>
  <RootFolderItem v-for="folder in folders" :key="folder.id" :folder="folder"
    :isSelected="selectedFolder?.id === folder.id" @select-folder="onSelectFolder" />
</template>

<script setup lang="ts">
import type { Folder } from '@/models/Folder';
import RootFolderItem from './RootFolderItem.vue';
import { ref } from 'vue';

const props = defineProps<{
  folders: Folder[]
}>()

const emit = defineEmits<{
  (e: 'select-folder', folder: Folder): void
}>()

const selectedFolder = ref<Folder | null>(null)

function onSelectFolder(folder: Folder) {
  selectedFolder.value = folder;
  emit('select-folder', folder);
}
</script>
