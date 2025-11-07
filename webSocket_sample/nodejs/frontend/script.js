console.log('script is loaded....')

const socket = io('http://localhost:8080')

socket.on("connect",(res)=>{
    console.log(res)
     socket.emit("message","hell")
})

socket.on("message",(message)=>{
   console.log(message)
})

