//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {
    
  },
  toColorPicker: function(e) {
    wx.navigateTo({
      url: '/pages/color-picker/color-picker',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
