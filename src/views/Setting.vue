<template>
  <div class="page flex-col">
    <div class="block_1 flex-row">
      <div class="group_1 flex-col">
        <div class="group_2 flex-row justify-between">
          <img class="label_1" referrerpolicy="no-referrer"
            src="https://lanhu-oss.lanhuapp.com/MasterDDSSlicePNGd1824a8f6f10d8ca55d129f60ff453cc.png" @click="back" />
          <span class="paragraph_1">Edit&nbsp;Information<br /></span>
        </div>
        <div class="image-wrapper_1 flex-row justify-between">
          <img class="image_1" referrerpolicy="no-referrer"
            src="https://lanhu-oss.lanhuapp.com/MasterDDSSlicePNG2dba7467c634fc88e96803f4a9347314.png" />
          <!-- <img
              class="label_2"
              referrerpolicy="no-referrer"
              src="https://lanhu-oss.lanhuapp.com/MasterDDSSlicePNG41527f4553a23c34e5c757ce02c273ae.png"
            /> -->
        </div>
        <span class="text_1">user&nbsp;name</span>
        <div class="text-wrapper_1 flex-col">
          <input class="text_2" v-model="user_name" placeholder="user name" />
        </div>
      </div>
    </div>
    <div class="bottom_btn">
      <button @click="save">
        Save
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { User } from 'aonweb'
import { showToast, showLoadingToast, closeToast } from 'vant';
import { update_user_name } from '../lib/loadApp'

const router = useRouter()
const route = useRoute()


const user_name = ref('')
let user_id = null

const back = () => {
  router.back()
}

const save = async () => {
  console.log('save', user_name.value, user_id)
  try {
    let data = await update_user_name(user_name.value, user_id)
    router.back();
  } catch (error) {
    showToast(error.message)
  }
}

const get_userInfo = async () => {
  let user = new User()
  let login_user = await user.userinfo()
  user_id = login_user.id
  user_name.value = 'user-' + getSubstring(login_user.id)
  if (login_user && login_user.profiles && login_user.profiles.username && login_user.profiles.username.length) {
    user_name.value = login_user.profiles.username
  }
}

function getSubstring(str) {
  if (str.length > 6) {
    return str.substring(0, 6);
  } else {
    return str;
  }
}



onMounted(() => {
  get_userInfo()
})


</script>

<style scoped>
.page {
  background-color: rgba(20, 20, 20, 1);
  position: relative;
  width: 100vw;
  overflow: hidden;

  .block_1 {
    width: 100vw;

    .group_1 {
      width: 100vw;

      .group_2 {
        width: 80vw;
        height: 7.47vw;
        margin: 2.13vw 0 0 4.8vw;

        .label_1 {
          width: 7.47vw;
          height: 7.47vw;
        }

        .paragraph_1 {
          width: 69.34vw;
          height: 7.47vw;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 5.33vw;
          font-family: Roboto Flex-Bold;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
          line-height: 7.47vw;
        }
      }

      .image-wrapper_1 {
        width: 38.4vw;
        height: 26.67vw;
        margin: 8.53vw 0 0 4.8vw;

        .image_1 {
          width: 26.67vw;
          height: 26.67vw;
        }

        .label_2 {
          width: 6.4vw;
          height: 6.4vw;
          margin-top: 20.27vw;
        }
      }

      .text_1 {
        width: 90.67vw;
        height: 6.4vw;
        overflow-wrap: break-word;
        color: rgba(191, 191, 191, 1);
        font-size: 4.26vw;
        font-family: Roboto Flex-Bold;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 6.4vw;
        margin: 6.4vw 0 0 4.8vw;
      }

      .text-wrapper_1 {
        background-color: rgba(85, 79, 79, 1);
        height: 11.74vw;
        width: 90.67vw;
        margin: 2.13vw 0 0 4.8vw;

        .text_2 {
          width: 84.27vw;
          height: 6.4vw;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          background-color: rgba(85, 79, 79, 1);
          font-size: 4.26vw;
          font-family: Roboto Flex-Regular;
          font-weight: normal;
          text-align: left;
          white-space: nowrap;
          line-height: 6.4vw;
          margin: 2.66vw 0 0 3.2vw;
        }
      }
    }
  }

  button {
    width: 100%;
    height: 9.07vw;
    background: linear-gradient(117deg, #43E8A0 0%, #8AF25F 100%);
    box-shadow: 2.13vw 2.13vw 4.27vw .27vw rgba(0, 0, 0, 0.32);

    border-radius: 1.07vw;

    font-family: Roboto-Black;
    font-size: 4.27vw;
    font-weight: bold;
    color: #1C1C20;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}

@media screen and (min-width: 1024px) {
  .page {
    background-color: rgba(20, 20, 20, 1);
    position: relative;
    width: 375px;
    overflow: hidden;

    .block_1 {
      width: 375px;

      .group_1 {
        width: 375px;

        .group_2 {
          width: 300px;
          height: 28px;
          margin: 8px 0 0 18px;

          .label_1 {
            width: 28px;
            height: 28px;
          }

          .paragraph_1 {
            width: 260px;
            height: 28px;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 20px;
            font-family: Roboto Flex-Bold;
            font-weight: 700;
            text-align: center;
            white-space: nowrap;
            line-height: 28px;
          }
        }

        .image-wrapper_1 {
          width: 144px;
          height: 100px;
          margin: 32px 0 0 18px;

          .image_1 {
            width: 100px;
            height: 100px;
          }

          .label_2 {
            width: 24px;
            height: 24px;
            margin-top: 76px;
          }
        }

        .text_1 {
          width: 340px;
          height: 24px;
          overflow-wrap: break-word;
          color: rgba(191, 191, 191, 1);
          font-size: 16px;
          font-family: Roboto Flex-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 24px;
          margin: 24px 0 0 18px;
        }

        .text-wrapper_1 {
          background-color: rgba(85, 79, 79, 1);
          height: 44px;
          width: 340px;
          margin: 8px 0 416px 18px;

          .text_2 {
            width: 315px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            font-family: Roboto Flex-Regular;
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 24px;
            margin: 10px 0 0 12px;
          }
        }
      }


    }

    button {
      width: 100%;
      height: 34px;
      background: linear-gradient(117deg, #43E8A0 0%, #8AF25F 100%);
      box-shadow: 8px 8px 16px 1px rgba(0, 0, 0, 0.32);

      border-radius: 4px;
      font-size: 16px;
    }
  }
}
</style>