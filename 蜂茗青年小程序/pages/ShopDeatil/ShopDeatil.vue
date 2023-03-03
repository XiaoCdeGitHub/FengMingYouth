<template>

	<!-- https://blog.csdn.net/qq_40601005/article/details/108092783 -->

	<view class="container">
		<!-- 商品轮播图 -->
		<view class="carousel">
			<!--轮播图-->
			<swiper class="home-swiper" indicator-dots="true" :autoplay="autoplay" :interval="interval"
				:circular="circular" :duration="duration">
				<block v-for="(item,key) in lunboData" :key="key">
					<swiper-item class="swiper-item">
						<image :src="item.imgurl" class="slide-image" />
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="introduce-section" :key="index" v-for="(goodsInf,index) in goodsInf">
			<text class="title">{{goodsInf.goodsTitle}}</text>
			<view class="price-box">
				<text class="price-tip">￥</text>
				<text class="price">{{goodsInf.goodsPirce}}</text>
				<text class="m-price">￥{{goodsInf.goodsMPrice}}</text>
				<text class="coupon-tip">{{goodsInf.goodsCoupon}}</text>
			</view>
			<view class="bot-row">
				<text>销量：{{goodsInf.goodsSales}}</text>
				<text>库存：{{goodsInf.goodsInventory}}</text>
				<text>浏览量：{{goodsInf.goodsBrowse}}</text>
			</view>
		</view>

		<!-- 分享 -->
		<view class="share-section" @click="shareShowMethod">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			 <!-- #ifdef H5 -->
			<!-- <view class="share-btn" @click="shareTo()">
				立即分享 >
				<text class="yticon icon-you"></text>
			</view> -->
			<!-- #endif -->
		</view>

		<!-- <van-action-sheet @close="onClose" overlay close-on-click-overlay round :show="shareShow" :title="shareTitle"> -->
		<!-- 分享信息 -->
		<!-- <view class="shareInformation">
				<van-grid :gutter="3" square column-num="3">
					<van-grid-item @click="shareTo(item.text)" v-for="(item,key) in shareInf" :key="key" :url="item.toUrl" :text="item.text"
					 :icon="item.photoSrc" />
				</van-grid>
			</view>
		</van-action-sheet>
		 -->
<view>
		<u-popup :show="show" @close="close" @open="open">
           <!-- 中间部分  -购买类型 -->
           <view class="c-list" @click="typeShowMethod">
           	<view slot="title" class="van-cell">
           		<view class="van-cell-text">购买类型</view>
           		<view class="con">
           			<text class="select-text" v-for="(sItem, sIndex) in specSelected"
           				:key="sIndex">{{sItem.name}}</text>
           		</view>
           	</view>
           </view>
           	<!-- 类型信息 -->
           	<view class="typeInformation">
           		<view class="a-t">
           			<view class="right" :key="index" v-for="(goodsInf,index) in goodsInf">
           				<text class="price">￥{{goodsInf.goodsPirce}}</text>
           				<text class="stock">库存：{{goodsInf.goodsInventory}}件</text>
           				<view class="selected">
           					已选：
           					<text class="select-text" v-for="(sItem, sIndex) in specSelected"
           						:key="sIndex">{{sItem.name}}</text>
           				</view>
           			</view>
           		</view>
           		<view v-for="(item,index) in specList" :key="index" class="attr-list">
           			<text>{{item.name}}</text>
           			<view class="item-list">
           				<text v-for="(childItem, childIndex) in specChildList" v-if="childItem.pid === item.id"
           					:key="childIndex" class="tit" :class="{selected: childItem.selected}"
           					@click="selectSpec(childIndex, childItem.pid)">
           					{{childItem.name}}
           				</text>
           			</view>
           		</view>
           	</view>
          
		</u-popup>
		<u-button @click="show = true">选择规格</u-button>
	</view>


		

		<!-- 中间部分 -促销活动 -->
		<view class="c-row b-b">
			<text class="tit">促销活动</text>
			<view class="con-list">
				<text>新人首单送20元无门槛代金券</text>
				<text>订单满300减20</text>
				<text>订单满500减50元</text>
				<text>单笔购买满两件免邮费</text>
			</view>
		</view>
		<!-- 中间部分 -服务 -->
		<view class="c-row b-b">
			<text class="tit">服务</text>
			<view class="bz-list con">
				<text>7天无理由退货 ·</text>
				<text>假一赔十 · </text>
			</view>
		</view>
		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">

				<view style="margin-top: 10rpx;color: #606266;font-size: 30rpx;margin-left: 15rpx;">评价(68)</view>
				<view style="margin-top: -40rpx;text-align: right;margin-right: 30rpx;color: #606266;font-size: 30rpx;">
					好评率 100%</view>
				<view style="margin-top: -42rpx;margin-left: 700rpx;">
					<image style="width: 45rpx;height: 45rpx;" src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg"></image>
				</view>
				<view style="width: 95%;margin-left: 15rpx;margin-top: -30rpx;">
					<u-divider lineColor="#606266"></u-divider>
				</view>
			</view>
			<view class="eva-box">
				<image width="100%" height="100%" round class="myPhoto" src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg">
				</image>
				<view class="right">
					<text class="name">毛小成</text>
					<text class="con">商品收到了，收到货第一时间就去品尝了一下，蜂蜜非常甜，而且感觉对睡眠很有帮助吶，nice</text>
					<view class="bot">
						<text class="attr">购买类型：中杯 槐蜜  </text>
						<text class="time">2023-01-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 图文详情 -->
		<view class="detail-desc">
			<view class="d-header">
				<text>———— 图文详情 ————</text>
			</view>
			<view class="d-photo">
				<image class="photo" v-for="(photo,index) in photoInformation"
					:src="photo.photoSrc" :key="index">
				</image>
			</view>
		</view>
		
		<view class="page-bottom">
			<view @tap="toFirstPage()">
				<view style="margin-left: 30rpx;margin-top: 15rpx;">
					<image src="/static/tabbar/u57.png" style="width: 45rpx;height: 45rpx;"></image>
				</view>
				<view style="margin-left: 30rpx;margin-top: -10rpx;">
					<text style="font-size: 20rpx;">首页</text>
				</view>
			</view>

			<view>
				<view style="margin-left: 50rpx;margin-top: 15rpx;">
					<image src="/static/tabbar/u66.png" style="width: 45rpx;height: 45rpx;"></image>
				</view>
				<view style="margin-left: 45rpx;margin-top: -10rpx;">
					<text style="font-size: 20rpx;">购物车</text>
				</view>
			</view>

			<view>
				<!-- <view style="margin-left: 40rpx;margin-top: 15rpx;">
					<image src="../../static/icon/shop2.png" style="width: 45rpx;height: 45rpx;"></image>
				</view> -->
			<!-- 	<view style="margin-left: 40rpx;margin-top: -10rpx;">
					<text style="font-size: 20rpx;">店铺</text>
				</view> -->
			</view>

			<view class="btns"> 
				<!-- 百度一下半圆 https://jingyan.baidu.com/article/fec7a1e51dc7455091b4e756.html -->
				<view class="btn1">加入购物车</view>
				<view class="btn2">立即购买</view>
			</view>

		</view>
		<!-- <van-toast id="van-toast"/> -->
		<!-- <buy></buy> -->
	</view>
</template>

<script>
	// import buy from '../../components/buy/buy.vue';

	export default {
		data() {
			return {
				show: false,
				//轮播图配置
				lunboData: [],
				autoplay: true, //是否自动切换
				interval: 3000, //自动切换时长
				duration: 1200, //滑动动画时长
				circular: true, //是否自动采用衔接滑动
				//商品信息
				goodsInf: [],
				//分享
				shareShow: false,
				shareTitle: '分享商品',
				shareInf: [],
				//类型
				typeShow: false,
				typeTitle: '商品类型',
				specSelected: [],

				specList: [{
						id: 1,
						name: '大小',
					},
					{
						id: 2,
						name: '种类',
					},
				],
				specChildList: [{
						id: 1,
						pid: 1,
						name: '大杯',
					},
					{
						id: 2,
						pid: 1,
						name: '中杯',
					},
					{
						id: 3,
						pid: 1,
						name: '小杯',
					},
					{
						id: 4,
						pid: 2,
						name: '槐蜜',
					},
					{
						id: 5,
						pid: 2,
						name: '枣蜜',
					},
					{
						id: 6,
						pid: 2,
						name: '优选蜂蜜',
					},
				],
				//图表详情
				photoInformation: [],
			}
		},
		onLoad() {
			//显示菜单 https://blog.csdn.net/yehaocheng520/article/details/107980226
			// #ifdef MP-WEIXIN
			this.showMu();
			// #endif

			//轮播图
			this.swiperPictures();
			//商品信息
			this.goodsInformation();
			//分享商品
			this.shareInformation();
			//规格 默认选中第一条
			this.specList.forEach(item => {
				for (let cItem of this.specChildList) {
					if (cItem.pid === item.id) {
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			});
			//图文详情信息
			this.getPhotoInformation();
		},
		methods: {
			 open() {
			          // console.log('open');
			        },
			  close() {
			          this.show = false
			          // console.log('close');
			        },
			// 显示发送到朋友和发送到朋友圈
			showMu() {
				wx.showShareMenu({
					withShareTicket: true,
					//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
					menus: ["shareAppMessage", "shareTimeline"]
				})
			},
			//发送给朋友
			onShareAppMessage(res) {
				// 此处的distSource为分享者的部分信息，需要传递给其他人
				let distSource = uni.getStorageSync('distSource');
				console.log("distSource", distSource)
				if (!distSource) {
					return {
						title: '欢迎使用蜂茗青年小程序',
						type: 0,
						path: '/pages/product/product',
						summary: "这是一件衣服",
						imageUrl: "http://demo.rageframe.com/attachment/images/2021/11/02/image_1635838346_MH3eD7HX.jpeg"
					}
				}
			},
			//分享到朋友圈
			onShareTimeline(res) {
				let distSource = uni.getStorageSync('distSource');
				if (!distSource) {
					return {
						title: '欢迎使用蜂茗青年小程序',
						type: 0,
						query: 'wsw',
						summary: "这是一件衣服",
						imageUrl: "http://demo.rageframe.com/attachment/images/2021/11/02/image_1635838346_MH3eD7HX.jpeg"
					}
				}
			},
			//轮播图
			swiperPictures() {
				var data = {
					"datas": [{
							"id": 1,
							"imgurl":('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C3.jpg')
						},
						{
							"id": 2,
							"imgurl": ('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C%202.jpg')
						},
						{
							"id": 3,
							"imgurl":('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C1.jpg')
						}, {
							"id": 4,
							"imgurl":('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/4.jpg')
						}, {
							"id": 5,
							"imgurl": ('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/download.jpg')
						},
					]
				};
				this.lunboData = data.datas
			},
			//商品介绍
			goodsInformation() {
				var data = {
					"datas": [{
						"goodsId": '7',
						"goodsTitle": "纯正农家自产无添加蜂蜜", //标题
						"goodsPirce": 350, //现价
						"goodsMPrice": 500, //原价
						"goodsCoupon": "7折", //折扣
						"goodsSales": 216, //销量
						"goodsInventory": 3230, //库存
						"goodsBrowse": 676, //浏览量
					}, ]
				};
				//把数值赋值给goodsInf商品信息介绍
				this.goodsInf = data.datas
			},
			//加载分享弹窗
			shareShowMethod() {
				this.shareShow = true
			},
			//关闭弹窗
			onClose() {
				this.shareShow = false;
				this.typeShow = false;
			},
			//分享商品信息
			shareInformation() {
				var data = {
					"icons": [{
							"photoSrc": ('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg'),
							"text": "微信好友",
							"toUrl": ""
						},
						{
							"photoSrc": ('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg'),
							"text": "朋友圈",
							"toUrl": ""
						},
						{
							"photoSrc": ('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg'),
							"text": "QQ好友",
							"toUrl": ""
						},
						{
							"photoSrc": ('https://cd-mapbed.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720221030103023.jpg'),
							"text": "QQ空间",
							"toUrl": ""
						},
					]
				};
				this.shareInf = data.icons
			},
			// 小程序最上面得分享

			//分享去向
			shareTo() {
				
				var url;
				url = window.location.href;
				//将要复制的内容传进去
				this.copy(url); //调用copy方法;
			},
			copy(data) {
				let url = data;
				let oInput = document.createElement('input');
				oInput.value = url;
				document.body.appendChild(oInput);
				oInput.select(); // 选择对象;
				document.execCommand("Copy"); // 执行浏览器复制命令
				// 复制成功提示;
				uni.showModal({
					title: '复制成功',
					content: '请将链接分享给你的好友吧',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				oInput.remove()
			},

			//加载类型弹窗
			typeShowMethod() {
				this.typeShow = true;
			},
			//选择规格
			selectSpec(index, pid) {
				let list = this.specChildList;
				list.forEach(item => {
					if (item.pid === pid) {
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected.push(item);
					}
				})
			},
			//获取图文详情信息
			getPhotoInformation() {
				var data = {
					"icons": [{
							
							photoSrc:'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C3.jpg'
						},
						{
							
							photoSrc: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C%202.jpg'
						},
						{
							
							photoSrc:'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/%E8%9C%82%E8%9C%9C1.jpg'
						}, {
							
							photoSrc:'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/4.jpg'
						}, {
						
							photoSrc: 'https://cd-mapbed.oss-cn-beijing.aliyuncs.com/download.jpg'
						},
					]
				};
				//把数据赋值给photoInformation图文详情
				this.photoInformation = data.icons
				console.log(this.photoInformation)
			},
			//跳转到首页
			toFirstPage(){
				console.log("111")
				uni.switchTab({
					url: "/pages/nav/nav"
				})
			},
			//加入购物车
			addToShopCart() {
				console.log(this.goodsInf[0])
				var goodsinfo = {
					id: this.goodsInf[0].goodsId,
					title: this.goodsInf[0].goodsTitle,
					desc: this.goodsInf[0].goodsTitle,
					price: this.goodsInf[0].goodsPirce * 100,
					oprice: this.goodsInf[0].goodsMPrice * 100,
					num: 1,
					// thumb: require('../../static/icon/allorder.png')
				};
				// 
				this.$Toast({
					type: 'success',
					message: '添加成功',
					// duration: 0, // 持续展示 toast
				});
				//调用store 中 mutations来将商品加入到购物车
				this.$store.commit('addToCart', goodsinfo);

			},
			//立即购买
			ImmediatePurchase() {

			},
		}
	}
</script>

<style>
	page {
		background: #f8f8f8;
		margin: 0;
	}

	.container {
		width: 100%;
		height: 100%;
		margin: 0 ;
	}

	.carousel {
		height: 722rpx;
		position: relative
	}

	/*轮播控件*/
	.home-swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-content: center;
		height: 750upx;
		overflow: hidden;
	}

	.slide-image {
		width: 100%;
		height: 100%;
	}

	/* 商品介绍 */
	.introduce-section {
		background: #ffffff;
		padding: 20rpx 30rpx;
	}

	.introduce-section .title {
		font-size: 32rpx;
		color: #303133;
		height: 50rpx;
		line-height: 50rpx;
	}

	.introduce-section .price-box {
		display: flex;
		align-items: baseline;
		height: 50rpx;
		padding: 10rpx 0;
		font-size: 26rpx;
		color: #fa436a;
	}

	.introduce-section .price {
		font-size: 34rpx;
	}

	.introduce-section .m-price {
		margin: 0 12rpx;
		color: #909399;
		text-decoration: line-through;
	}

	.introduce-section .coupon-tip {
		align-items: center;
		padding: 4rpx 10rpx;
		background: #fa436a;
		font-size: 24rpx;
		color: #ffffff;
		border-radius: 6rpx;
		line-height: 1;
		transform: translateY(-4rpx);
	}

	.introduce-section .bot-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 30rpx;
		font-size: 24rpx;
		color: #909399;
	}

	.introduce-section .bot-row text {
		text-align: center;
	}

	.share-section {
		display: flex;
		align-items: center;
		color: #606266;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12rpx 30rpx;
	}

	.share-section .share-icon {
		display: flex;
		align-items: center;
		width: 70upx;
		height: 30upx;
		line-height: 1;
		border: 1px solid #fa436a;
		border-radius: 4upx;
		position: relative;
		overflow: hidden;
		font-size: 22upx;
		color: #fa436a;

	}

	.share-section .share-icon:after {
		content: '';
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		left: -20rpx;
		top: -12rpx;
		position: absolute;
		background: #fa436a;
	}

	.share-section .icon-xingxing {
		position: relative;
		z-index: 1;
		font-size: 24rpx;
		margin-right: 35rpx;
		color: #fff;
		line-height: 1;

	}

	.share-section .tit {
		font-size: 28rpx;
		margin-left: 10rpx;
	}

	.share-section .icon-bangzhu1 {
		padding: 10rpx;
		font-size: 30rpx;
		line-height: 1;
	}

	.share-section .share-btn {
		flex: 1;
		text-align: right;
		font-size: 24rpx;
		color: #fa436a;

	}

	.share-section .icon-you {
		font-size: 24rpx;
		margin-left: 4rpx;
		color: #fa436a;
	}

	.shareInformation {
		width: 100%;
		height: 275px;
	}

	.c-list {
		width: 100%;
		font-size: 26rpx;
	}

	.c-list .van-cell-text {
		width: 25%;
		display: flex;
		float: left;
		color: #606266;
		font-size: 30rpx;
	}
	.van-cell{
		margin-bottom: 20rpx;
	}

	.c-list .con .select-text {
		margin-right: 10rpx;
		color: #303133;
		font-size: 30rpx;
	}

	.typeInformation {
		width: 100%;
		margin-bottom: 5%;
	}

	.typeInformation .a-t {
		display: flex;
		width: 90%;
		margin: 0 auto;
	}

	.typeInformation .a-t image {
		width: 130rpx;
		height: 130rpx;
		border-radius: 8rpx;
	}

	.typeInformation .a-t .right {
		display: flex;
		flex-direction: column;
		padding-left: 24rpx;
		font-size: 26rpx;
		color: #606266;
		line-height: 42rpx;
	}

	.typeInformation .a-t .right .price {
		font-size: 32rpx;
		color: #fa436a;
		margin-bottom: 10rpx;

	}

	.typeInformation .a-t .right .select-text {
		margin-right: 10rpx;
	}

	.typeInformation .attr-list {
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		color: #606266;
		padding-top: 30rpx;
		padding-left: 10rpx;
	}

	.typeInformation .item-list {
		padding: 20rpx 0 0;
		display: flex;
		flex-wrap: wrap;
	}

	.typeInformation .item-list .selected {
		background: #fbebee;
		color: #fa436a;
	}

	.typeInformation .item-list text {
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		background: #eee;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 100rpx;
		min-width: 60rpx;
		height: 60rpx;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #303133;
	}

	.typeInformation .vButton {
		width: 90%;
		margin: 0 auto;
		margin-top: 30rpx
	}

	.c-row {
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		position: relative;
		font-size: 26rpx;
		color: #606266;
		background-color: #FFFFFF;
	}

	.c-row .tit {
		width: 23%;
	}

	.c-row .con-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		color: #303133;
		line-height: 40rpx;
	}

	.c-row .bz-list {
		height: 40rpx;
		font-size: 26rpx;
		color: #303133;
	}

	.c-row .con {
		flex: 1;
	}

	.c-row .bz-list text {
		display: inline-block;
		margin-right: 30rpx;
	}

	.eva-section {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		margin-top: 16rpx;
	}

	.eva-section .eva-box {
		display: flex;
		padding: 20rpx 32rpx;
	}

	.eva-section .eva-box .myPhoto {
		flex-shrink: 0;
		width: 80rpx;
		height: 80rpx;
	}

	.eva-box .right {
		flex: 1;
		display: flex;
		flex-direction: column;
		font-size: 28rpx;
		color: #606266;
		padding-left: 26rpx;
	}

	.eva-box .right .con {
		font-size: 28rpx;
		color: #303133;
		padding: 20rpx 0;
	}

	.eva-box .right .bot {
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
		color: #909399;
	}

	.detail-desc {
		background-color: #FFFFFF;
		margin: 16rpx 0px;

	}

	.detail-desc .d-header {
		align-items: center;
		height: 80rpx;
		font-size: 30rpx;
		color: #303133;
		position: relative;
		text-align: center;
		line-height: 80rpx;

	}

	.detail-desc .d-header text {
		padding: 0 20rpx;
		background: #FFFFFF;
		position: relative;
	}

	.detail-desc .d-photo {
		margin: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		/* background-color: red; */
	}
	.detail-desc .d-photo .photo {
	margin-top: 0;
	margin-bottom: 0;
		width: 100%;
		height: 500rpx;
	}

	.page-bottom {
		background:white;
		position: fixed;
		bottom: 0rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 100rpx;
	}
	.btns{
		margin-right: 0;
		width: 470rpx;
		
	}
	.btn1 {
		margin-top: 15rpx;
		margin-left: 30rpx;
		width: 230rpx;
		height: 70rpx;
		text-align: center;
		font-size: 24rpx;
		color: #ffffff;
		/* 文本垂直居中 */
		vertical-align: middle;
		line-height: 70rpx;
		background-color: rgb(255, 143, 23);
		border-top-left-radius: 30px; // 左上角圆角
		border-bottom-left-radius: 30px; // 左下角圆角
	}

	.btn2 {
		margin-top: -70rpx;
		margin-left: 230rpx;
		width: 230rpx;
		height: 70rpx;
		text-align: center;
		font-size: 24rpx;
		color: #ffffff;
		/* 文本垂直居中 */
		vertical-align: middle;
		line-height: 70rpx;
		background-color: rgb(240, 22, 38);
		border-top-right-radius: 30px; // 左上角圆角
		border-bottom-right-radius: 30px; // 左下角圆角
	}
</style>

