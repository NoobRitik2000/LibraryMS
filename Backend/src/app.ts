import express from 'express'
import sequelize from './config/db';

// import indexRouter from './routes/indexRoute';
import { User } from './models/userModel';
import userRoutes from './routes/userRoutes'
import { createUserTable } from './models/userModel'; // Adjust the path as necessary


const app=express();

const port = process.env.PORT || 3000;
app.use(express.json())

app.use(express.urlencoded({ extended: true })); // Add this line

app.use('/',userRoutes)
createUserTable().then(() => {
    // Start your server after creating the table
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error('Error creating user table:', error);
});
