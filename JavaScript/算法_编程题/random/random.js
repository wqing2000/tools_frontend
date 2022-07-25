//! 随机数相关的封装

class Random {
    constructor() {

    }

    init() {
        this.randomNum();
    }

    //? 随机数设定范围（封装函数）
    randomNum() {
        // 随机产生0-9数字
        // console.log(parseInt(Math.random() * 10));

        // 随机数如何设定范围（封装函数）. 例如：rannum(4,9) :随机产生4-9之间的整数，包括4和9
        function randomNum(min, max) {
            if (min > max) {
                //交互位置，保证第一个数是小于第二个数
                var temp = min;
                min = max;
                max = temp;
            }
            return Math.round(Math.random() * (max - min)) + min; //+前面随机产生0-5即可
        }
        console.log(randomNum(4, 9)); //随机产生4-9之间的整数，包括4和9
        console.log(randomNum(9, 4)); //交互位置，随机产生4-9之间的整数，包括4和9
    }

    //? 编写一个函数，获得一个十六进制的随机颜色的字符串(例如：#20CD4F)

    //? 数字字母混合验证码(数字+大写字母+小写字母)
    verificationCode() {
        var arr = [];
        for (var i = 0; i < 4; i++) {
            do {
                //去掉除数字字母外的特殊符号
                var num = (parseInt(Math.random() * 1000) % (122 - 48 + 1)) + 48; //确定密码范围 数字+字母
            } while ((num > 57 && num < 65) || (num > 90 && num < 97));
            arr[i] = String.fromCharCode(num); //将ASC码值转换为字符
        }
        var str = arr.join("");
        console.log(str);
    }

}

new Random().init();