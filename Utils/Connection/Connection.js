import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
    console.log( "Name", process.env.DB_DATABASE);
    console.log( "Host", process.env.DB_HOST);
    console.log( "Port", process.env.DB_PORT);
    console.log( "Username", process.env.DB_USERNAME);
    console.log( "Password", process.env.DB_PASSWORD);
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "pgallery",
    user: "root",
    password:"",
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
