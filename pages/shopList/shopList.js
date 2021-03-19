// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    pageNum:1, 
    pageSize:10,
    total:0,
    shopList:[],
    isLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      query:options
    })
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
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
      shopList:[],
      pageNum:1
    })
    this.getShopList(wx.stopPullDownRefresh)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const{total,pageNum,pageSize}=this.data
    if(pageNum*pageSize>=total){
      wx.showToast({
        title: '数据加载完毕',
        icon:'none'
      })
      return
    }
    if(!this.data.isLoading){
      this.setData({
        pageNum:this.data.pageNum+1
      })
      this.getShopList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 获取列表数据
   */
  getShopList: function (callBack) {
    this.setData({
      isLoading:true
    })
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      data:{
        _page:this.data.pageNum,
        _limit:this.data.pageSize
      },
      success:res=>{
        console.log(res);
        this.setData({
          shopList:[...this.data.shopList,...res.data],
          total:res.header['X-Total-Count']
        })
      },
      complete:()=>{
        this.setData({
          isLoading:false
        })
        // 请求完成后关闭加载提示
        wx.hideLoading()
        callBack && callBack()
      }
    })
  }
})