const fun = require('../../utils/function.js');
Page({
<<<<<<< HEAD
  onShow: function() {
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/getList',
=======
  onShow() {
    var params = {
      url: fun.baseurl + '/fangyuanapi/land/list',
>>>>>>> java版
      method: 'GET',
      data: {},
    };
    var _this = this;
    fun.https(params).then(res => {
      console.log(res, '土地列表')
      _this.setData({
<<<<<<< HEAD
        list: res.data.data
=======
        list: res.data.rows
>>>>>>> java版
      })
    })
  },
  goback: function() {
    wx.navigateBack();
  },
  //编辑土地
  editLand: function(e) {
    console.log(e, 'e')
    var id = e.currentTarget.dataset.id;
    fun.openPage('/pages/message/message?id=' + id);
  },
  //添加土地
  addLand: function() {
    fun.openPage('/pages/message/message');
  },
  //删除
  bindlongpress: function(e) {
    console.log(e, 'e')
    var id = e.currentTarget.dataset.id;
    var _this = this;
    wx.showActionSheet({
      itemList: ['删除'],
      itemColor: 'red',
      success(res) {
        wx.showModal({
          title: '提示',
          content: '确定删除？',
          confirmColor: 'red',
          success(res) {
            if (res.confirm) {
              var params = {
                url: fun.baseurl + '/fangyuanapi/land/remove',
                method: 'GET',
                data: {
                  landId: id
                },

              };
<<<<<<< HEAD
              var _this = this;
=======
              
>>>>>>> java版
              fun.https(params).then(res => {
                if (res.data.code == 200) {
                  
                  wx.showToast({
                    title: '删除成功',
                  })
                  _this.onShow();
                }


              })


            }
          }
        })
      },
    })
  },
  complete: function() {
    wx.switchTab({
      url: '/pages/farmland/farmland'
    })
  }
})