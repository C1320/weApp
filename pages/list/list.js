// pages/list/list.js
import {get, post} from "../../utils/http/api";
import{messageTip} from "../../utils/public/public";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"暂无数据",
    PID:"",
    list:[]
  },
/**
 * 自定义
 * @param {*} options 
 */
getItem:function(e){
    var rid = e.currentTarget.dataset.item.RequisitionId
    var that = this;
    var url = '';
    var data = {}
    url =  "/urineTestItemList";
    data= {RequisitionId:rid}
    get(
     url,
     data
    ).then(res=>{
      if(res.status==200){
        wx.setStorage({
          key:"list",
          data:JSON.stringify(res.result)
        })
      }
      wx.navigateTo({
        url: `/pages/listItem/listItem?res=${JSON.stringify(res)}`,
      })
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 查询体检记录
     */
    var res = JSON.parse(options.res)
    if(res.status==200){
      this.setData({
        list:res.result
      })
    }else{
      this.setData({
        msg:res.msg
      })
    }

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

  }
})