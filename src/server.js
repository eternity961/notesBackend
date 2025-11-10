import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use('/api/notes', notesRoutes);



app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

//mongodb+srv://Mikael100:<db_password>@notes.6yw6gtf.mongodb.net/?appName=Notes
