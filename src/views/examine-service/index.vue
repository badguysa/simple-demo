<template>
    <el-row type="flex" justify="start" align="middle" class="page">
        <el-span style="margin:10px 20px 0 0;">套餐类型:</el-span>
        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
            <el-option
                v-for="item in examineStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </el-row>
    <el-row class="page">
        <el-col :span="8" v-for="(item, index) in list" :key="index">
            <el-row>
                <el-col :span="12">
                    <img class="pic" src="" alt="">
                </el-col>
                <el-col :span="12">
                    <el-row style="margin-bottom: 10px;">套餐名称:{{ item.package_name }}</el-row>
                    <el-row style="margin-bottom: 10px;">套餐类型:{{ item.px_type_name }}</el-row>
                    <el-row style="margin-bottom: 10px;">套餐价格:{{ item.price }}</el-row>
                    <el-row style="margin-bottom: 10px;">套餐内容:{{ item.package_text }}</el-row>
                    <el-button type="primary" style="width:100%;" @click="dialogFormVisible = true">预定</el-button>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

    <el-dialog v-model="dialogFormVisible" title="套餐预订">
        <el-form :model="form" ref="formRef" :rules="rules">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="username">
            <el-input v-model="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model="form.age" autocomplete="off" />
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone_number">
            <el-input v-model="form.phone_number" autocomplete="off" />
        </el-form-item>
        
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
            </el-select>
        </el-form-item>
        <el-form-item label="证件号码" :label-width="formLabelWidth" prop="dep_Number">
            <el-input v-model="form.dep_Number" autocomplete="off" />
        </el-form-item>
        <el-form-item label="体检日期" :label-width="formLabelWidth" prop="create_time">
            <el-date-picker
                v-model="form.create_time"
                type="datetime"
                placeholder="选择体检日期"
            />
        </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="submit">预定</el-button>
        </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, unref, onMounted } from 'vue'
import { examineStatusOptions } from '@/constant/mapConstant'
import { ElMessage } from 'element-plus';

const list = ref([])
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const rules = {
    username: [
      { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    age: [
      { required: true, message: '请输入年龄', trigger: 'blur' }
    ],
    phone_number: [
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ],
    sex: [
      { required: true, message: '请输入性别', trigger: 'blur' }
    ],
    dep_Number: [
      { required: true, message: '请输入证件号码', trigger: 'blur' }
    ],
    create_time: [
      { required: true, message: '请输入体检日期', trigger: 'blur' }
    ],
  }
const form = ref({
  username: '',
  age: '',
  phone_number: '',
  sex: '',
  dep_Number: '',
  create_time: '' ,
})


onMounted(()=>{
    getInfo()
})

function getInfo(){
    list.value = ([
        {
            px_package_id: '2023031120440035',
            package_name: "套餐名称",// 套餐名称
            px_type_name: "",//套餐类型名称
            price: 0,//价格
            package_text: "套餐内容",// 套餐内容
            fileUrl: "http://124.70.80.234:9000/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202210022350232_202303112044A001.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileadmin%2F20230312%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230312T050802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e8520e7dfe32764d616d625232d3d4f434b2ea927bec640899a3330419491aa6",// url
        },
        {
            px_package_id: '2023031120440035',
            package_name: "套餐名称",// 套餐名称
            px_type_name: "",//套餐类型名称
            price: 0,//价格
            package_text: "套餐内容",// 套餐内容
            fileUrl: "http://124.70.80.234:9000/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202210022350232_202303112044A001.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileadmin%2F20230312%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230312T050802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e8520e7dfe32764d616d625232d3d4f434b2ea927bec640899a3330419491aa6",// url
        }
    ])
}
function submit(){
    unref(formRef).validate((valid) => {
      if (valid) {
        console.log('Form submitted:', form.value)
        // sonst { result } =await submitForm(form.value)
        // if(result){
            ElMessage.success('预订成功！')
        // }
        dialogFormVisible.value = false
      }
    })
}
</script>
<style lang="scss" scoped>
.page{
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    .pic{
        width: 150px;
        height: 200px;
        // border: 1px solid red;
    }
}
</style>