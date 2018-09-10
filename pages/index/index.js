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
      '../image/1.1.jpg',
      '../image/2.1.jpg',
      '../image/3.1.jpg',
      '../image/4.1.jpg'
    ]
  },

  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13476249257'
    })
  }
})
