// 把一个计算加法的函数fn柯里化，参数不定但结果相同
// console.log(curried(1, 2, 3)) // 6
// console.log(curried(1, 2)(3)) // 6
// console.log(curried(1)(2, 3)) // 6
// console.log(curried(1)(2)(3)) // 6

function fn(a,b,c) {
	return a+b+c;
}

function curry(fn) {
	// 参数长度
	const argLen = fn.length;
	// 保存预置参数， 当预置参数 有三个的时候 直接返回了函数，需要单独执行一次
	const presetArgs = [].slice.call(arguments,1)
	// 返回一个新函数
	return function() {
		const restArgs = [].slice.call(arguments)
		const allArgs = [...presetArgs,restArgs]
		if(allArgs.length >= argLen) {
			// 参数够了，执行原函数
			return fn.apply(null, allArgs)
		} else {
			// 继续柯里化
			return curry.call(null, fn, ...allArgs)
		}
	}
}