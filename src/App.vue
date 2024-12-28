<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';


</script>

<template>
	<Header></Header>

	<RouterView />
</template>

<style>
:root:root {
	--van-radio-label-color: #fff;
}

.container {
	padding: 0 6.4vw 18.4vw;
	margin: 0;
}

.bottom_btn {
	width: 100%;
	position: fixed;
	/* bottom: 4.27vw; */
	bottom: 0;
	left: 0;
	padding: 2.67vw 6.4vw;
	height: 13.87vw;
	background: #1C1C1C;
	box-shadow: 0px -1.07vw 4.27vw .27vw rgba(87, 87, 87, 0.18);
	box-sizing: border-box;
	z-index: 9;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.bottom_btn uni-button {
	margin: 0;
}

button {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	border: none;
}

.uni-form-item .van-uploader__wrapper,
.uni-form-item .van-uploader__input-wrapper {
	width: 100%;
}

.uni-form-item .content input {
	width: 100%;
	height: 100%;
	font-size: 3.73vw;
	font-family: Roboto-Regular;
	border: none;
	outline: none;
	background-color: transparent;
}

.uni-form-item .content .van-cell {
	padding-left: 0;
	padding-right: 0;
}

.uni-form-item .content .van-field {
	width: 100%;
	height: 100%;

	font-family: Roboto-Regular;
	border: none;
	outline: none;
	background-color: transparent;
}

.uni-form-item .content .van-cell__value {
	color: #fff;
	font-size: 3.73vw;
}

.uni-form-item .content .van-cell__value .van-field__control {
	color: #fff;
}

.uni-form-item .content .van-dropdown-menu .van-dropdown-menu__bar {
	height: 14.93vw;
}

.uni-form-item .content .van-dropdown-menu {
	width: 100%;
}

.uni-form-item .content .van-dropdown-menu__bar {
	background: transparent;
}

.uni-form-item .content .van-dropdown-menu__title {
	width: 100%;
	color: #fff;
}

.uni-form-item .content .van-dropdown-menu__title:after {
	right: 0;
}

.uni-form-item .content .van-dropdown-item__content {
	background: #1C1C1C;
	padding: 0 6.4vw;
	left: 50%;
	transform: translateX(-50%);
}

.uni-form-item .content .van-dropdown-item__option {
	background-color: #554F4F;
	padding-left: 3.2vw;
	padding-right: 3.2vw;
	color: #BFBFBF;
}

.uni-form-item .content .van-dropdown-item__option--active {
	color: #fff;
}

.uni-form-item .content .van-picker {
	background: #554F4F;
}

.uni-form-item .content .van-picker__confirm,
.van-picker-column__item {
	color: #fff;
}

.uni-form-item .content .van-picker__mask {
	background-image: none;
}

.uni-form-item .content .van-hairline-unset--top-bottom:after {
	border: none;
	box-shadow: 0px -5px 16px 2px rgba(237, 233, 233, 0.28);
}

.uni-form-item .content .van-cell:after {
	border: none;
}

.uni-form-item .van-tabs__wrap{
	margin-bottom: 6.4vw;
}

.uni-form-item .van-tabs__nav {
	background: transparent;
}

.uni-form-item .van-tab--active {
	color: #36CFC9;
}

.uni-form-item .van-tabs__line {
	/* background: #36CFC9; */
	/* width: 100%; */
	display: none;
	transform: translateX(85px) translateX(-50%);
	transition-duration: 0.3s;
}

input:-internal-autofill-selected {
	background-color: #3B3939 !important;
}

.van-tab__text--ellipsis {
	padding-bottom: 2.67vw;
	border-bottom: .53vw solid transparent;

	font-family: Roboto-Regular;
	font-weight: 400;
	font-size: 3.73vw;
	color: #FFFFFF;
	text-align: center;
	font-style: normal;
	text-transform: none;

}

.van-tab--active .van-tab__text--ellipsis {
	width: 100%;
	text-align: center;
	border-bottom: .53vw solid #36CFC9;
	font-family: Roboto-Bold;
	color:#36CFC9;

}

input::placeholder {
  color: #fff !important;
}
</style>