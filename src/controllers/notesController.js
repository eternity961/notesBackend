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

export function createNote(req, res) {
    res.status(201).json({message: 'Note created successfully!'});
}

export function deleteNote(req, res) {
    
    res.status(200).json({message: `Note with id ${id} deleted successfully!`});
}

export function updateNote(req, res) {
    
    res.status(200).json({message: `Note with id ${id} updated successfully!`});
}   