const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// querySelectorAll 方法 返回文档中匹配指定 CSS 选择器的所有元素
// 记得要有一个点！！！
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    update();
})
prev.addEventListener('click', () => {
    currentActive--;
    update();
})

function update() {
    // 处理圆圈
    circles.forEach((item, index) => {
        if (index < currentActive) {
            // classList 属性是只读的，但可以使用 add() 和 remove() 方法修改它
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })

    // 处理线条
    // 设置一个已有元素的 style 属性
    progress.style.width = ((currentActive - 1) / 3 * 100 + "%")

    // 到 4 后禁用按钮
    if(currentActive===1){
        prev.disabled=true;
    }else if(currentActive===4){
        next.disabled=true;
    }else{
        prev.disabled=false;
        next.disabled=false;
    }

}
