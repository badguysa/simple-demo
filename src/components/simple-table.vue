<template>
  <el-table ref="tableRef" v-bind="$attrs" :data="pagination !== false ? localDataSource : dataSource">
    <el-table-column v-for="column in columns" :key="column.prop" v-bind="column">
      <template v-if="column.slotTitle" #header>
        <slot :name="column.slotTitle" :column="column"></slot>
      </template>
      <template v-if="column.scopedSlots" #default="scope">
        <slot :name="column.scopedSlots" v-bind="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
  <el-row align="middle" justify="end" v-if="pagination !== false && !!dataSource.length">
    <el-pagination :total="dataSource.length" :current-page="currentPage" v-bind="localPagination" @current-change="currentChange" />
  </el-row>
</template>

<script setup>
import { ref, unref, onMounted, mergeProps, watch } from "vue";

defineExpose({
  tableFn,
});

const props = defineProps({
  columns: Array,
  dataSource: {
    type: Array,
    default: () => []
  },
  // 分页配置
  pagination: {
    type: [Boolean, Object],
    default: () => ({})
  },
});

const localDataSource = ref([])
const currentPage = ref(1)
const localPagination = ref(mergeProps({
  pageSize: 10
}, props.pagination))
const tableRef = ref()

function currentChange(_currentPage) {
  currentPage.value = _currentPage
  const pageSize = unref(localPagination).pageSize
  let endIndex = _currentPage * pageSize
  if (endIndex > props.dataSource.length) {
    endIndex = props.dataSource.length
  }
  localDataSource.value = props.dataSource.slice((_currentPage - 1) * pageSize, endIndex)
}

onMounted(() => {
  currentChange(1)
})

watch(() => props.dataSource, (value, oldValue) => {
  currentChange(unref(currentPage))
})

watch(() => props.dataSource.length, (value, oldValue) => {
  currentChange(unref(currentPage))
})

function tableFn(fnName) {
  const args = [...arguments]
  return unref(tableRef)[fnName](...args.slice(1))
}
</script>