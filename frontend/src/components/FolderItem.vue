<template>
  <BCol @click.stop="selectFolder" cols="2" class="text-center">
    <BCard class="subfolder-item" :class="{ 'selected': isSelected }">
      <img src="@/assets/folder.png" />

      <BCardText>{{ folder.name }}</BCardText>
    </BCard>
  </BCol>
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
.subfolder-item {
  cursor: pointer;
  transition: background-color 0.5s;
}

.subfolder-item:hover {
  background-color: #f0f0f0;
}

.selected {
  background-color: #e0e0e0;
}
</style>