/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { connect, set } from 'mongoose'

const dbConnection = async (uri: string) => {
  try {
    set('strictQuery', false)
    await connect(uri)
    console.log('DB online')
  } catch (err: any) {
    console.log(err)
    throw new Error(err)
  }
}

export default dbConnection
