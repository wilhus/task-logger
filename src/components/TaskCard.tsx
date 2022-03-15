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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

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
                        <Tooltip
                            title='Options'
                        >
                            <IconButton
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Tooltip>
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
                subheader={task.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions
                style={{ justifyContent: 'flex-end' }}
            >
                <Tooltip title="Start">
                    <span>
                        <IconButton >
                            <PlayArrowIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="End">
                    <span>
                        <IconButton disabled>
                            <StopIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </CardActions>
        </Card>
    )
}