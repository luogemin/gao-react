const sendAction = ()=>{
    return {
        type:"send_action",
        value:"发送了一个action"
    }
}

module.exports={sendAction}