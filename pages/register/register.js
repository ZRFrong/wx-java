// pages/register/register.js
const fun = require('../../utils/function.js');
Page({
  onLoad: function(options) {
    //获取头像和昵称
    var userInfo = wx.getStorageSync('userInfo');
    console.log(userInfo, 'userInfo');
    this.setData({
      userInfo: userInfo
    })

  },
  onShow: function(e) {


    this.setData({
      sendSms: 'sendSms',
      jishi: '',
      s: '获取验证码',
      time:60,
      smsFlag: false,
    })

  },
  addinput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  sendSms: function(e) {

    var phone = e.currentTarget.dataset.phone;
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      wx.showToast({
        title: "请输入正确的手机号码",
        icon: "none"
      });
      return false;
    }
    var _this = this;
    var params = {
      url: fun.baseurl + '/system/sms/sendSms/' + phone + '/' + 1 + '/' + 1,
      method: 'GET',
      data: {},
    };

    fun.https(params).then(res => {
      console.log(res,'res')
      if (res.data.code == 200) {
        wx.showToast({
          title: "发送成功",
          icon: "none"
        });

        var timer = setInterval(function () {
          _this.setData({
            sendSms: '',
            jishi: 'jishi',
            s: this.data.time + 's',
            time: this.data.time-1,
            sms: res.data.data,
            smsFlag: true,
          });
          if (_this.data.time < 0) {
            clearInterval(timer)
            _this.setData({
              sendSms: 'sendSms',
              jishi: '',
              s: '获取验证码',
              time: 60,
              smsFlag: false,
            });
          }
        }.bind(this), 1000);
        
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: "none"
        })
      }
    })
  },
  formSubmit: function(res) {
    var phone = res.detail.value.phone;
    var code = res.detail.value.code;
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      wx.showToast({
        title: "请输入正确的手机号码",
        icon: "none"
      });
      return false;
    }
    if (phone != this.data.phone) {
      wx.showToast({
        title: "手机号不匹配，请检查",
        icon: "none"
      });
      return false;
    }
    if (code != this.data.sms) {
      wx.showToast({
        title: "验证码错误",
        icon: "none"
      });
      return false;
    }
    var openId = wx.getStorageSync('OpenId');
    var userInfo = wx.getStorageSync('userInfo');
    var _this = this;
    var params = {
      url: fun.baseurl + '/fangyuanapi/wxUser/smallRegister',
      method: 'POST',
      data: {
        code:code,
        openId: openId,
        phone: phone,
        avatar: userInfo.avatarUrl,
        nickname: userInfo.nickName
      },
<<<<<<< HEAD
      type: 'application / x - www - form - urlencoded'
=======
      type: 'application/x-www-form-urlencoded'
>>>>>>> java版
      
    };
    fun.https(params).then(res=>{
      if(res.data.code == 200){
        wx.setStorageSync('token', res.data.data);
        _this.goback();
        
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: "none"
        });
      }
    })
    
  },
  goback: function() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})