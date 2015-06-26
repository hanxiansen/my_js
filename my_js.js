// 1、自定义获取DOM元素中获取id或者class标签元素的js函数
var g = function(id) {
	if (id.substr(0, 1) == '.') {
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}