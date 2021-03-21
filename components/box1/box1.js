// components/box1/box1.js
Component({
  options:{
    pureDataPattern:/^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:10,
    n1:0,
    n2:0,
    sum:0,
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },
  // 生命周期
  lifetimes:{
    created(){
      console.log('生命周期created');
    },
    ready(){
      console.log('生命周期ready');
    }
  },
  observers:{
    'n1,n2':function(newN1,newN2){
      this.setData({
        sum:newN1+newN2
      })
    },
    '_rgb.**':function(newRgb){
      console.log(newRgb);
      this.setData({
        fullColor:`${newRgb.r},${newRgb.g},${newRgb.b}`
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addNum(){
      // true  data和properties同一个对象
      // console.log(this.data===this.properties);
      this.setData({
        count:this.data.count+this.properties.num
      })
    },
    addN(e){
      // console.log(e.target.dataset.n);
      this.setData({
        [e.target.dataset.n]:this.data[e.target.dataset.n]+1
      })
    },
    addRgb(e){
      // console.log(e.target.dataset._rgb);
      let newRGB={...this.data._rgb}
      newRGB[e.target.dataset._rgb]=newRGB[e.target.dataset._rgb]+10>255?255:newRGB[e.target.dataset._rgb]+10
      this.setData({
        _rgb:{...newRGB}
      })
      // this.setData({
      //  [`_rgb.${e.target.dataset._rgb}`]:this.data._rgb[e.target.dataset._rgb]+10>255?255:this.data._rgb[e.target.dataset._rgb]+10
      // })
    }
  }
})
