<template>
  <BCard no-body class="m-2" :class="['folder-item', { 'selected': isSelected }]" @click.stop="selectFolder">
    <BRow class="g-0">
      <BCol md="2" class="m-1">
        <img src="@/assets/folder.png" class="b-img card-img" />
      </BCol>

      <BCol md="8" class="m-1">
        {{ folder.name }}
      </BCol>
    </BRow>
  </BCard>
</template>

<script setup lang="ts">
import type { Folder } from '@/models/Folder';
import { computed } from 'vue';

const props = defineProps<{
  folder: Folder;
  isSelected: boolean;
}>()

const emit = defineEmits<{
  (e: 'select-folder', folder: Folder): void
}>()

function selectFolder() {
  emit('select-folder', props.folder);
}
</script>

<style scoped>
.folder-item {
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.5s;
}

.folder-item:hover {
  background-color: #f0f0f0;
}

.selected {
  background-color: #e0e0e0;
}
</style>