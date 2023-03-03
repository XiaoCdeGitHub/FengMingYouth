<template>
	<view class="container">
		<view class="my-head">
			<view class="head-nav">
				<view class="nav-box">
					<u-avatar :src="avatar_src"></u-avatar>
					{{user_name}}
					<view class="imgs-box">
						<img src="/static/icon/u358.png" alt="">
					</view>

				</view>
			</view>
			<view class="head-swiper">
				<u-swiper :list="list3" previousMargin="30" nextMargin="30" circular :autoplay="true" radius="5"
					bgColor="#ffffff" height="340rpx"></u-swiper>

			</view>
			<view class="head-search-box">
				<u-search height="100rpx" bgColor="white" :showAction="false" placeholder="搜索院校" :clearabled="true" v-model="keyword">
				</u-search>
				<view class="head-select-box">
					<u-picker :show="show" :columns="columns"></u-picker>
							<u-button @click="show = true">打开</u-button>
				</view>
			</view>
			<view class="classify-box">
				<view class="classify-item-box" @click="clickClassify" >
					<img src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u275.svg" alt="">
					<view class="classify-text">资料库</view>
				</view>
				<view class="classify-item-box">
					<img class="megagame-img" src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u278.png" alt="">
					<view class="classify-text">
						比赛专区
					</view>
				</view>
				<view class="classify-item-box">
					<img src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u281.svg" alt="">
					<view class="classify-text">
						校园墙
					</view>
				</view>
			</view>
		</view>
		<view class="my-body">
			<view class="body-title">
				<view class="title-text">
					快车速递
				</view>

				<img class="title-img" src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u308.svg" alt="">

			</view>
			<view class="main-body" v-for="(listItem,listIndex) in teamList" :key="listIndex" >
				<view class="team-box">
					<view class="team-box-head">
						<view class="team-user-avatar">
							<img :src="listItem.avatar" alt="">
							<u-tag :text="listItem.tag[0]" type="success" plain></u-tag>
							<u-tag :text="listItem.tag[1]" type="success" plain></u-tag>
						</view>
						<view class="team-box-class">
							{{listItem.class}}
						</view>
					</view>
					<view class="team-box-body">
						{{listItem.information}}
					</view>

				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_name: '飞翔的二毛',
				avatar_src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg',
				list3: [
					'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u286.jpg',
					'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u285.jpg',
					'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u284.jpg',
				],
				teamList: [{
						avatar: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg',
						tag: ['找队友', '三创赛'],
						class: '比赛专区',
						information: '三创赛招队友，现队伍成员已有四名，目标要拿国奖，缺法学专业相关和会编程可以做出成品的友友们，急急急!如有意向者加vx:maoxiaocheng',


					}, {
						avatar: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg',
						tag: ['找代写','实验报告'],
						class: '学术交流',
						information: '找软工相关专业的友友，大二数据结构实验报告代写。有偿!有偿!有意者私聊!',
					}, {
						avatar: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg',
						tag: ['找队友','三创赛'],
						class: '比赛专区',
						information: '三创赛招队友，现队伍成员已有四名，目标要拿国奖，缺法学专业相关和会编程可以做出成品的友友们，急急急!如有意向者加vx:maoxiaocheng',
					}, {
						avatar: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg',
						tag: ['找代写','实验报告'],
						class: '学术交流',
						information: '找软工相关专业的友友，大二数据结构实验报告代写。有偿!有偿!有意者私聊!'
					}

				],
				show: false,
				                columns: [
				                    ['中国', '美国', '日本']
				                ],
			};
		
		},
		methods:{
			clickClassify(){
				console.log(1);
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #f2f2f2;
	}

	.head-nav {
		width: 100%;
		height: 130rpx;
		background-color: #f2f2f2;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		z-index: 20;

	}

	.nav-box {
		width: 95%;
		height: 80%;
		background-color: #fff;
		border-radius: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 2rpx 2rpx 10rpx 1rpx gray;
	}

	.imgs-box {
		width: 70rpx;
		height: 50rpx;
	}

	.nav-box img {
		width: 50rpx;
		height: 50rpx;

	}

	.head-swiper {
		padding-top: 150rpx;

	}

	.head-search-box {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}
.head-select-box{
	width: 30%;
	height: 100rpx;
	background-color: red;
	position: absolute;
	right:0rpx;
	border-radius:0 100px 100px ;
	z-index:10;
}
	.classify-box {
		width: 90%;
		height: 140rpx;
		margin-left: auto;
		margin-right: auto;
		margin-top: 30rpx;
		margin-right: auto;
		border-radius: 30rpx;
		box-shadow: 2rpx 2rpx 10rpx 1rpx gray;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}

	.classify-item-box {
		width: 120rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 15rpx;
		margin-right: 15rpx;

	}

	.classify-box img {
		width: 60rpx;
		height: 60rpx;


	}

	.classify-box .classify-text {
		text-align: center;
		font-size: 30rpx;

	}

	.classify-box .megagame-img {
		width: 120rpx;
	}

	.body-title {
		width: 300rpx;
		height: 100rpx;
		margin-left: 50rpx;
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 4rpx solid black;
	}

	.body-title .title-img {
		width: 70rpx;
		height: 70rpx;
		margin-bottom: 14rpx;
		margin-left: 20rpx;
	}

	.body-title .title-text {
		font-size: 30rpx;
		font-weight: bolder;
	}
		
	.team-box{
		width: 90%;
		height:260rpx;
		background-color: white;
		margin-left: auto;margin-right: auto;
		margin-top: 40rpx;
		border-radius: 20rpx;
	}
	.team-box-head{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.team-user-avatar{
		width: 350rpx;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid black ;
	}
	.team-user-avatar img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-left: 10rpx;
		margin-top: 10rpx;	}
	.team-box-class{
		color: #adadad;
		margin-right: 20rpx;
	}
	.team-box-body{
		width: 98%;
		background-color:#f2f2f2;
		font-size: 30rpx;
		margin-top: 20rpx;
		margin-left: auto;margin-right: auto;
		border-radius:10rpx;
		
	}
</style>
