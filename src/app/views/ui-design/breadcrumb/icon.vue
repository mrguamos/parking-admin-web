<template>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>Promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>Promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>Promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </template>
  
  <script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  </script>
  