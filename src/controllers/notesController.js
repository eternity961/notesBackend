import express from 'express';
import Note from '../models/Notes.js';
export async function getNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating note', error });
    }
}

export async function deleteNote(req, res) {
    
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note', error });
    }
}

export async function updateNote(req, res) {
    
    res.status(200).json({message: `Note with id ${id} updated successfully!`});
}   