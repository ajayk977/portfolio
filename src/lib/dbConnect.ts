import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
      console.log('MongoDB connected');
    connection.isConnected = db.connections[0].readyState;

  } catch (error) {
     console.log(error);
    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;