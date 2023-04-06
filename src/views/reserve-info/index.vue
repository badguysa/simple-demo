<template>
    <h-simple-table
        ref="TableInfo"
        border
        :data-source="dataSource"
        row-key="index"
        :columns="columns"
        :pagination="true"
    >
        <template #status="{row}">
            {{ reserveStatusMap[row.status] }}
        </template>
    </h-simple-table>
</template>
<script setup>
import HSimpleTable from '@/components/simple-table.vue'
import { ref, onMounted } from 'vue'
import { reserveStatusMap } from '@/constant/mapConstant'
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
      prop: 'price',
      label: '体检价格',
    },
    {
      prop: 'create_time',
      label: '预约时间',
    },
    {
      prop: 'status',
      label: '体检状态',
      scopedSlots: 'status'
    },
]
onMounted(()=>{
    getInfo()
})

async function getInfo(){
    const { result }  = await getReserveInfo()
    if(result){
        dataSource.value = result.data.rows
    }
}
</script>
<style lang="scss" scoped>

</style>