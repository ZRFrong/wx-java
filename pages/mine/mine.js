//index.js
//获取应用实例
const fun = require('../../utils/function.js');
Page({
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //显示转发
    wx.showShareMenu({
      withShareTicket: true
    })
    
    

  },
  onShow: function() {
    // 先检验是否有用户信息
    var userInfo = wx.getStorageSync('userInfo');
<<<<<<< HEAD
    var openId = wx.getStorageSync('openId');
    
    
    if (userInfo & openId) {
=======
    var openId = wx.getStorageSync('OpenId');
    
    
    if (openId) {
>>>>>>> java版
      
      // 有用户信息在检验是否有token
      var token = wx.getStorageSync('token');
      var _this = this;
      // 没有token强跳注册
      if (!token) {
        wx.navigateTo({
          url: '/pages/register/register',
        })
      } 
    
    } else {
      this.setData({
        user: 0,
      })
     
    }

    var params = {
      url: fun.baseurl + '/fangyuanapi/wxUser/userInfo/',
      method: 'GET',
      data: {},
    };

    fun.https(params).then(res => {
      console.log(res, 'res')
      this.setData({
         user:res.data.data
      })
    })

    
    
  },
  //点击登录
  login: function(e) {
    fun.openPage('/pages/power/power');
  },
  upnum: function(e) {
    if (!fun.islogin()) {
      return false;
    }
    var user_id = wx.getStorageSync('user_id');
    var url = fun.apiurl("admin/my/getMyUp");
    fun.ajax(url, {
      user_id: user_id
    }, function(ret) {
      if (ret.data.code == 1) {
        wx.showToast({
          title: '您总共获得了' + ret.data.data.count + '个赞',
          icon: 'none',
        })
      }
    })
  },
  //打开我的农田
  land: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/dome/dome');
  },
  //打开我的企业
  company: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/company/company');
  },
  //打开相册页面
  photos: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/photos/photos');
  },
  //打开我的关注
  attention: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/follow/follow');
  },
  //打开我的粉丝
  fans: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/Fans/Fans');
  },
  //打开系统消息
  message: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/xiaoxi/xiaoxi');
  },
  //打开个人信息设置
  means: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage('/pages/means/means?type=my');
  },
  openuser: function(e) {
    if (!fun.istoken()) {
      return false;
    }
    var user_id = wx.getStorageSync('user_id');
    fun.openPage("/pages/user/user?uid=" + user_id);
  },
  qecodelist: function(e) {
    if (!fun.islogin()) {
      return false;
    }
    fun.openPage("/pages/qrcodelist/qrcodelist");
  },
  shouhuo: function(e) {
    if (!fun.islogin()) {
      return false;
    }
    fun.openPage("/pages/shouhuo/shouhuo");
  },
})