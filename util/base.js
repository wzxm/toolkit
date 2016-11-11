if($ == undefined && Zepto == undefined) {
	console.info('Zepto is require.');
}

var msg = new RegExp("", "");

;(function(window, document){
	'use strict';

	var util = {
		init: function(){

		},
		get: function(key){

		},
		clear: function(){

		},
		/**
		 * @description [格式化金额，保留两位小数使用截取方式]
		 * @example
		 * var number = util.toFixed(20.563258545);
		 * @param  {[number or string]} value [输入值]
		 * @return {[string]}       [返回结果]
		 */
		toFixed: function(value){
			var bb = value + '';
			var dot = bb.indexOf('.');
			var result = '';
			if(dot == -1){
				result = parseFloat(bb).toFixed(2);
			} else {
				var cc = bb.substring(dot + 1, bb.length);
				if(cc.length >= 3){
					result = bb.substring(0, dot + 1) + cc.substring(0, 2);
				} else {
					result = parseFloat(bb).toFixed(2);
				}
			}
			var arr = result.split('.');
			var returnValue = 0;
			return util.fomney(arr[0]) + '.' + arr[1];
		},
		// 格式化金额，千分位
		fomney: function(num){
			var num = (num || 0).toString();
			var result = '';

			if(num.indexOf('.') != -1){
				result = "." + num.split(".")[1];
            	num = num.split(".")[0];
			}
			while(num.length > 3){
				result = ',' + num.slice(-3) + result;
				num = num.slice(0, num.length - 3);
			}
			if(num){
				result = num + result;
			}
			return result;
		},
		// 将后台字符串("/Date(1462060800000)/")转化为 Date 对象
		strToDate: function(str){
			var date = new Date(str);
			
		}
	}

	window.util = util;
})(this, document);