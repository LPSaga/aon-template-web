<template>
	<div class="page flex-col">
		<!-- <van-nav-bar class="nav-bar_1 NavBar">
			<template #left>
				<img class="icon_1" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG72433b025d5f5647133dd221bbe9f226.png" />
			</template>
<template #title>
				<span class="text_1">Task Center</span>
			</template>
<template #right>
				<img class="single-avatar_1" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG5dd24eb3197845f254e1e5279e78eb0d.png" />
			</template>
</van-nav-bar> -->
		<div class="box_1 flex-col container">
			<div class="uni-form-item tab-con">
				<van-tabs class="tabs_1 Tabs" v-model="Tabs_tabs_1">
					<van-tab v-for="(item, index) in ['Daily Tasks', 'Reward Tasks']" :key="index"
						:title="item"></van-tab>
				</van-tabs>
			</div>

			<div class="section_1 flex-col justify-between">
				<div class="box_4 flex-col">
					<div class="group_1 flex-row justify-between">
						<div class="section_2 flex-row">
							<div class="image-text_1 flex-row justify-between">
								<img class="thumbnail_1" referrerpolicy="no-referrer"
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNGbcd57f0c45b508ad281e49e6606f1b93.png" />
								<span class="text-group_1">+100</span>
							</div>
						</div>
						<span class="text_4">2024.1.08-2024.7.08</span>
					</div>
					<div class="group_2 flex-row justify-between">
						<span class="text_5">Follow The AON Twitter.</span>
						<button class="button_1 flex-col" @click="onClick_1">
							<span class="text_6">go</span>
						</button>
					</div>
				</div>
				<div class="box_5 flex-col">
					<div class="group_3 flex-row justify-between">
						<div class="block_1 flex-row">
							<div class="image-text_2 flex-row justify-between">
								<img class="thumbnail_2" referrerpolicy="no-referrer"
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNGbcd57f0c45b508ad281e49e6606f1b93.png" />
								<span class="text-group_2">+100</span>
							</div>
						</div>
						<span class="text_7">2024.1.08-2024.7.08</span>
					</div>
					<div class="group_4 flex-row justify-between">
						<span class="text_8">Join The AON Telegram.</span>
						<button class="button_2 flex-col" @click="onClick_2">
							<span class="text_9">Inspect</span>
						</button>
					</div>
				</div>
				<div class="box_6 flex-col">
					<div class="box_7 flex-row justify-between">
						<div class="text-wrapper_2 flex-col">
							<span class="paragraph_1">Completed<br /></span>
						</div>
						<span class="text_10">2024.1.08-2024.7.08</span>
					</div>
					<span class="text_11">Retweet Comments On One Of These AON Tweets.</span>
				</div>
			</div>
		</div>

		<div class="modal-con flex-col justify-center" v-if="false">
			<div class="content">
				<!-- <img class="close-icon" src="../assets/icons/close.png" alt=""> -->
				<!-- <img class="tips-icon" src="../assets/icons/tipsIcon.png" alt=""> -->
				<p class="desc">
					After completing the task requirements, please return to the task center to verify the task. If the
					verification is successful, you will receive a reward.
				</p>

				<div class="btn flex-row justify-center align-center">Go</div>
			</div>

			<div class="check-con flex-row justify-between">
				<input type="checkbox" class="image-wrapper_1" v-model="notShowTips" id="check" />
				<label for="check" class="text_7">Do not display this prompt again</label>
			</div>
		</div>

		<div class="modal-con flex-col justify-center" v-if="false">
			<div class="content">
				<!-- <img class="close-icon" src="../assets/icons/close.png" alt="">
				<img class="tips-icon" src="../assets/icons/tipsIcon2.png" alt=""> -->
				<p class="desc">
					Your task has been completed and the reward has been issued to your account.
				</p>

				<div class="btn flex-row justify-center align-center">Complete</div>
			</div>
		</div>

		<div class="modal-con flex-col justify-center" v-if="false">
			<div class="content">
				<!-- <img class="close-icon" src="../assets/icons/close.png" alt="">
				<img class="tips-icon" src="../assets/icons/tipsIcon3.png" alt=""> -->
				<p class="desc">
					Your task verification failed. Please check if you have completed the required actions for the task.
				</p>

				<div class="btn flex-row justify-center align-center">Redo This Task</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
const Tabs_tabs_1 = ref(0)
const constants = ref({})
const notShowTips = ref(false)

function onClick_1() {
	alert(1);
}
function onClick_2() {
	alert(1);
}
</script>
<style lang="scss" scoped>
.page {
	background-color: rgba(20, 20, 20, 1);
	position: relative;
	width: 100vw;
	overflow: hidden;

	.modal-con {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 80vh;
		background: rgba(20, 20, 20, 0.93);
		display: flex;
		align-items: center;
		z-index: 999;

		padding: 0 5.07vw;

		.content {
			width: 100%;
			height: auto;
			background: #3D3D3D;
			border-radius: 4.27vw;
			border: .1vw solid #707070;
			position: relative;
			padding: 21.33vw 3.2vw 5.33vw;

			.close-icon {
				position: absolute;
				right: 2.13vw;
				top: -7.47vw;
				height: 6.4vw;
				width: 6.4vw;
			}

			.tips-icon {
				position: absolute;
				top: -17.07vw;
				left: 50%;
				transform: translateX(-50%);
				height: 32vw;
				width: 32vw;
			}

			p {
				font-family: Roboto, Roboto;
				font-weight: 400;
				font-size: 3.73vw;
				color: #FFFFFF;
				text-align: left;
				font-style: normal;
				text-transform: none;
			}

			.btn {
				width: 100%;
				height: 8.53vw;
				background: linear-gradient(180deg, #43E8A0 0%, #8AF25F 100%);
				border-radius: 21.33vw;
				border: .27vw solid #141414;
				margin-top: 6.4vw;

				font-family: Roboto, Roboto;
				font-weight: 900;
				font-size: 4.27vw;
				color: #141414;
				text-align: center;
				font-style: normal;
				text-transform: none;
			}
		}

		.check-con {
			margin-top: 6.4vw;

			.image-wrapper_1 {
				height: 4.27vw;
				width: 4.27vw;
				border-radius: 50%;
				margin-right: 1.07vw;
			}

			input:checked {
				background-color: #2196F3;
				border-color: #2196F3;
			}

			.text_7 {
				font-family: Roboto, Roboto;
				font-weight: 400;
				font-size: 3.2vw;
				color: #FFFFFF;
				text-align: left;
				font-style: normal;
				text-transform: none;
			}
		}
	}

	.nav-bar_1 {
		background-color: rgba(255, 255, 255, 0);
		width: 100vw;
		height: 11.74vw;

		.icon_1 {
			width: 5.34vw;
			height: 5.34vw;
			margin-top: 3.2vw;
		}

		.text_1 {
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 5.33vw;
			font-family: Roboto-Black;
			font-weight: normal;
			text-align: center;
			white-space: nowrap;
		}

		.single-avatar_1 {
			width: 7.47vw;
			height: 7.47vw;
			margin-top: 2.14vw;
			margin-right: 0;
		}

		.van-nav-bar__content {
			height: 100%;
		}

		.van-nav-bar__title {
			line-height: 6.14vw;
		}

		.van-nav-bar__left {
			padding: 0 0 0 5.33vw;
			align-items: start;
		}

		.van-nav-bar__right {
			padding: 0 5.06vw 0 0;
			align-items: start;
		}
	}

	.box_1 {
		width: 100vw;
		height: 184.27vw;
		margin-bottom: 0.27vw;

		.tab-con {
			margin: 6.4vw 0;
		}

		.tabs_1 {
			background-color: rgba(255, 255, 255, 0);
			position: relative;
			width: 89.6vw;
			height: 11.74vw;

			.text-wrapper_1 {
				width: 72.54vw;
				height: 4.8vw;
				margin: 2.13vw 0 0 8.53vw;

				.text_2 {
					width: 27.74vw;
					height: 3.74vw;
					overflow-wrap: break-word;
					color: rgba(138, 135, 135, 1);
					font-size: 3.2vw;
					font-family: Roboto-Regular;
					font-weight: normal;
					text-align: center;
					white-space: nowrap;
					line-height: 3.74vw;
					margin-top: 0.54vw;
				}

				.text_3 {
					width: 27.74vw;
					height: 4.8vw;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 3.73vw;
					font-family: Roboto-Bold;
					font-weight: 700;
					text-align: center;
					white-space: nowrap;
					line-height: 4.27vw;
				}
			}

			.box_2 {
				background-color: rgba(61, 61, 61, 1);
				width: 89.6vw;
				height: 0.27vw;
				margin-top: 4.54vw;
			}

			.box_3 {
				background-color: rgba(67, 232, 160, 1);
				position: absolute;
				left: 44.8vw;
				top: 10.67vw;
				width: 44.8vw;
				height: 1.07vw;
			}

			.van-tab {
				flex: auto;
				font-size: 14px;
			}

			.van-tabs__wrap {
				height: 11.74vw;
			}

			.van-tabs__nav {
				padding-left: 0;
				padding-right: 0;
			}

			.van-tab--active {
				font-size: 12px;
			}
		}

		.section_1 {
			width: 100%;

			.box_4 {
				background-color: rgba(61, 61, 61, 1);
				border-radius: 8px;
				height: 28.8vw;
				border: 1px solid rgba(67, 232, 160, 1);

				.group_1 {
					background-color: rgba(85, 79, 79, 1);
					border-radius: 8px 8px 0px 0px;
					width: 100%;
					height: 8.54vw;
					border: 1px solid rgba(67, 232, 160, 1);

					.section_2 {
						width: 36.27vw;
						height: 8.54vw;
						background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG4f85640e4913bbd651d91af0f5b887b3.png) 100% no-repeat;
						background-size: 100% 100%;

						.image-text_1 {
							height: 5.34vw;
							margin: 1.6vw 0 0 3.2vw;

							.thumbnail_1 {
								min-width: 5.34vw;
								height: 5.34vw;
							}

							.text-group_1 {
								width: 10.4vw;
								height: 4.27vw;
								overflow-wrap: break-word;
								color: rgba(20, 20, 20, 1);
								font-size: 3.73vw;
								font-family: Roboto-Bold;
								font-weight: 700;
								text-align: center;
								white-space: nowrap;
								line-height: 4.27vw;
								margin-top: 0.54vw;
							}
						}
					}

					.text_4 {
						height: 3.74vw;
						overflow-wrap: break-word;
						color: rgba(191, 191, 191, 1);
						font-size: 2.66vw;
						font-family: Roboto-Regular;
						font-weight: normal;
						text-align: right;
						white-space: nowrap;
						line-height: 3.2vw;
						margin: 2.4vw 3.2vw 0 8.53vw;
					}
				}

				.group_2 {
					height: 12.8vw;
					margin: 3.73vw 3.2vw;

					.text_5 {
						width: 60.8vw;
						height: 12.8vw;
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 3.73vw;
						font-family: Roboto-Regular;
						font-weight: normal;
						text-align: left;
						line-height: 4.27vw;
					}

					.button_1 {
						background-image: linear-gradient(180deg,
								rgba(67, 232, 160, 1) 0,
								rgba(138, 242, 95, 1) 100%);
						border-radius: 80px;
						height: 6.4vw;
						border: 1px solid rgba(20, 20, 20, 1);
						width: 19.2vw;

						.text_6 {
							width: 14.94vw;
							height: 4.8vw;
							overflow-wrap: break-word;
							color: rgba(20, 20, 20, 1);
							font-size: 3.73vw;
							font-family: Roboto-Bold;
							font-weight: 700;
							text-align: center;
							white-space: nowrap;
							line-height: 4.27vw;
						}
					}
				}
			}

			.box_5 {
				background-color: rgba(61, 61, 61, 1);
				border-radius: 8px;
				height: 28.8vw;
				border: 1px solid rgba(67, 232, 160, 1);
				margin-top: 6.4vw;

				.group_3 {
					background-color: rgba(85, 79, 79, 1);
					border-radius: 8px 8px 0px 0px;
					height: 8.54vw;
					border: 1px solid rgba(67, 232, 160, 1);

					.block_1 {
						width: 36.27vw;
						height: 8.54vw;
						background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG4f85640e4913bbd651d91af0f5b887b3.png) 100% no-repeat;
						background-size: 100% 100%;

						.image-text_2 {
							width: 16.27vw;
							height: 5.34vw;
							margin: 1.6vw 0 0 3.2vw;

							.thumbnail_2 {
								width: 5.34vw;
								height: 5.34vw;
							}

							.text-group_2 {
								width: 10.4vw;
								height: 4.27vw;
								overflow-wrap: break-word;
								color: rgba(20, 20, 20, 1);
								font-size: 3.73vw;
								font-family: Roboto-Bold;
								font-weight: 700;
								text-align: center;
								white-space: nowrap;
								line-height: 4.27vw;
								margin-top: 0.54vw;
							}
						}
					}

					.text_7 {
						height: 3.74vw;
						overflow-wrap: break-word;
						color: rgba(191, 191, 191, 1);
						font-size: 2.66vw;
						font-family: Roboto-Regular;
						font-weight: normal;
						text-align: right;
						white-space: nowrap;
						line-height: 3.2vw;
						margin: 2.4vw 3.2vw 0 8.53vw;
					}
				}

				.group_4 {
					height: 12.8vw;
					margin: 3.73vw 3.2vw;

					.text_8 {
						width: 60.8vw;
						height: 12.8vw;
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 3.73vw;
						font-family: Roboto-Regular;
						font-weight: normal;
						text-align: left;
						line-height: 4.27vw;
					}

					.button_2 {
						background-image: linear-gradient(180deg,
								rgba(232, 210, 67, 1) 0,
								rgba(138, 242, 95, 1) 100%);
						border-radius: 80px;
						height: 6.4vw;
						border: 1px solid rgba(20, 20, 20, 1);
						width: 19.2vw;

						.text_9 {
							width: 14.94vw;
							height: 4.8vw;
							overflow-wrap: break-word;
							color: rgba(20, 20, 20, 1);
							font-size: 3.73vw;
							font-family: Roboto-Bold;
							font-weight: 700;
							text-align: center;
							white-space: nowrap;
							line-height: 4.27vw;
						}
					}
				}
			}

			.box_6 {
				background-color: rgba(61, 61, 61, 1);
				border-radius: 8px;
				height: 28.8vw;
				border: 1px solid rgba(67, 232, 160, 1);
				margin-top: 6.4vw;

				.box_7 {
					background-color: rgba(85, 79, 79, 1);
					border-radius: 8px 8px 0px 0px;
					height: 8.54vw;
					border: 1px solid rgba(67, 232, 160, 1);

					.text-wrapper_2 {
						height: 8.54vw;
						background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/MasterDDSSlicePNG0267cc97c22d4889ff4fff57a7d36a0e.png) 100% no-repeat;
						background-size: 100% 100%;
						width: 36.27vw;

						.paragraph_1 {
							width: 21.07vw;
							height: 4.27vw;
							overflow-wrap: break-word;
							color: rgba(67, 232, 160, 1);
							font-size: 3.73vw;
							font-family: Roboto-Bold;
							font-weight: 700;
							text-align: center;
							white-space: nowrap;
							line-height: 4.27vw;
							margin: 2.13vw 0 0 3.2vw;
						}
					}

					.text_10 {
						height: 3.74vw;
						overflow-wrap: break-word;
						color: rgba(191, 191, 191, 1);
						font-size: 2.66vw;
						font-family: Roboto-Regular;
						font-weight: normal;
						text-align: right;
						white-space: nowrap;
						line-height: 3.2vw;
						margin: 2.4vw 3.2vw 0 8.53vw;
					}
				}

				.text_11 {
					height: 12.8vw;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 3.73vw;
					font-family: Roboto-Regular;
					font-weight: normal;
					text-align: left;
					line-height: 4.27vw;
					margin: 3.73vw 3.2vw;
				}
			}
		}
	}
}
</style>