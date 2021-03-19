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
    condition:false,
    colorList:[],
    isLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getRequest()
    // this.postRequest()
    this.getColors()
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
    this.setData({
      randomNum:Math.random().toFixed(3)*20,
      colorList:[]
    })
    this.getColors(wx.stopPullDownRefresh)  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 上拉触底节流处理
   !this.data.isLoading &&  this.getColors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 用户点击增加按钮
   */
  btnTap: function (e) {
    // console.log('增加按钮',e);   
      this.setData({
        testName:'修改了testName',
        randomNum:this.data.randomNum+1
      })
  },
   /**
   * 遍历事件绑定并传参
   */ 
  testCy:function(e){
    // console.log('点击了',e.target.dataset);
    if(e.target.dataset.index==0){
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
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
* 获取颜色请求
*/
getColors(callBack){
  this.setData({
    isLoading:true
  })
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: 'https://www.escook.cn/api/color',
    // method:'GET',
    success:res=>{
      // console.log(res);
      this.setData({
        colorList:[...this.data.colorList,...res.data.data]
      })
    },
    complete:()=>{
      // 节流
      this.setData({
        isLoading:false
      })
      // 请求完成后关闭加载提示
      wx.hideLoading()
      callBack && callBack()
    }
  })
},
  /**
  * 编程式导航 跳转到tabBar页面
  */
  gotoMessage(){
    wx.switchTab({
      url: '/pages/message/message',
    })
  },
  /**
  * 编程式导航 跳转到非tabBar页面
  */
 gotoIndex(){
  wx.navigateTo({
    url: '/pages/index/index?name=zihan',
  })
}
})