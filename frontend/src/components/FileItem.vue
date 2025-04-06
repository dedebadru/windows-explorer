<template>
  <BCol cols="2" class="text-center">
    <BCard>
      <img src="@/assets/file.png" />
      <BCardText class="mt-3">{{ file.name }}</BCardText>
    </BCard>
  </BCol>
</template>

<script setup lang="ts">
import type { File } from '@/models/File';
import { computed } from 'vue';

const props = defineProps<{
  file: File;
}>()
</script>
