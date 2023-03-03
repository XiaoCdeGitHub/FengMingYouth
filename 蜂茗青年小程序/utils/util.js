/**
 * @description 函数节流: 每隔一段时间，只执行一次函数
 * @param { Function } fn 需要延迟执行的函数
 * @param { Number } interval 延迟执行的时间，默认值500ms
 */
export function throttle(fn, interval = 500) {
  // 记录定时器id
  let timer = null
  // 是否是第一次调用
  let isFirstTime = true

  return function () {
    const args = arguments
    const _me = this

    // 第一次直接执行,改变标志,无需延迟
    if (isFirstTime) {
      fn.apply(_me, args)
      return (isFirstTime = false)
    }

    // 不是第一次
    // 存在定时器,前面的延迟操作没有完成,直接返回,拒绝调用请求
    if (timer) {
      return false
    }

    // 延迟执行
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(_me, args)
    }, interval)
  }
}