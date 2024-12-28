<template>
    <div>
      <textarea v-model="tweetText" placeholder="输入推文内容"></textarea>
      <input type="file" @change="handleFileUpload" />
      <button @click="sendTweet">发送推文</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        tweetText: '',
        selectedFile: null
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0];
      },
      async sendTweet() {
        // 这里需要填入你申请到的真实的Bearer Token
        const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAGtMxgEAAAAAYzWFrhAznfvBjHjHdyaV%2B60aNMw%3DliBPtuHTyOHLr7ztekswr5F7GlVE6Hxp62oVU0ckB0nCrcERt6';
        const headers = {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        };
        const formData = new FormData();
        formData.append('text', this.tweetText);
        if (this.selectedFile) {
          formData.append('media', this.selectedFile);
        }
        try {
          const response = await axios.post('https://api.twitter.com/2/tweets', formData, {
            headers: headers
          });
          console.log(response.data);
          // 可以在这里添加成功提示等逻辑，比如弹出提示框告知用户推文发送成功
        } catch (error) {
          console.error(error);
          // 同样可以添加错误提示逻辑，比如弹出框显示错误信息
        }
      }
    }
  };
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }
  </style>