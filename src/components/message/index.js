import MyMessage from "@/components/message/MyMessage"; // 引入组件
import { createVNode, render } from 'vue' //导入需要的vue函数
// DOM容器
const div = document.createElement('div')// 创建一个dom容器节点div
div.setAttribute('class', 'xtx-massage-container') // 为dom添加一个唯一标识类（无实质功能）
document.body.appendChild(div) // 容器追加到body中
//以上我们定义好了承装该组件虚拟dom的容器，接下来要把该组件添加到容器中，并导出为一个函数

let timer = null  // 定时器标识（用来3秒后关闭消息提示）
export default ({ type, text }) => {// 未来在使用函数时需要传入的组件的props属性
    const vnode = createVNode(MyMessage, { type, text }) // 将组件编译为虚拟dom节点
    render(vnode, div) // 将虚拟dom添加到div容器中
    //必要步骤以完成，以下为关闭消息提示的定时器功能
    clearInterval(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, 3000)
}
















