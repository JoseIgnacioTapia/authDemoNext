import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://nchmn907:Mm5XVphIUiKfkAa7@cluster0.gev1u.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
