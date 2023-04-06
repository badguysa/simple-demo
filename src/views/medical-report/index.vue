<template>
    <h-simple-table
        ref="TableInfo"
        border
        :data-source="dataSource"
        row-key="index"
        :columns="columns"
        :pagination="true"
    >
        <template #fileUrl="{row}">
            <el-space v-if="row.fileUrl" @click="download(row.fileUrl)">下载</el-space>
            <el-space v-else>未上传</el-space>
        </template>
    </h-simple-table>
</template>
<script setup>
import HSimpleTable from '@/components/simple-table.vue'
import { ref, onMounted } from 'vue'
import downfileByUrl from '@/utils/index'
const dataSource= ref([])
const columns = [
    {
        prop: 'index',
        label: '序号'
    },
    {
      prop: 'user_name',
      label: '姓名',
    },
    {
      prop: 'phone_number',
      label: '手机号',
    },
    {
      prop: 'px_type_name',
      label: '体检类型',
    },
    {
      prop: 'px_package_name',
      label: '体检套餐',
    },
    {
      prop: 'fileUrl',
      label: '体检报告',
      scopedSlots: 'fileUrl'
    },
    {
      prop: 'import_time',
      label: '上传日期',
    },
]
onMounted(()=>{
    getInfo()
})

async function getInfo(){
    const { result }  = await getReportInfo()
    if(result){
        dataSource.value = result.data.rows
    }
}
function download(url){
    downfileByUrl(url)
}
</script>
<style lang="scss" scoped>

</style>