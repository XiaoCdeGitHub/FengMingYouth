<template>
	<view  class="content"  >
		<view class="my-head">
			<view class="my-nav" :style="{'opacity':navColor}" >
				<view class="nav-box">
					<img class="head-logo" :style="{'display':imgShow,'width':headLogoWidth+'%'}"
						src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/29e4e2ae-7ec0-4b9f-b893-0b125e0af061-image.png"
						alt="">
					<view class="search-box" :style="{'width':searchBoxWidth+'%'}">
						<u-search height='80rpx' placeholder="蜂茗青年小程序" v-model="keyword"></u-search>
					</view>
				</view>
			</view>
			<view class="my-swiper"> 
				<u-swiper :list="list3" indicator indicatorMode="line" circular height='300rpx' imgMode="scaleToFill"
					radius="40rpx"></u-swiper>
			</view>
		</view>
		<view class="my-body">
			<view class=" classification-part">
				<u-grid :border="false" col="3" @click="click" height='250rpx'>
					<u-grid-item v-for="(listItem,listIndex) in list1" :key="listIndex">
						<u--image :showLoading="true" :src='listItem.src' width="40px" height="40px" @click="click">
						</u--image>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
			<view class="goods-tag">
				爆款商品<img class="title-logo" src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u33.png" alt="">
			</view>
			<view class="goods-list">
				<u-grid :border="false" col="2" @click="click" >
					<u-grid-item v-for="(listItem,listIndex) in goodsList" :key="listIndex" >
						<image class="goods-img" :src='listItem.src'  @click="click">
						</image>
						<text class="goods-title">{{listItem.title}}</text>
						<text class="goods-price">{{listItem.price}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
		</view>

	</view>
</template>

<script>
import { throttle } from 'utils/util';
const list = [...new Array(100).keys()].map(i => {
  return { name: 'lisr' + (i + 1), age: i + 1}
})
	export default {
		data() {
			return {
				style:'',
				navColor:'',
				imgShow:'',
				searchBoxWidth:'',
				title: 'Hello',
				  list: list,
				list3: [
					'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C3.jpg',
					'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C%202.jpg',
					'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C1.jpg',
				],
				list1: [{
						name: 'photo',
						title: '蜂茗上新',
						src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u26.svg'
					},
					{
						name: 'lock',
						title: '黄帝情',
						src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u20.svg'
					},
					{
						name: 'star',
						title: '皇帝颂',
						src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg'
					},
					{
						name: 'hourglass',
						title: '妡蜂堂',
						src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u14.svg'
					},
					{
						name: 'home',
						title: '蜂昊园',
						src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u20.svg'
					},
					{
						name: 'star',
						title: '周边产品',
						src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg'
					},
				],
				goodsList:[{
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u26.svg',
					price:'¥ 16.9'
				},{
					
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u20.svg',
					price:'¥ 16.9'
				},{

					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u26.svg',
					price:'¥ 16.9'
				},{
					
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg',
					price:'¥ 16.9'
				},{
					
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg',
					price:'¥ 16.9'
				},{
					
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg',
					price:'¥ 16.9'
				},{
					
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg',
					price:'¥ 16.9'
				},{
					
					title: '纯正农家自产无添加蜂蜜',
					src: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/u17.svg',
					price:'¥ 16.9'
				}]


			}
		},
		onLoad() {

		},
		onPageScroll(e) {
		  //       const scrollTop = e.scrollTop;
				// console.log(scrollTop)
		  //       if(scrollTop!=0){
				// 	console.log('我变颜色啦')
				// 	this.navColor='white'
				// 	this.imgShow='none'
				// 	this.searchBoxWidth='90'
		  //       }else{
				// 	console.log("我到头啦！！！")
				// 	this.navColor='#009966'
				// 	this.imgShow='block'
				// 	this.searchBoxWidth='70'
		  //       }
				this.onScroll(e);
				
				
				
		        },
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
		onScroll: throttle(function(e) {
		// console.log(e)
		const { scrollTop: top } = e
		console.log(top)
		let channelColor = 0 
		channelColor=top * 1// 任意通道颜色
		this.navColor
	
	
  }, 300),
  // 调用次数
  count: 0,
  // 更新调用次数和并打印出来
  countStatistics() {
    ++this.count
    console.log(this.count)
  }
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		min-height:100vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.my-head {
		width: 100%;
		height: 400rpx;
		/* background-color: #009966; */
		background-color: #009966;
		border-bottom-right-radius: 90rpx;
		border-bottom-left-radius: 90rpx;
	}

	.my-nav {
		width: 100%;
		height: 140rpx;
		/* background-color: red; */
		background-color: #009966;
		position: fixed;
		z-index: 20;
	}
.nav-box{
	width: 90%;
	height: 140rpx;
	margin-left: auto;margin-right: auto;
	/* background-color: paleturquoise; */
	display: flex;
	flex-direction: row;
	align-items: center;

	/* justify-content: space-around; */
}

	.search-box {
		
	/* background-color: black; */
	}

	.head-logo {
		height: 80rpx;
		width: 90rpx;
		margin-right: 80rpx;
	}

	.my-swiper {
		width: 650rpx;
		height: 350rpx;
		margin-top: 150rpx;
		margin-left: auto;
		margin-right: auto;
		/* 	background-color: white; */
		/* border-radius: 40rpx; */
	}

	.my-body {
		margin-top: 100rpx;
		height: 1000rpx;
		display: flex;
		flex-direction: column;
		background-color: #f7f7f7;
	
	}

	.classification-part {
		background-color: white;
		margin-left: auto;margin-right: auto;
		padding-top: 30rpx;
		height: 330rpx;
		width: 650rpx;
		border-radius: 30rpx;
		box-shadow: 2rpx 2rpx 10rpx 1rpx gray;
	}

	.grid-text {
		font-size: 14px;
		color: black;
		padding: 20rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}

	.goods-tag {
		margin-top: 30rpx;
		height: 80rpx;
		width: 220rpx;
		line-height: 80rpx;
		margin-left: 40rpx;
		background-color: #009966;
		display: flex;
		justify-content: center;
		flex-direction: row;
		border-radius: 30rpx;
	}
	.goods-list{
		margin-top: 20rpx;
		margin-left: auto;margin-right: auto;
	}

	.title-logo {
		margin-top: auto;
		margin-bottom: auto;
		width: 80rpx;
		height: 80rpx;
	}
	.goods-img{
		width: 300rpx;
		height: 300rpx;
		margin-left: auto;
		margin-right: auto;
	}
	.goods-title{
		flex-wrap: wrap;
		font-size:30rpx;
		text-align: center;
	}
	.goods-price{
		color:red;
		font-size:40rpx;
	}
	
</style>
