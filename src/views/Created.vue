<template>
	<div class="">
		<div class="container created">
			<div class="resCon" ref="containerRef">
				<img class="res_img" :src="imageUrl" mode=""></img>
				<!-- <canvas ref="canvasRef"></canvas> -->
			</div>

			<div class="handles">
				<div class="download">
					<img src="../assets/icons/download.png" @click="downloadImage" mode=""></img>
				</div>
				<!-- <div class="download share">
					<img src="../assets/icons/share.png" mode=""></img>
				</div> -->
			</div>


			<div class="bottom_btn">
				<button class="personalCenter" @click="goUser">Personal Center</button>
				<button class="createMore" @click="goToCreate">Generate More</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	ref,
	onMounted
} from 'vue';
import { useRoute, useRouter } from 'vue-router'
import bus from '../eventBus.js';
const router = useRouter()
const route = useRoute()

const imageUrl = ref('')
const canvasWidth = ref(100)
const canvasHeight = ref(200)
const canvasRef = ref(null);
const containerRef = ref(null);


function goToCreate() {
	router.push({
		path: '/'
	})
}

const goUser = () => {
	router.push('/user')
};

function getFileExtension(url) {
	// 创建一个 URL 对象
	const urlObj = new URL(url);
	// 获取路径部分
	const pathname = urlObj.pathname;
	// 提取文件名
	const filename = pathname.split('/').pop();
	// 提取文件后缀
	const extension = filename.split('.').pop();

	// 如果没有后缀名，返回空字符串
	if (filename === extension) {
		return '';
	}

	return extension;
}

async function downloadImage() {
	try {
		// Fetch the image as a blob
		const response = await fetch(imageUrl.value);
		const blob = await response.blob();


		// Create a link element and set the URL using the blob
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		const extension = getFileExtension(imageUrl.value);
		link.download = 'downloaded-file.' + extension; // 设置下载的文件名

		// Append the link to the body and click it to trigger the download
		document.body.appendChild(link);
		link.click();

		// Clean up by removing the link element
		document.body.removeChild(link);
	} catch (error) {
		console.error('Error downloading the image:', error);
	}
}

onMounted(() => {
	imageUrl.value = route.query.url;
	bus.emit('get_balance', "prediction");
})
</script>

<style scoped>
.created {
	padding-top: 8.53vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.resCon {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	min-height: 121.07vw;
	background: #3D3D3D;
}

.res_img {
	width: 100%;
	height: auto;
	max-height: 153.6vw;
}

.handles {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
}

.download {
	/* position: fixed;
	bottom: 23.73vw;
	left: 50%;
	transform: translateX(-50%); */
	width: 8.53vw;
	height: 8.53vw;
	border-radius: 100%;
	background: linear-gradient(180deg, #141414 0%, #3D3D3D 100%);
	border: 2px solid #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 6.4vw;
	margin-left: 5.33vw;
}

.download img {
	height: 5.33vw;
	width: 5.33vw;
}

.bottom_btn {
	padding: 2.67vw 4.53vw;
}

button {
	font-family: Roboto-Black;
	font-weight: 900;
	font-size: 4.27vw;
	color: #1C1C20;
	text-align: center;
	font-style: normal;
	text-transform: none;

	width: 42.67vw;
	height: 8.53vw;
	
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.createMore {
	background: linear-gradient(117deg, #43E8A0 0%, #8AF25F 100%);
	box-shadow: 2.13vw 2.13vw 4.27vw .27vw rgba(0, 0, 0, 0.32);
	border-radius: 1.07vw;
}

.personalCenter {

	background: linear-gradient(117deg, #36CFC9 0%, #EF81FF 100%);
	box-shadow: 2.13vw 2.13vw 4.27vw .27vw rgba(0, 0, 0, 0.32);
	border-radius: 1.07vw;
}
</style>