// pages/color-picker/color-picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: {
      title: '新闻',
      content: 'Chinese premier Li focused on normalising the relationship with Japan after years of bickering in the East Asia summit. Tap the colour that represents your opinion.\n\n中日韩峰会两年半后再启 李克强呼吁中日关系正常化。请点击表达你意见的颜色'
    },
    newsList:[
      {
        title: 'title',
        content: 'North Korea released three American prisoner prior to the Kim-Trump talk.\n\n朝鲜在朝美首脑会谈前释放三名美籍罪犯。'
      },
      {
        title: 'title',
        content: 'Chinese premier Li focused on normalising the relationship with Japan after years of bickering in the East Asia summit. Tap the colour that represents your opinion.\n\n中日韩峰会两年半后再启 李克强呼吁中日关系正常化。请点击表达你意见的颜色'
      }
    ],
    color:
    [
      { id: 0, color: '0200fd' },
      { id: 1, color: '1300ec' },
      { id: 2, color: '1e00e1' },
      { id: 3, color: '2d00d2' },
      { id: 4, color: '3a00c5' },
      { id: 5, color: '4500ba' },
      { id: 6, color: '5300ac' },
      { id: 7, color: '60009f' },
      { id: 8, color: '6a0095' },
      { id: 9, color: '780087' },
      { id: 10, color: '870078' },
      { id: 11, color: '91006e' },
      { id: 12, color: 'a0005f' },
      { id: 13, color: 'ac0053' },
      { id: 14, color: 'b80047' },
      { id: 15, color: 'c5003a' },
      { id: 16, color: 'd1002e' },
      { id: 17, color: 'e0001f' },
      { id: 18, color: 'ed0012' },
      { id: 19, color: 'f90006' }
    ],
    selectedColor: '000000'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onColorTapped: function (event) {
    // console.log(event.currentTarget)
    var id = event.currentTarget.id 
    // console.log(id)
    this.setData({
      selectedColor: this.data.color[id].color
    })

  }
})