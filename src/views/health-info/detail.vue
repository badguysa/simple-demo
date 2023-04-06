<template>
    <div>
        <div class="detail">
          <div class="detail_header" @click="back">
            &lt;&nbsp;健康咨讯/详情
          </div>
          <div class="main_content">
            <div class="left_content">
              <div class="title">{{ detail_data.title }}</div>
              <el-row type="flex" justify="center" align="middle">
                  <div class="time">创建人：{{ detail_data.createBy }}</div>  
                  <div class="time">发布时间：{{ detail_data.createime }}</div>
              </el-row>
              <div class="article">{{ detail_data.content }}</div>
            </div>
          </div>
        </div>
  </div>
  </template>
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  
  onMounted(async () => {
    getDetail(route.query.id)
  })
  
  async function getDetail(id) {
    // const { result } = await reqArticleDetail(id)
    // if(result) {
    //   detail_data.value = result.data
    // }
    detail_data.value = {
            id: '2023031120440035',
            title: '标题',
            content: '内容',
            createBy: "创建人",
            createime: "创建时间",
            fileUrl: "http://124.70.80.234:9000/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202210022350232_202303112044A001.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileadmin%2F20230312%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230312T050802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e8520e7dfe32764d616d625232d3d4f434b2ea927bec640899a3330419491aa6",// url
        }
  }
  function back() {
    router.back()
  }
  const detail_data = ref({
  })
  
  async function detail(_id){
    if(!_id) {
      return
    }
    // await nextTick(() => {router.push(`/hgo-movement-detail?id=${_id}`)}) 
     getDetail(_id)
  }
  
  </script>
  <style lang="scss" scoped>
  .detail{
    // padding: 0 120px;
    margin: 0 auto;
    width: 1200px;
    .detail_header{
      width: 80%;
      height: 24px;
      margin: 23px auto;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: 400;
      color: #000000;
      cursor: pointer;
      &:hover{
        color: #FF7B07;
      }
    }
    .main_content{
      display: flex;
      justify-content: center;
      .left_content{
        width: 800px;
        min-height: 500px;
        border-bottom: 1px solid #EEF0F9;
        .title{
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 33px;
        }
        .time{
          margin: 10px 15px 20px 15px;
          height: 22px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9293A1;
          line-height: 22px;
        }
        .summary{
          background: #F9FAFE;
          padding: 20px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #6A6E74;
        }
        .article{
          margin-top: 17px;
          margin-bottom: 10px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #51565D;
          line-height: 26px;
        }
        .pic{
          padding: 40px;
          img{
            width: 460px;
            height: 280px;
            margin: 0 130px;
          }
        }
        .bottom_right{
          display: flex;
          // width: 125px;
          position: relative;
          height: 70px;
          text-align: center;
          justify-content: end;
          line-height: 22px;
          align-items: center;
          border-bottom: 1px solid #EEF0F9;
          .dianzan-title {
            position: absolute;
            animation-duration: 1.4s;
            color: #ff7b07;
            right: 0;
            top: 6px;
          }
          p{
              padding-left: 2px;
              line-height: 22px;
          }
          img{
              width: 18px;
              height: 18px;
              cursor: pointer;
          }
          .second_img{
              margin-left: 20px;
          }
        }
        .other_article{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0 80px 0;
          .other_article_title{
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 22px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
            &:hover{
              color: #FF7B07;
            }
          }
        }
      }
      .right_content{
        width: 300px;
        margin-left: 100px;
        .lastest_article{
          margin-top: 4px;
          margin-bottom: 10px;
          height: 33px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 33px;
        }
        .new_article{
          border-bottom: 1px solid #EEF0F9;
          .new_article_title{
            margin-top: 20px;
            height: 28px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            /* 限制在一个块元素显示的文本的行数 */
            /* -webkit-line-clamp 其实是一个不规范属性，使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；*/
            -webkit-line-clamp: 2;
            /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-box-orient: vertical;
            cursor: pointer;
            &:hover{
              color: #FF7B07;
            }
          }
          .bottom_right{
            display: flex;
            height: 42px;
            text-align: center;
            justify-content: flex-start;
            line-height: 22px;
            align-items: center;
            border-bottom: 1px solid #EEF0F9;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #9293A1;
            padding-bottom: 10px;
            p{
                padding-left: 2px;
                line-height: 22px;
            }
            img{
                width: 18px;
                height: 18px;
            }
            .second_img{
                margin-left: 20px;
            }
          }
        }
      }
    }
  }
  
 
  </style>