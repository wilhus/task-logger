import {
    Stack,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Tooltip
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

export function Nav() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <div>
                <Tooltip
                    title='Menu'
                >
                    <IconButton
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                        To Do
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Calendar
                    </MenuItem>
                </Menu>
            </div>
            <Typography
                variant="h3"
            >
                Task Logger
            </Typography>
            <Typography
                variant="body2"
            >
                Mon 14 Mar 2022
            </Typography>
        </Stack>
    )
}