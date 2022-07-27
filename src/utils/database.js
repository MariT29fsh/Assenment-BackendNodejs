import mongoose from 'mongoose'

export default function connectDb() {
  const url = "mongodb://localhost/mir"

  mongoose.connect(url, {
    useNewUrlParser: true
   })
  console.log('DB is connected');
  mongoose.connection.on('error', (error) => {
    log.error(error)
  })
}