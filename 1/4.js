/**
  * @description: 欧几里得算法
  */

/**
  * 定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数。最大公约数（Greatest Common Divisor）缩写为GCD
  * 计算公式: gcd(a,b) = gcd(b,a mod b) (不妨设a>b 且r=a mod b ,r不为0)
  */

/**
  * 证法一
  * a可以表示成a = kb + r（a，b，k，r皆为正整数，且r<b），则r = a mod b
  * 假设d是a,b的一个公约数，记作d|a,d|b，即a和b都可以被d整除
  * 而r = a - kb，两边同时除以d，r/d=a/d-kb/d=m，由等式右边可知m为整数，因此d|r
  * 因此d也是b,a mod b的公约数
  * 因(a,b)和(b,a mod b)的公约数相等，则其最大公约数也相等，得证
  */

/**
  * 证法二
  * 假设c = gcd(a,b),则存在m,n，使a = mc, b = nc
  * 令r = a mod b，即存在k，使r = a-kb = mc - knc = (m-kn)c
  * 故gcd(b,a mod b) = gcd(b,r) = gcd(nc,(m-kn)c) = gcd(n,m-kn)c
  * 则c为b与a mod b的公约数
  * 假设d = gcd(n,m-kn), 则存在x,y, 使n = xd, m-kn = yd; 故m = yd+kn = yd+kxd = (y+kx)d
  * 故有a = mc = (y+kx)dc, b = nc = xdc; 可得 gcd(a,b) = gcd((y+kx)dc,xdc) = dc
  * 由于gcd(a,b) = c, 故d = 1
  * 即gcd(n,m-kn) = 1, 故可得gcd(b,a mod b) = c
  * 故得证gcd(a,b) = gcd(b,a mod b)
  */

/**
  * @description: 用欧几里得算法计算最大公约数
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
function gcd(a, b) {
  if (a % b == 0) return b
  return gcd(b, a % b)
}

console.log(gcd(200, 755))

/**
  * 最小公倍数可以通过最大公约数求得，最小公倍数 = 两数之积 / 最大公约数
  * 假设d是a,b的最大公约数，那么a=k1*d, b=k2*d
  * gcd(k1,k2)=1
  * 那么公倍数满足被a和b整除，那么必须有k1和k2的乘积，又要求最小
  * 那么再乘以一个d就是最小的了
  * 即 lcm(a,b) = k1 * k2 * gcd(a,b) = a * b / gcd(a,b)
  */

/**
  * @description: 最小公倍数
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
function lcm(a, b) {
  return a * b / gcd(a, b)
}

console.log(lcm(133, 423))