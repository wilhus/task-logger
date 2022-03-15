import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    FormControlLabel,
    Checkbox,
    Typography,
    Avatar,
    Divider,
    IconButton,
    Tooltip,
    Menu,
    MenuItem
} from '@mui/material'
import { red } from '@mui/material/colors'
import AssignmentIcon from '@mui/icons-material/Assignment'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import EditIcon from '@mui/icons-material/Edit';
import { TaskModel } from '../models/task'
import { useState } from 'react'

export interface TaskCardProps {
    task: TaskModel
}

export function TaskCard({ task }: TaskCardProps) {
    console.log(task)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card
            sx={{ maxWidth: 345 }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: red[500] }}
                    >
                        <AssignmentIcon />
                    </Avatar>
                }
                action={
                    <div>
                        <IconButton
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon />
                                Edit
                            </MenuItem>
                        </Menu>
                    </div>
                }
                title='Task'
                subheader='some title'
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    some description
                </Typography>
            </CardContent>
            <CardActions
                style={{ justifyContent: 'flex-end' }}
            >
                <Tooltip title="Start">
                    <IconButton >
                        <PlayArrowIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="End">
                    <IconButton disabled>
                        <StopIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}