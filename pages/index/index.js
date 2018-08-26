//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '../image/4.jpg',
      '../image/5.jpg',
      '../image/6.jpg',
      '../image/7.jpg'
    ]
  },

  viewMap: function () {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  }
})
