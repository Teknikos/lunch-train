import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeaderBar() {
    return (
        <AppBar>
            <Toolbar>
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
                
            </Toolbar>
        </AppBar>
    )
}