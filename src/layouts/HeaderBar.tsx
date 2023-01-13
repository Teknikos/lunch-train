import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCircleXmark, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderBar() {
    const [day, setDay] = useState(new Date())
    function refreshClock() {
        setDay(new Date())
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <IconButton color='inherit'>
                        <FontAwesomeIcon icon={faBackward} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography>
                        {dayjs(day).format('dddd')}
                    </Typography>
                </Box>
                <Box>
                    <Button to={'/'} component={Link} color="inherit" sx={{ textTransform: 'none', color: '#fff' }}>
                        Home
                    </Button>
                    <Button to={'/about'} component={Link} color="inherit" sx={{ textTransform: 'none', color: '#fff' }}>
                        About
                    </Button>
                    <Button to={'/participants'} component={Link} color="inherit" sx={{ textTransform: 'none', color: '#fff' }}>
                        Participants
                    </Button>
                    <Button to={'/menu'} component={Link} color="inherit" sx={{ textTransform: 'none', color: '#fff' }}>
                        Menu
                    </Button>
                    <Button to={'/itinerary'} component={Link} color="inherit" sx={{ textTransform: 'none', color: '#fff' }}>
                        Itinerary
                    </Button>
                </Box>
                <Box>
                    <IconButton color='inherit' sx={{
                        transform: 'rotate(-45deg)'
                    }}>
                        <FontAwesomeIcon icon={faShoePrints} />
                    </IconButton>
                    <Typography display={'inline-block'}>
                        7 min
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}