//api接口
<<<<<<< HEAD
const baseurl = 'http://192.168.1.11:9527';    //  开发api
// const baseurl = 'http://192.168.3.3:9527';   //  测试api
//访问接口
const https = (params) => {
  //返回promise 对象
  
=======
// const baseurl = 'http://192.168.10.2:9527'; //  开发api
const baseurl = 'http://192.168.3.137:9527';   //  测试api
//访问接口
const https = (params) => {
  //返回promise 对象

>>>>>>> java版
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
<<<<<<< HEAD
      url: params.url,    
=======
      url: params.url,
>>>>>>> java版
      method: params.method,
      data: params.data,
      type: params.type,
      header: {
<<<<<<< HEAD
        "Content-Type": !(params.type) ? "application/json" : params.type,   
        "token": wx.getStorageSync('userInfo') ? wx.getStorageSync('token') : ''
      },
     
=======
        "Content-Type": !(params.type) ? "application/json" : params.type,
        "token": wx.getStorageSync('userInfo') ? wx.getStorageSync('token') : ''
      },

>>>>>>> java版
      success: function (res) {
        wx.hideLoading();
        //接口访问正常返回数据
        resolve(res)
        // console.log(res)
        if (res.data.code != 200) {
<<<<<<< HEAD
          
=======

>>>>>>> java版
          wx.showToast({
            icon: 'none',
            title: res.data.message
          })

        }

<<<<<<< HEAD
        //这一步 根据后端  来协定
=======
        // 这一步 根据后端  来协定
>>>>>>> java版
        // if (res.data.message == '令牌失效，请重新登录！') {

        //   wx.navigateTo({
        //     url: '/pages/index/index',
        //   })
        // }


      },
      fail: function (e) {
        wx.showToast({
          icon: 'none',
          title: '请求失败',
        })
        reject(e)
      }
    })
  })
}
<<<<<<< HEAD


=======
// 判断控制柜是否自动状态
function isOnline(e) {

  // 0自动    1手动
  if (e.currentTarget.dataset.online == '1') {
    wx.showToast({
      icon: 'none',
      title: '当前控制柜处于手动状态,不能远程控制',
    })
    return false;

  } else {
    return true;
  }
}
// 判断通风是否是自动状态
function code(e) {
  // 如果操作的是通风且只能通风处于自动状态下就不能操作  
  if (e.currentTarget.dataset.code == '2' && e.currentTarget.dataset.isauto == '0') {
    console.log('aaaaaaa')
    wx.showToast({
      icon: 'none',
      title: '当前已开启自动通风模式',
    })
    return false;

  } else {
    return true;
  }
}
>>>>>>> java版
//判断消息未读
function isMessage() {
  var url = apiurl("admin/my/index");
  var user_id = wx.getStorageSync('user_id');
  if (user_id) {
    ajax(url, {
      user_id: user_id
<<<<<<< HEAD
    }, function(ret) {
=======
    }, function (ret) {
>>>>>>> java版
      if (ret.data.code == 1) {
        if (ret.data.data.read == 1) {
          wx.showTabBarRedDot({
            index: 3
          });
        } else {
          wx.hideTabBarRedDot({
            index: 3
          });
        }
      } else {
        console.log(ret.data.msg)
      }
    })
  }
}
//判断是否有token
function istoken() {
  var token = wx.getStorageSync('token');
  if (!token) {
    wx.showToast({
      title: '请登录',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}
//打开页面
function openPage(url) {
  wx.navigateTo({
    url: url,
  })
}
module.exports = {
  baseurl,
  https,
<<<<<<< HEAD
=======
  isOnline,
  code,
>>>>>>> java版
  istoken: istoken,
  openPage: openPage,
  isMessage: isMessage,
}