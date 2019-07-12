//兼容各种游览器
window.requestAnimFrame = (function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

//排序之快速排序start
/*
    没传参（初始状态）默认排序整个数组，有传参则是递归（部分排序）；
	left为需要数组中参与排序的起始点；right为数组中参与排序的终止点;
	partitionIndex为基准值的坐标，将大于（小于）其值分别放在右（左）侧;
*/
function quicksort(arr, left, right) {
	var partitionIndex,
		left = typeof left != 'number' ? 0 : left,
		right = typeof right != 'number' ? arr.length - 1 : right;
	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quicksort(arr, left, partitionIndex - 1);
		quicksort(arr, partitionIndex + 1, right);
	}
	return arr;
}
/*
快排思想：
	left索引作为参考值，循环与其比较大小；
	index索引是arr中待交换位置；（left索引最后移动，将需要交换的元素依次放在left索引后）
	每次都是swap(交换）后，index移动到下一个位置。
	在循环结束后，index仍为待交换的位置，所以index的值未定，
	排序区间为left+1到index-1索引值，其值都小于参考值arr[left]；
	再将left换到index-1，排序区间为left到index-2，
	返回的index-1则作为主函数递归用的参考值分界线；
*/
function partition(arr, left, right) {
	var index = left + 1;
	for (var i = index; i < right; i++) {
		if (arr[i] < arr[left]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, left, index - 1);
	return index - 1;
}

//交换位置
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
//排序之快速排序over

//数组去重
//（一）indexOf方法 (方法绑定在Object上)
Array.prototype.norepeat = function () {
	var temp = [];
	for (var i = 0; i < this.length; i++) {
		if (temp.indexOf(this[i]) == -1) {
			temp.push(this[i]);
		}
	}
	return temp;
}
//（二）hash方法 (基本数据类型时可用，对象类型不可用)
Array.prototype.unique = function () {
	var hash = {}, result = [], type = '', item;
	for (var i = 0; i < this.length; i++) {
		item = this[i];
		type = Object.prototype.toString.call(item);
		if (!hash[item + type]) {
			hash[item + type] = true;
			result.push(item);
		}
	}
	return result;
};

//数组求极值
Object.prototype.findMax = function (arr) {
	return Math.max.apply(null, arr); //第一个参数给了一个null,这是因为没有对象去调用这个方法,我只需要用这个方法帮我运算,得到返回的结果就行,.所以直接传递了一个null过去
}

//计算长度平方
function calLength2(x1, y1, x2, y2) {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}

//随机颜色
function randomColor() {
	var col = [0, 1, 2];
	col[0] = Math.random() * 100 + 155;
	col[0] = col[0].toFixed();
	col[1] = Math.random() * 100 + 155;
	col[1] = col[1].toFixed();
	col[2] = Math.random() * 100 + 155;
	col[2] = col[2].toFixed();
	var num = Math.floor(Math.random() * 3);
	col[num] = 0;
	return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",";
}


function lerpAngle(a, b, t) {
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}

function inOboundary(arrX, arrY, l, r, t, b) { //在l r t b范围内的检测
	return arrX > l && arrX < r && arrY > t && arrY < b;
}

function rgbColor(r, g, b) {
	r = Math.round(r * 256);
	g = Math.round(g * 256);
	b = Math.round(b * 256);
	return "rgba(" + r + "," + g + "," + b + ",1)";
}

function rgbNum(r, g, b) {
	r = Math.round(r * 256);
	g = Math.round(g * 256);
	b = Math.round(b * 256);
	return "rgba(" + r + "," + g + "," + b;
}

function rnd(m) {
	var n = m || 1;
	return Math.random() * n;
}

function rateRandom(m, n) {
	var sum = 0;
	for (var i = 1; i < (n - m); i++) {
		sum += i;

	}

	var ran = Math.random() * sum;

	for (var i = 1; i < (n - m); i++) {
		ran -= i;
		if (ran < 0) {
			return i - 1 + m;
		}
	}
}

function distance(x1, y1, x2, y2, l) {
	var x = Math.abs(x1 - x2);
	var y = Math.abs(y1 - y2);
	if (x < l && y < l) {
		return true;
	}
	return false;
}

function AABBbox(object1, w1, h1, object2, w2, h2, overlap) {
	A1 = object1.x + overlap;
	B1 = object1.x + w1 - overlap;
	C1 = object1.y + overlap;
	D1 = object1.y + h1 - overlap;

	A2 = object2.x + overlap;
	B2 = object2.x + w2 - overlap;
	C2 = object2.y + overlap;
	D2 = object2.y + h2 - overlap;

	if (A1 > B2 || B1 < A2 || C1 > D2 || D1 < C2) return false;
	else return true;
}


function dis2(x, y, x0, y0) {
	var dx = x - x0;
	var dy = y - y0;
	return dx * dx + dy * dy;
}

function rndi2(m, n) {
	var a = Math.random() * (n - m) + m;
	return Math.floor(a);
}


//禁止ctrl复制
function stopCopy() {
	document.onkeydown = function () {
		if ((event.ctrlKey) && (window.event.keycode == 67)) {
			event.returnValue = false;
			alert("Ctrl+C被禁止啦！");
		}
	}
	document.onmousedown = function () {
		if (event.button == 2) {
			event.returnValue = false;
			alert("右键被禁止啦！");
		}
	}
}
