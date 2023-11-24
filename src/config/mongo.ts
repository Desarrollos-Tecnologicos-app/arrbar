import "dotenv/config"
import mongoose, { connect } from "mongoose"

mongoose.set('strictQuery', true)

async function dbConnect(): Promise<void> {
	const DB_URI = <string>process.env.MONGODBPRODUCTION
	try {
		connect(DB_URI)
	} catch (error) {
		console.error('this is error: ', error)		
	}
}

export default dbConnect
