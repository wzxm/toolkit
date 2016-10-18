(function(window, document){
	'use strict';

	window.util = {
		init: function(){

		},
		get: function(key){

		},
		clear: function(){

		},
		// 格式化金额，保留两位小数使用截取方式
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
		}
	}
})(this, document);