// pages/message/message.js
const fun = require('../../utils/function.js');
var bmap = require('../../utils/bmap-wx.min.js');
Page({
  data: {
    region: ['山西省', '太原市', '小店区'],
    region_value: ["请选择"],
    crop_show: "请选择",
    cropshow: "none",
    active: {},
    croparr: ['种植', '加工', '养殖'],
  },
  onLoad: function(options) {
    console.log(options.id, '参数')
    var id = options.id;
    var _this = this;
    if (id) {
      var params = {
        url: fun.baseurl + '/fangyuanapi/land/get/' + id,
        method: 'GET',
        data: {

        },
      };
      fun.https(params).then(res => {
        console.log(res, '土地详情信息')
        if (res.statusCode == 200) {
          _this.setData({
            region_value: res.data.region,
            region: res.data.region,
            address: res.data.address,
            landName: res.data.nickName,
            landId: res.data.landId,
            markers: [{
              latitude: res.data.latitude,
              longitude: res.data.longitude
            }],
            latitude: res.data.latitude,
            longitude: res.data.longitude,
            crop_show: res.data.productCategory,
            product: res.data.productName,
            content: res.data.noteText
          })
        }
      })
    } else {
      var _this = this;
      var BMap = new bmap.BMapWX({
        ak: 'QHgOjw296YGpe5PLLCnh61mfzGSBNkit'
      });
      BMap.regeocoding({
        success: function(res) {
          console.log(res, '地理位置')
          _this.setData({

            latitude: res.originalData.result.location.lat, //  lat是纬度
            longitude: res.originalData.result.location.lng, //  lng是经度

            markers: [{
              latitude: res.originalData.result.location.lat,
              longitude: res.originalData.result.location.lng,
            }],
          })
        },
        fail: function(err) {
          wx.showToast({
            icon: 'none',
            title: '请开启定位服务',
          })
        }
      })

    }


  },

  // 所在地区
  bindRegionChange: function(e) {
    this.setData({
      region_value: e.detail.value
    })
  },
  // 地图事件
  clickmap: function() {
    var _this = this;
    wx.chooseLocation({
      success: function(e) {
        _this.setData({
          latitude: e.latitude,
          longitude: e.longitude,
          markers: [{
            latitude: e.latitude,
            longitude: e.longitude,
          }]
        })
      }
    })
  },
  //产品类别选择
  croptypechange: function(e) {

    var typeid = e.detail.value;
    if (typeid == 0) {
      var crop_show = '种植';
    } else if (typeid == 1) {
      var crop_show = '加工';
    } else if (typeid == 2) {
      var crop_show = '养殖';
    }
    this.setData({
      crop_show: crop_show,
      index_show: '请选择产品类别',
    })
  },


  //返回
  goback: function() {
    wx.navigateBack();
  },
  //提交
  submitform: function(res) {
    console.log(res)
    if (res.detail.value.city == '请选择') {
      wx.showToast({
        icon: 'none',
        title: '请选择所在地区',
      })
      return false;
    } else if (!res.detail.value.address) {
      wx.showToast({
        icon: 'none',
        title: '详细地址不能为空',
      })
      return false;
    } else if (!res.detail.value.landName) {
      wx.showToast({
        icon: 'none',
        title: '土地名称不能为空',
      })
      return false;
    } else if (!res.detail.value.longitude) {
      wx.showToast({
        icon: 'none',
        title: '经度不能为空',
      })
      return false;
    } else if (!res.detail.value.latitude) {
      wx.showToast({
        icon: 'none',
        title: '纬度不能为空',
      })
      return false;
    } else if (this.data.crop_show == '请选择') {
      wx.showToast({
        icon: 'none',
        title: '请选择产品类别',
      })
      return false;
    } else if (!res.detail.value.product) {
      wx.showToast({
        icon: 'none',
        title: '请选择产品名称',
      })
      return false;
    }
    // 判断是否有土地id，有id走修改，没有走新增
    var _this = this;
    if (res.detail.value.landId){

      var params = {
        url: fun.baseurl + '/fangyuanapi/land/update',
        method: 'POST',
        data: {
          region: res.detail.value.city,
          address: res.detail.value.address,
          nickName: res.detail.value.landName,
          latitude: res.detail.value.latitude,
          longitude: res.detail.value.longitude,
          productCategory: _this.data.crop_show,
          productName: res.detail.value.product,
          noteText: res.detail.value.content,
          landId: res.detail.value.landId
        },
      };
      
    }else{
      var params = {
        url: fun.baseurl + '/fangyuanapi/land/save',
        method: 'POST',
        data: {
          region: res.detail.value.city,
          address: res.detail.value.address,
          nickName: res.detail.value.landName,
          latitude: res.detail.value.latitude,
          longitude: res.detail.value.longitude,
          productCategory: _this.data.crop_show,
          productName: res.detail.value.product,
          noteText: res.detail.value.content,
          
        },
<<<<<<< HEAD
=======
        type: 'application/x-www-form-urlencoded'
>>>>>>> java版
      };
    }
    
    

    fun.https(params).then(res => {
      
      if (res.data.code == 200) {
        wx.switchTab({
<<<<<<< HEAD
          url: '/pages/farmland/farmland',
=======
          url: '/pages/index/index',
>>>>>>> java版
        })

      }
    })
  }
})