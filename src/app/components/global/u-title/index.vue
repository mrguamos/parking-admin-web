<template>
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
    <h2 :class="titleClass">{{ title }}</h2>
    <slot name="actions">
      <div class="flex flex-wrap gap-2">
        <el-button :size="buttonSize" type="primary" text>Button 1</el-button>
        <el-button :size="buttonSize" type="primary" text>Button 2</el-button>
        <el-button :size="buttonSize" type="primary" text>Button 3</el-button>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ElButton } from 'element-plus';

interface Props {
  title: string;
  type: 'page' | 'section';
}

const props = defineProps<Props>();

const titleClass = computed(() => 
  props.type === 'page' ? 'text-title-page' : 'text-subtitle'
);

const buttonSize = computed(() => 
  props.type === 'page' ? 'default' : 'small'
);
</script>
