function $(value){
    let obj = document.querySelectorAll(value).length > 1 ? document.querySelectorAll(value) : document.querySelector(value)
    return obj
}
// $('.demo').addEventListener('click', (e) => {

// })

function hid(Obj, Obj2, callback){
    Obj.onmousedown = function(e){
        let h = false;
        e = e || window.event;
        var clX = e.offsetX;
        var clY = e.offsetY;
        document.onmousemove = function(e){
            e = e || window.event;
            Obj.style.left = e.clientX-clX+"px";
            Obj.style.top = e.clientY-clY+"px"; 
if(Obj.offsetTop+Obj.offsetHeight>=Obj2.offsetTop && Obj.offsetTop<=Obj2.offsetTop+Obj2.offsetHeight && Obj.offsetLeft+Obj.offsetWidth>=Obj2.offsetLeft && Obj.offsetLeft<=Obj2.offsetLeft+Obj2.offsetWidth){
                    console.log("你撞我了！再撞一个试试！")
                    h = true
            };
        }
        document.onmouseup = function(){
            document.onmousemove = null;
            callback(h);
        }
    }
}
hid($('.demo'), $('.iphone'), function(h) {
    console.log(h)
})
