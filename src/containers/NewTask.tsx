import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export function NewTask() {
    return (
        <Fab 
            color="primary" 
            aria-label="add"
            size='small'
        >
            <AddIcon />
        </Fab>
    )
}