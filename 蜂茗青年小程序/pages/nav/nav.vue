<template>
  <view class="content">
    <view class="top_navbar">
      <view class='top_pos' :style="'height:' + totalHeight + 'px;'"></view>
      <view class="navbar-fixed" :style="navStyle">
        <view :style="'height:' + statusBarHeight + 'px;'"></view>
        <view class="navbar-content" :style="'height:' + navBarHeight + 'px;'+'width:'+windowWidth+'px;'">
          <image src="https://cd-mapbed.oss-cn-beijing.aliyuncs.com/29e4e2ae-7ec0-4b9f-b893-0b125e0af061-image.png" class="top_icon" :style="'opacity:'+imgOpacity"></image>
          <view :style="'width:'+navInpWid+'px;'" :class="[navOpacity >= 1 ?'nav_input nav_inp_ac':'nav_input']">
            <u-search :showAction="false" height='70rpx' placeholder="蜂茗青年小程序" v-model="keyword"></u-search>
          </view>
        </view>
      </view>
    </view>
<view class="my-head" :style="'margin-top:' + totalHeight+ 'px;'">
	<view class="my-swiper" >
		<u-swiper :list="list3" indicator indicatorMode="line" circular height='360rpx' imgMode="scaleToFill"
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
					<image class="goods-img" :src='listItem.src'  @click="click" @tap="goDetail">
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
      totalHeight: '', // 总高度
      statusBarHeight: '', // 状态栏高度
      navBarHeight: 50, // 导航栏高度
      windowWidth: 375,
      navStyle: '',
      navOpacity: 0,
      navInpWid: '',
      navRemain: '',
      widRemain: '',
      scrollTop: 0,
      imgOpacity: 1,
      logo_block_width: 0,
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
    };
  },
  mounted() {
    // #ifdef  MP-WEIXIN
    this.nav();
    // #endif
  },
  onPageScroll(e) {
    
	this.onScroll(e);
  },
  methods: {
	  click(name) {
	  	this.$refs.uToast.success(`点击了第${name}个`)
	  },
	  goDetail(){
		  uni.navigateTo({
		  			    url: '/pages/ShopDeatil/ShopDeatil'
		  			})
	  },
    nav() {
      let info = uni.getSystemInfoSync();
      console.log(info);
      let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      console.log(menuButtonInfo);
      this.statusBarHeight = info.statusBarHeight;
      this.windowWidth = info.windowWidth;
      this.navBarHeight =
        menuButtonInfo.bottom -
        info.statusBarHeight +
        (menuButtonInfo.top - info.statusBarHeight) +
        4;
      this.windowWidth = menuButtonInfo.left;
      this.widRemain = (info.windowWidth / 375) * 70;
      // this.navInpWid = this.windowWidth - this.widRemain;
      this.navInpWid = menuButtonInfo.left - 70;
      console.log('navInpWid:...', this.navInpWid);
      this.navRemain = this.windowWidth - this.widRemain;
      console.log('navRemain:....................', this.navRemain);
      this.totalHeight = this.statusBarHeight + this.navBarHeight;
      console.log('totalHeight:...', this.totalHeight);
      this.logo_block_width = this.windowWidth - this.navInpWid - 10;
    },
	onScroll: throttle(function(e) {
		let topHeight = e.scrollTop;
		let navOp = 0;
		navOp = topHeight / this.totalHeight;
		console.log('navOp:...', navOp);
		console.log(' this.totalHeight:...',  this.totalHeight);
		let mobileTop = this.navRemain;
		this.navOpacity = navOp;
		this.navInpWid =
		  navOp > 0 ? mobileTop + this.widRemain * navOp : this.navRemain;
		this.logo_block_width = this.windowWidth - this.navInpWid - 10;
		console.log('scroll:...', this.navInpWid);
		this.imgOpacity = navOp <= 1 ? 1 - navOp : 0;
		const styles = `
		background: rgba(255, 255, 255, ${navOp});
		`;
		this.navStyle = topHeight > 10? styles : '';
	},0),
  
  },
};
</script>

<style lang="scss" scoped>
.top_navbar {
  .top_pos {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #009966;

  }
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 45px;
      padding: 0 10px 0 10px;
      box-sizing: border-box;
      position: relative;
      // background: yellowgreen;
      .top_icon {
        position: absolute;
        left: 10rpx;
        // transform: translateX(-50%);
        width: 40px;
        height: 40px;
        display: block;
        opacity: 0;
        // background: gray;
      }
      .logo-block {
        position: relative;
        // width: 50px;
        height: 40px;
        .top_icon {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          display: block;
          opacity: 0;
          // background: gray;
        }
      }
      .nav_input {
        width: 100px;
        height: 40px;
        line-height: 40px;
        // background-color: #fff;
        position: relative;
        padding-left: 15px;
        color: gray;
        .find-icon {
          color: gray;
          padding-right: 10px;
        }
      }
      .nav_inp_ac {
        transition: all ease 0.3s;
        background-color: #fff;
      }
      .return_icon {
        width: 54rpx;
        height: 54rpx;
        margin-bottom: 4px;
        display: block;
        border-radius: 50%;
      }
      .return_icon2 {
        width: 22rpx;
        height: 38rpx;
        transform: rotateY(180deg);
      }
    }
  }
}
.content {
		display: flex;
		min-height:100vh;
		flex-direction: column;
		align-items: center;

	}

	.my-head {
		width: 100%;
		height: 400rpx;
		 background-color: #009966; 
		// background-color: red;
		border-bottom-right-radius: 90rpx;
		border-bottom-left-radius: 90rpx;
		position: relative;
	}
	.my-swiper {
		width: 650rpx;
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		margin-left: auto;
		margin-right: auto;
	
		/* 	background-color: white; */
		/* border-radius: 40rpx; */
	}
	.my-body {
		height: 1000rpx;
		display: flex;
		flex-direction: column;
		background-color: #f7f7f7;
	
	}

	.classification-part {
		background-color: white;
		margin-left: auto; margin-right: auto;
		margin-top: 30rpx;
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

