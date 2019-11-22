var Animation = function(opts) {

    //ele 参数
    var dur = 0.3,
    amount = '55%',
    tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });
    tl
        .add(
            fromLeft(
                opts.leftAnimated
            )
        )
        .add(
            fromRight(
               opts.RightAnimated
            )
        )
        function fromLeft(el) {
            return TweenMax.from(el,dur, {x:"-=" + amount, autoAlpha:0.2})
        }
        function fromRight(el) {
            return TweenMax.from(el,dur, {x:"+=" + amount, autoAlpha:0.2})
        }
}

//  流程式的 不适合复用

// var tl = new TimelineMax({
//     repeat: -1,
//     yoyo: true,
//     repeatDelay: 1
// })
// tl.from(['#box1,#box3'],0.3,{x:'-=100%'})
// tl.from(['#box2'],0.3,{x:'+=55%'})
