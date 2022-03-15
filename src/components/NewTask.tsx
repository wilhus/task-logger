import {
    Fab,
    Tooltip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import dayjs from 'dayjs'

export function NewTask() {
    const [titleError, setTitleError] = useState(false)
    const [descrError, setDescrError] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleCreate = () => {
        if (title !== '' && description !== '') {
            const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss')
            fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    created: datetime
                }),
            })
            handleClose()
        }
        if (title === '') setTitleError(true)
        if (description === '') setDescrError(true)
    }

    return (
        <div>
            <Tooltip
                title='New task'
            >
                <Fab
                    color='primary'
                    aria-label='add'
                    size='small'
                    onClick={handleClickOpen}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        id='title'
                        value={title}
                        onChange={(e) => {
                            setTitleError(false)
                            setTitle(e.target.value)
                        }}
                        required
                        fullWidth
                        variant="standard"
                        error={titleError}
                        helperText={titleError ? 'Title required' : null}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Description"
                        id='description'
                        value={description}
                        onChange={(e) => {
                            setDescrError(false)
                            setDescription(e.target.value)
                        }}
                        multiline
                        required
                        fullWidth
                        variant="standard"
                        error={descrError}
                        helperText={descrError ? 'Description required' : null}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}