const {Server} =  require('socket.io')

const io = new Server({
    cors:{origin:'*',
    methods:['GET','POST'],
    // allowedHeaders:['custom_header']
}
})

io.on('connection',(socket)=>{
    console.log('A client connected:', socket.id)
   socket.on('message',(message)=>{
      console.log(`Message from client ${socket.id}:`, message)
   })
   socket.emit("message","Welcome to the server")
})

io.listen(8080,()=> console.log('server connected....'))