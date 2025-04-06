<template>
  <BContainer id="explorer-view">
    <BRow>
      <BCol cols="2">
        <RootFolderList :folders="rootFolders" @select-folder="selectFolder" />
      </BCol>

      <BCol cols="10">
        <Content :content="selectedFolderContent" :selected-folder="selectedFolder" @select-folder="selectSubfolder" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import RootFolderList from '@/components/RootFolderList.vue';
import Content from '@/components/Content.vue';
import { FolderExplorer } from '@/composables/FolderExplorer';
import type { Folder } from '@/models/Folder';

const {
  rootFolders,
  selectedFolderContent,
  selectedFolder,
  loadRootFolders,
  selectFolder
} = FolderExplorer();

const selectSubfolder = (subfolder: Folder) => {
  selectFolder(subfolder);
};

onMounted(loadRootFolders);
</script>

<style scoped>
#explorer-view {
  margin-top: 100px;
}
</style>