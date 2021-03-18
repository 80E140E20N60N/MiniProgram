// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
   testName:'haha',
   imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3548555987,2331131210&fm=26&gp=0.jpg',
  //  注意：使用toFixed()方法返回 NumberObject 的字符串表示,注意需要转换为num
   randomNum:Math.random().toFixed(3)*20,
   time: (new Date()).toString(),
   array: [
    {
      message: 'A',
    }, 
    {
      message: 'B'
    },
    {
      message: 'C'
    },
    {
      message: 'A',
    }, 
    {
      message: 'B'
    },
    {
      message: 'C'
    }
    ],
    condition:false
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

  /**
   * 用户点击默认按钮
   */
  btnTap: function (e) {
    // console.log('默认按钮',e);   
      this.setData({
        testName:'修改了testName',
        randomNum:this.data.randomNum+1
      })
  },
   /**
   * 遍历事件绑定并传参
   */ 
  testCy:function(e){
    console.log('点击了',e.target.dataset);
  },
    /**
   * 用户输入事件
   */
  bindKeyInput: function (e) {
    // console.log('输入事件',e.detail);   
    this.setData({
      randomNum:Number(e.detail.value) 
    })
  },

})