<template>
  <header class="header">
    <div class="logo-container">
      <img class="logo" src="../assets/u29.svg" alt="Logo">
    </div>
    <div class="menu-container">
      <el-menu :default-active="activeMenu" class="menu" mode="horizontal" @select="changeActive">
        <router-link  class="border-bt-none" :to="{ name: 'health' }">
          <el-menu-item index="1" ><el-icon><House /></el-icon>健康咨讯</el-menu-item>
        </router-link>
        <router-link class="border-bt-none" :to="{ name: 'examine' }">
          <el-menu-item index="2"><el-icon><Grid /></el-icon>体检套餐</el-menu-item>
        </router-link>
        <router-link class="border-bt-none" :to="{ name: 'reserve' }">
          <el-menu-item index="3"><el-icon><Search /></el-icon>预订信息</el-menu-item>
        </router-link>
        <router-link class="border-bt-none" :to="{ name: 'report' }">
          <el-menu-item index="4"><el-icon><List /></el-icon>体检报告</el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <div class="login-container">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
          <span class="username">{{ username }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import storage from 'store'

const activeMenu = ref('');
const username = ref('John Doe');
const router = useRouter();

onMounted(()=>{
  const active = storage.get(activeMenu)
  if(active){
    activeMenu.value = active
  }else{
    activeMenu.value = 1
  }
})
function handleCommand(command) {
  if (command === 'logout') {
    router.push('/login');
  }
}
function changeActive(e){
  activeMenu.value = String(e)
  storage.set(activeMenu, activeMenu.value)
}
</script>
 
<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo-container {
    flex: 0 0 auto;
    margin-left: 20px;
    .logo {
      height: 40px;
    }
  }
  
  .menu-container {
    flex: 1 1 auto;
    .menu {
      background-color: #fff;
      border-bottom: none;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-menu-item{
        &.is-active {
          color: #4caf50 !important;
          background-color: #d9d9d9;
        }
      }
      .el-menu-item,.el-submenu {
        color: #666;
        &:hover {
          background-color: #f5f5f5;
        }
        
      }
      .el-submenu__title {
        color: #666;
        &:hover {
          color: #333;
        }
      }
      .el-menu-item.is-active,
      .el-submenu.is-active > .el-submenu__title {
        color: #333;
      }
      .el-menu-item.is-active::after {
        border-color: #666;
      }
    }
  }
  
  .login-container {
    flex: 0 0 auto;
    margin-right: 20px;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      color: #666;
      .username {
        margin: 0 10px;
      }
    }
  }
.border-bt-none {
  text-decoration: none;
  border-bottom: none;
}
</style>
  