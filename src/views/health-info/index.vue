<template>
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in list" :key="item.id">
        <!-- <img :src="item.fileUrl" alt=""> -->
        <img src="@/assets/u14.png" alt="" @click="toDetail(item.id)"> 
      </el-carousel-item>
    </el-carousel>
</template>
<script setup>
import {  ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const list = ref([
        {
            "id": 2023031120440035,
            "fileUrl": "http://124.70.80.234:9000/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202210022350232_202303112044A001.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileadmin%2F20230312%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230312T050802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e8520e7dfe32764d616d625232d3d4f434b2ea927bec640899a3330419491aa6",// minio外链
        },
        {
            "id": 2023031120440034,
            "fileUrl": "http://124.70.80.234:9000/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202210022350232_202303112044A001.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileadmin%2F20230312%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230312T050802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e8520e7dfe32764d616d625232d3d4f434b2ea927bec640899a3330419491aa6",// minio外链
        }
    ])

function toDetail(id){
    router.push(`/health/detail?id=${id}`)
}
</script>
<style lang="scss" scoped>
:deep(.el-carousel__container){
    height: calc(100vh - 100px);
}
</style>