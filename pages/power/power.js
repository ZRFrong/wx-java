const fun = require('../../utils/function.js');
const login = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function() {
    wx.getSetting({
      success: res => {

        var OpenId = wx.getStorageSync('OpenId');

        if (res.authSetting['scope.userInfo'] && OpenId != '') {
          wx.switchTab({
            url: '/pages/index/index',
          })
        }

      }
    })
  },
  bindGetUserInfo: function(res) {

    // 用户点击授权后存用户信息
    wx.setStorageSync('userInfo', res.detail.userInfo)
    if (res.detail.userInfo) {
      wx.login({
        success: function(code) {
          
          if (code.code) {
            
            
            var code = code.code;

            var params = {
              url: fun.baseurl + '/fangyuanapi/wxUser/getOpenId/',
              method: 'POST',
              
              data: {
                code: code,
              },
              type:'application/x-www-form-urlencoded'
            };
            // 用code值去换OpenId
            fun.https(params).then(res=>{
              if (res.data.code == 200) {
                // 获取OpenId
                console.log(res,'授权信息')
                if(res.data.data.token){
                  wx.setStorageSync('token', res.data.data.token);
                  
                }else{
                  wx.setStorageSync('OpenId', res.data.data.openId);
                }
                
                wx.switchTab({
                  url: '/pages/index/index',
                })
              } else {
                wx.showToast({
                  title: '授权失败',
                  icon: "none"
                });
              }
            })

          }
        }
      })
     
    }
  }

})