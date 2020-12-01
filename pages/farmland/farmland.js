var bmap = require('../../utils/bmap-wx.min.js');
var util = require('../../utils/util.js');
var fun = require('../../utils/function.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    
    nones: 'block', 
    uhide:-1,
=======

    nones: 'block',
    uhide: -1,
>>>>>>> java版
    shed: 7, //运行的棚的数量
    items: [{
        name: '大棚一',
        value: '1',
      },
      {
        name: '大棚二',
        value: '2'
      },
      {
        name: '大棚三',
        value: '3'
      },
      {
        name: '大棚四',
        value: '4'
      },
      {
        name: '大棚五',
        value: '5'
      },
      {
        name: '大棚六',
        value: '6'
      },
      {
        name: '大棚七',
        value: '7'
      },
    ],
    list: false,
    select: false, //选择大棚
    change_ping: false,
<<<<<<< HEAD
=======
    change_open: false,
>>>>>>> java版
    checkall: false,
    batchIds: '', //选中的ids
    checkedarr: '',
    fertilizer_name: 'A肥', //肥料名称
    standing_crop: '500', //肥料现有量
    concentration: 50, //肥料浓度
    height: 0, //遮罩层高度
    color: '#97fdc8',
    ping: false,
<<<<<<< HEAD
    isAuto: 1
  },


  //点击展开闭合土地
  clickButtton:function(e) {
    console.log(e)
    var uhide = this.data.uhide;
    if(e.currentTarget.dataset.id == uhide){
      this.setData({
        uhide:-1
      })
    }else{
      this.setData({
        uhide:e.currentTarget.dataset.id
      })
    }
   

    
  },
  
  //操作设备
  move: function(e) {
    var data = {
      user_id: wx.getStorageSync('user_id'),
      code: e.currentTarget.dataset.code,
      // 这个  操作指令  1,244，255，00   开     1,244，00，00 关 goToIquire
      command: e.currentTarget.dataset.command,
      product_type: 1,
      crop_id: e.currentTarget.dataset.cropid,
      action_id: e.currentTarget.dataset.actionid,
      eid: e.currentTarget.dataset.eid,
      land_id: e.currentTarget.dataset.landid,
      action_content_id: e.currentTarget.dataset.action_content_id,
    }
    var thisid = e.currentTarget.dataset.thisid;
    var index = e.currentTarget.dataset.index;
    var indexs = e.currentTarget.dataset.indexs;
    var indexss = e.currentTarget.dataset.indexss;
    var _this = this;
    var action_name = e.currentTarget.dataset.msg;
    var command_name = e.currentTarget.dataset.msgs;
    var command = e.currentTarget.dataset.command;
    var closeid = e.currentTarget.dataset.closeid;
    var user_id = wx.getStorageSync('user_id');
    var url = fun.apiurl("admin/wisdom/useEquipment");
    wx.showModal({
      title: '提示',
      content: '确定执行【' + action_name + '】的【' + command_name + '】操作吗？',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '请稍等',
            mask: true
          })
          fun.ajax(url, data, function(ret) {
            if (ret.data.code == 1) {
              setTimeout(function() {
                wx.hideLoading();
                wx.showToast({
                  title: '操作成功'
                });
              }, 1000)

            } else {
              wx.hideLoading();
              wx.showToast({
                title: '失败'
              })
              console.log(ret);
            }
          })
        }
      }
    })
  },
  //弹窗修改瓶子信息
  change_detail: function(e) {
=======
    isAuto: 0,
    open: 23,
    close: 15

  },
  //下拉刷新
  onPullDownRefresh: function() {
    var token = wx.getStorageSync('token');
    token = !token ? -1 : token;
    this.onLoad();
    this.onShow();
  },

  //点击展开闭合土地
  clickButtton: function (e) {
    console.log(e)
    var uhide = this.data.uhide;
    if (e.currentTarget.dataset.id == uhide) {
      this.setData({
        uhide: -1
      })
    } else {
      this.setData({
        uhide: e.currentTarget.dataset.id
      })
    }
  },

  // 点击展开闭合设备
  listBtn: function (e) {
    console.log(e, 'e')
    var _this = this;
    var index = e.currentTarget.dataset.index;
    var e = e.currentTarget.dataset.e;

    let isshow = _this.data.data[index].dbEquipmentVos[e].isShow;

    if (_this.data.data[index].dbEquipmentVos[e].isShow == false) {
      _this.setData({
        isshow: true
      })
    } else {
      _this.setData({
        isshow: false
      })
    }

  },

  // 扫码
  saoma: function (e) {
    wx.scanCode({
      success(res) {
        var result = res.result
        console.log('sssssssssss', result)
        wx.setStorageSync('scan', result)
        //注意，此处如果不用缓存带链接去界面，可能会发生链接无法带参的情况。
        wx.navigateTo({
          url: '/pages/h5/h5?result=' + result,
        })

      }
    })
  },


  //弹窗修改瓶子信息
  change_detail: function (e) {
>>>>>>> java版
    var that = this;
    var oldheight = that.data.height;
    var oldstanding_crop = that.data.standing_crop;
    if (e.detail.value.name == '') {
      wx.showModal({
        title: '提示',
        content: '肥料名称不能为空',
        showCancel: false,
      })
    } else if (e.detail.value.standing_crop == "") {
      wx.showModal({
        title: '提示',
        content: '肥料现有量不能为空',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log(res, '用户点击确定')
            that.setData({
              standing_crop: that.data.standing_crop
            });
          }
        }
      })
    } else if ((e.detail.value.standing_crop) * 1 < that.data.standing_crop) {
      wx.showModal({
        title: '提示',
        content: '新增量不能小于现有量',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log(res, '用户点击确定')
            that.setData({
              standing_crop: that.data.standing_crop
            });
          }
        }
      })
    } else if (e.detail.value.standing_crop > 500) {
      wx.showModal({
        title: '提示',
        content: '现有量不能超过容器体积',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log(res, '用户点击确定')
            that.setData({
              standing_crop: that.data.standing_crop
            });
          }
        }
      })
    } else {
      that.setData({
        change_ping: false,
        fertilizer_name: e.detail.value.name,
        standing_crop: e.detail.value.standing_crop,
        height: oldheight - ((e.detail.value.standing_crop - oldstanding_crop) / 500 * 76)
      })

      wx.showToast({
        title: '操作成功'
      });
      if (that.data.standing_crop > 50) {
        that.setData({
          ping: false,
          color: '#97fdc8',
          fz_color: ''
        })
      }
    }
  },
  //施肥量聚焦
<<<<<<< HEAD
  inp_focus: function() {
=======
  inp_focus: function () {
>>>>>>> java版
    this.setData({
      xian: true
    })
  },
  //施肥量失焦
<<<<<<< HEAD
  inp_focusx: function(e) {
=======
  inp_focusx: function (e) {
>>>>>>> java版
    var that = this;
    console.log(e.detail.value, that.data.standing_crop, '施肥量');
    if (e.detail.value == "") {
      wx.showModal({
        title: '提示',
        content: '你还没有添加施肥量',
        showCancel: false
      })
    } else if (e.detail.value <= 0 || e.detail.value < 10) {
      wx.showModal({
        title: '提示',
        content: '至少输入10L',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log(res, '用户点击确定')
            that.setData({
              fertilizing: ''
            });
          }
        }
      })
    } else if ((e.detail.value) * 1 > that.data.standing_crop) {
      wx.showModal({
        title: '提示',
        content: '您当前现有量不足，请添加',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log(res, '用户点击确定')

            that.setData({
              fertilizing: '',
              change_ping: true
            });
          }
        }

      })
    } else {
      that.setData({
        fertilizing: e.detail.value
      })
    }

    this.setData({
      xian: false
    })
  },
  // 施肥
  fertilize() {
    console.log('施肥')
    var that = this;
    if (that.data.fertilizing) {
      that.setData({
        list: (!that.data.list)
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请先添加施肥量',
        showCancel: false,
      })
    }

  },

<<<<<<< HEAD
  //自动切换手动
  change_automatic: function(e) {
=======
  // 设备状态说明
  Automatic_state() {
    wx.showToast({

      icon: 'none',
      title: '当前控制柜处于自动状态,可远程控制',

    })
  },
  manual_state() {
    wx.showToast({
      icon: 'none',
      title: '当前控制柜处于手动状态,不能远程控制',
    })
  },
  guzhang() {
    wx.showToast({
      icon: 'none',
      title: '设备故障，请检查！',
    })
  },

  //自动切换手动
  change_automatic: function (e) {
>>>>>>> java版

    var params = {
      url: fun.baseurl + '/fangyuanapi/OperateVentilate/operateTongFengHand',
      method: 'GET',
      data: {
        dbEquipmentId: e.currentTarget.dataset.id,
        i: 1
      },
    };
    var _this = this;
    fun.https(params).then(res => {
      console.log(res, '自动切换手动')
      if (res.data.code == 200) {
        _this.setData({
          isAuto: 1
        })
      } else if (res.data.code == 500) {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })

      } else {
        console.log(res)
      }

    })
  },

  // 手动切换自动
<<<<<<< HEAD
  change_manual: function(e) {
=======
  change_manual: function (e) {
>>>>>>> java版
    var params = {
      url: fun.baseurl + '/fangyuanapi/OperateVentilate/operateTongFengHand',
      method: 'GET',
      data: {
        dbEquipmentId: e.currentTarget.dataset.id,
        i: 0
      },
    };
    var _this = this;
    fun.https(params).then(res => {
      console.log(res, '手动切换自动')
      if (res.data.code == 200) {
        _this.setData({
          isAuto: 0
        })
      } else if (res.data.code == 500) {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })

      } else {
        console.log(res)
      }

    })
  },
<<<<<<< HEAD
  // 手动状态下卷起
  roll_up:function(e){
      console.log(e,'卷起')
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateApp/oprateEqment',
      method: 'GET',
      data: {
        dbEquipmentId: e.currentTarget.dataset.id,
        handleName: 'start',
        type:'1'
=======

  // 智能通风温度


  // 操作集按钮说明：   首先先判断设备是否是自动状态   0 代表自动   1代表手动
  // 自动状态下可以远程操控    手动状态下不可以


  // 手动状态下卷起
  roll_up: function (e) {
    console.log(e, '卷起')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/oprateEqment',
      method: 'GET',
      data: {
        id: e.currentTarget.dataset.id,
        handleName: 'start',
        type: '1'
>>>>>>> java版
      },
    };
    var _this = this;
    fun.https(params).then(res => {
<<<<<<< HEAD
      console.log(res,'手动状态下卷起')
=======
      console.log(res, '手动状态下卷起')
>>>>>>> java版
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else if (res.data.code == 500) {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      } else {
        console.log(res)
      }
    })
  },
  // 手动状态下卷起暂停
<<<<<<< HEAD
  roll_stop:function(e){
      console.log(e,'暂停')
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateApp/oprateEqment',
      method: 'GET',
      data: {
        dbEquipmentId: e.currentTarget.dataset.id,
        handleName: 'start_stop',
        type:'2'
=======
  roll_stop: function (e) {
    console.log(e, '暂停')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/oprateEqment',
      method: 'GET',
      data: {
        id: e.currentTarget.dataset.id,
        handleName: 'start_stop',
        type: '2'
>>>>>>> java版
      },
    };
    var _this = this;
    fun.https(params).then(res => {
<<<<<<< HEAD
      console.log(res,'手动状态下暂停')
=======
      console.log(res, '手动状态下暂停')
>>>>>>> java版
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else if (res.data.code == 500) {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      } else {
        console.log(res)
      }
    })
  },
  // 手动状态下放下
<<<<<<< HEAD
  down:function(e){
      console.log(e,'放下')
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateApp/oprateEqment',
      method: 'GET',
      data: {
        dbEquipmentId: e.currentTarget.dataset.id,
        handleName: 'down',
        type:'3'
=======
  lay_down: function (e) {
    console.log(e, '放下')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/oprateEqment',
      method: 'GET',
      data: {
        id: e.currentTarget.dataset.id,
        handleName: 'down',
        type: '3'
>>>>>>> java版
      },
    };
    var _this = this;
    fun.https(params).then(res => {
<<<<<<< HEAD
      console.log(res,'手动状态下暂停')
=======
      console.log(res, '手动状态下暂停')
>>>>>>> java版
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else if (res.data.code == 500) {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      } else {
        console.log(res)
      }
    })
  },
  // 手动状态下放下停止
<<<<<<< HEAD
  down_stop:function(e){
      console.log(e,'放下')
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateApp/oprateEqment',
      method: 'GET',
      data: {
        dbEquipmentId: e.currentTarget.dataset.id,
        handleName: 'down_stop',
        type:'4'
=======
  lay_down_stop: function (e) {
    console.log(e, '放下')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/oprateEqment',
      method: 'GET',
      data: {
        id: e.currentTarget.dataset.id,
        handleName: 'down_stop',
        type: '4'
>>>>>>> java版
      },
    };
    var _this = this;
    fun.https(params).then(res => {
<<<<<<< HEAD
      console.log(res,'手动状态下放下停止')
=======
      console.log(res, '手动状态下放下停止')
>>>>>>> java版
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else if (res.data.code == 500) {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      } else {
        console.log(res)
      }
    })
  },
  // 自动状态下操作不生效
<<<<<<< HEAD
  grey(){
=======
  grey() {

>>>>>>> java版
    wx.showModal({
      title: '温馨提示~',
      content: '当前处于自动通风状态',
      showCancel: false,
    })
  },
<<<<<<< HEAD

  // 控制设备   两种  1：4个按钮的操作集   2：2个按钮的操作集

  // 4按钮的start
  start:function(e){
    console.log(e,'4按钮start')
=======
  // 自动通风开风口弹窗
  open: function (e) {
    console.log(e, '自动开风口温度设置')
    this.setData({
      change_open: true
    })
  },
  // 点击外部隐藏弹窗
  open_none() {
    this.setData({
      change_open: false
    })
  },
  // 自动通风开风口温度设置
  open_change: function (e) {
    console.log(e, 'e')
    var _this = this;
    if (e.detail.value.open == '') {
      wx.showModal({
        title: '提示',
        content: '开风口温度不能为空',
        showCancel: false,
      })
    }else if(e.detail.value.open < _this.data.close){
      wx.showModal({
        title: '提示',
        content: '开风口温度不能小于闭风口的温度',
        showCancel: false,
      })
    }else {
      var params = {
        url: fun.baseurl + '/fangyuanapi/OperateVentilate/operateTongFengType',
        method: 'GET',
        data: {
          dbEquipmentId: e.currentTarget.dataset.id,
          i: 0,
          temp: (e.detail.value.open) * 10
        },
      };
      fun.https(params).then(res => {
        if (res.data.code == 200) {
          _this.setData({
            change_open: false,
            open: e.detail.value.open
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg,
          })
        }

      })

    }
  },

  // 自动通风闭风口弹窗
  close: function (e) {
    console.log(e, '自动闭风口温度设置')
    this.setData({
      change_close: true
    })
  },
  // 点击外部隐藏弹窗
  close_none() {
    this.setData({
      change_close: false
    })
  },
  // 自动通风闭风口温度设置
  close_change: function (e) {
    console.log(e, 'e')
    var _this = this;
    if (e.detail.value.close == '') {
      wx.showModal({
        title: '提示',
        content: '闭风口温度不能为空',
        showCancel: false,
      })
    } else if (e.detail.value.close > _this.data.open) {
      wx.showModal({
        title: '提示',
        content: '闭风口温度不能大于开风口温度',
        showCancel: false,
      })
    } else {
      var params = {
        url: fun.baseurl + '/fangyuanapi/OperateVentilate/operateTongFengType',
        method: 'GET',
        data: {
          dbEquipmentId: e.currentTarget.dataset.id,
          i: 1,
          temp: (e.detail.value.close) * 10
        },
      };
      fun.https(params).then(res => {
        if (res.data.code == 200) {
          _this.setData({
            change_close: false,
            close: e.detail.value.close
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg,
          })
        }

      })

    }
  },





  // 控制设备   三种  1：4个按钮的操作集  2：3个按钮的操作集   3：2个按钮的操作集

  // 4按钮的start
  start: function (e) {
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
    console.log(e, '4按钮start')
>>>>>>> java版
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
<<<<<<< HEAD
        name:e.currentTarget.dataset.name,
        text:e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res,'4按钮start')
    })
 },

  // 4按钮的start_stop
  start_stop:function(e){
    console.log(e,'4按钮start_stop')
=======
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {

      console.log(res, '4按钮start')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },

  // 4按钮的start_stop
  start_stop: function (e) {
    console.log(e, '4按钮start_stop')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
>>>>>>> java版
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
<<<<<<< HEAD
        name:e.currentTarget.dataset.name,
        text:e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res,'4按钮start_stop')
    })
 },

  // 4按钮的down
  down:function(e){
    console.log(e,'4按钮down')
=======
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res, '4按钮start_stop')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },

  // 4按钮的down
  down: function (e) {
    console.log(e, '4按钮down')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
>>>>>>> java版
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
<<<<<<< HEAD
        name:e.currentTarget.dataset.name,
        text:e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res,'4按钮down')
    })
 },

  // 4按钮的down_stop
  down_stop:function(e){
    console.log(e,'4按钮down_stop')
=======
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res, '4按钮down')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },

  // 4按钮的down_stop
  down_stop: function (e) {
    console.log(e, '4按钮down_stop')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
>>>>>>> java版
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
<<<<<<< HEAD
        name:e.currentTarget.dataset.name,
        text:e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res,'4按钮down_stop')
    })
 },
 
 // 2按钮的start
 start_two:function(e){
  console.log(e,'2按钮start')
  var params = {
    url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
    method: 'GET',
    data: {
      handleName: e.currentTarget.dataset.handlename,
      id: e.currentTarget.dataset.id,
      name:e.currentTarget.dataset.name,
      text:e.currentTarget.dataset.text
    },
  };
  fun.https(params).then(res => {
    console.log(res,'2按钮start')
  })
 },
 // 2按钮的start_stop
 start_stop_two:function(e){
  console.log(e,'2按钮start_stop')
  var params = {
    url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
    method: 'GET',
    data: {
      handleName: e.currentTarget.dataset.handlename,
      id: e.currentTarget.dataset.id,
      name:e.currentTarget.dataset.name,
      text:e.currentTarget.dataset.text
    },
  };
  fun.https(params).then(res => {
    console.log(res,'2按钮start_stop')
  })
 },
=======
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res, '4按钮down_stop')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },

  // 3按钮的start
  start_three(e) {
    console.log(e, '3按钮start')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {

      console.log(res, '3按钮start')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },
  // 3按钮的start_stop
  start_stop_three(e) {
    console.log(e, '3按钮start')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {

      console.log(res, '3按钮start_stop')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },
  // 3按钮的down
  down_three(e) {
    console.log(e, '3按钮down')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    // 判断通风是否是自动状态
    if (!fun.code(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {

      console.log(res, '3按钮down')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },
  // 2按钮的start
  start_two: function (e) {
    console.log(e, '2按钮start')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res, '2按钮start')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },
  // 2按钮的start_stop
  start_stop_two: function (e) {
    console.log(e, '2按钮start_stop')
    // 判断设备是否是自动状态
    if (!fun.isOnline(e)) {
      return false;
    }

    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/operate',
      method: 'GET',
      data: {
        handleName: e.currentTarget.dataset.handlename,
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name,
        text: e.currentTarget.dataset.text
      },
    };
    fun.https(params).then(res => {
      console.log(res, '2按钮start_stop')
      if (res.data.code == 200) {
        wx.showToast({
          icon: 'success',
          title: '操作成功',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.msg,
        })
      }
    })
  },
>>>>>>> java版

  //点击箭头显示大棚数量
  select() {
    var that = this;
    console.log('点击显示')
    this.setData({
      select: (!that.data.select)
    })
  },
  //点击瓶子事件
<<<<<<< HEAD
  change_ping: function(e) {
=======
  change_ping: function (e) {
>>>>>>> java版
    console.log('瓶子')
    this.setData({
      change_ping: true
    })
  },

  //全选施肥
<<<<<<< HEAD
  checkall: function(e) {
=======
  checkall: function (e) {
>>>>>>> java版
    console.log(e)
    var that = this;
    var arr = []; //存放选中id的数组
    console.log(that.data.items[0]);
    for (let i = 0; i < that.data.items.length; i++) {

      that.data.items[i].checked = (!that.data.checkall)

      if (that.data.items[i].checked == true) {
        // 全选获取选中的值
        arr = arr.concat(that.data.items[i].value.split(','));
      }
    }
    console.log(arr, '222222')
    that.setData({
      items: that.data.items,
      checkall: (!that.data.checkall),
      batchIds: arr,
      checkedarr: ''
    })
  },

  //选择大棚
<<<<<<< HEAD
  checkboxChange: function(e) {
=======
  checkboxChange: function (e) {
>>>>>>> java版
    console.log('checkbox发生change事件，携带value值为：', e)
    var value = e.detail.value;
    console.log(value, '111111111')

    this.setData({
      checkedarr: value
    })

  },

  //确定施肥
<<<<<<< HEAD
  fertilize_start: function(e) {
=======
  fertilize_start: function (e) {
>>>>>>> java版

    var that = this;
    var oldheight = that.data.height;
    console.log(oldheight, '高度');
    console.log(that.data.checkedarr, '选中后的新数组');

    if (that.data.checkedarr.length || that.data.batchIds.length) {
      wx.showModal({
        title: '提示',
        content: '确定要开始施肥吗',
        success(res) {
          if (res.confirm) {
            console.log(that, '用户点击确定')
            for (var i = 0; i < that.data.checkedarr.length; i++) {
              console.log(that.data.checkedarr[i], '要施肥的大棚')
            };

            that.setData({
              list: false,
              standing_crop: that.data.standing_crop - that.data.fertilizing,
              checkedarr: '',
              fertilizing: '',
              height: oldheight + (77 * that.data.fertilizing / 500),
            });

            if (that.data.batchIds.length) {
              that.checkall()
            }

            wx.showToast({
              title: '操作成功'
            });
            if (that.data.standing_crop <= 50) {
              that.setData({
                ping: true,
                color: '#db5656',
                fz_color: '#db5656'
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '至少选择一个大棚',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }

  },


<<<<<<< HEAD





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


  },

  //生命周期函数--监听页面显示
  onShow: function() {
=======
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
>>>>>>> java版
    //天气预报
    var _this = this;
    var BMap = new bmap.BMapWX({
      ak: 'QHgOjw296YGpe5PLLCnh61mfzGSBNkit'
    });
    BMap.regeocoding({
<<<<<<< HEAD
      success: function(res) {
=======
      success: function (res) {
>>>>>>> java版
        console.log(res, 'res')
        _this.setData({
          city: res.originalData.result.addressComponent.city,
          lat: res.originalData.result.location.lat, //  lat是纬度
          lng: res.originalData.result.location.lng, //  lng是经度
        })

        var params = {

          url: fun.baseurl + '/fangyuanapi/weather/getWeatherWeChat',
          method: 'GET',
          data: {
            lat: _this.data.lat,
            lng: _this.data.lng,
            type: 5
          },
        };
        fun.https(params).then(res => {
          console.log(res, '天气')
          if (res.data.code == 200) {
            _this.setData({
              weather: res.data.data,
              wind: res.data.data.wind_direction + res.data.data.wind_power
            })
          }
        })
      },
    });


<<<<<<< HEAD
=======
  },

  //生命周期函数--监听页面显示
  onShow: function () {


    var _this = this;
>>>>>>> java版
    var params = {
      url: fun.baseurl + '/fangyuanapi/operateWeChat/getList',
      method: 'GET',
      data: {},
    };

    fun.https(params).then(res => {
      console.log(res, '土地列表')

      if (res.data.code == 200) {
        if (res.data.data.length == 0) {
          _this.setData({
            nones: 'block'
          })
        } else {
          _this.setData({
            nones: 'none'
          })
        }

        _this.setData({
          data: res.data.data
        })
      } else {
        console.log(res);
      }
    })

<<<<<<< HEAD
    fun.isMessage();
  },
  openaddland: function(e) {
=======

  },
  openaddland: function (e) {
>>>>>>> java版

    var token = wx.getStorageSync('token');
    if (!fun.istoken()) {
      return false;
    }
    fun.openPage("/pages/dome/dome");
  },
})