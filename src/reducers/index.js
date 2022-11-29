
const initState={
    value:"默认值"
}
const reducer = (state = initState,action)=>{
    console.log('reducer:',state,action);
    //判断action的type值是否是我们发送的，吐过是返回新的state
    switch(action.type){
        case "send_type":
            return Object.assign({},state,action)
        default:
            return state;
    }

}
module.exports ={reducer}