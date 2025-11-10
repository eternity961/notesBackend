export function getNotes(req, res) {
    console.log('Received a request at /api/note');
    res.status(200).json({message: 'Hello 123from the backend!, and contreller'}); 
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