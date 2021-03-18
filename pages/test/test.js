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
      id:0,
      message: 'A',
    }, 
    {
      id:1,
      message: 'B'
    },
    {
      id:2,
      message: 'C'
    },
    {
      id:3,
      message: 'A',
    }, 
    {
      id:4,
      message: 'B'
    },
    {
      id:5,
      message: 'C'
    }
    ],
    condition:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequest()
    this.postRequest()
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
  /**
  * 发GET请求
  */
  getRequest(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method:'GET',
      data:{
        name:'请求',
        age:2021
      },
      success:res=>{
        console.log(res);
      }
    })
  },
  /**
  * 发post请求
  */
 postRequest(){
  wx.request({
    url: 'https://www.escook.cn/api/post',
    method:'post',
    data:{
      name:'post请求',
      age:2021
    },
    success:res=>{
      console.log(res);
    }
  })
}
})