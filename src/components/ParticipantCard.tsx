import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";

interface ParticipantProps {
    id: number
    name: string,
    handleDelete: (arg: number) => void
}

export default function ParticipantCard({ name, id, handleDelete }: ParticipantProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 200,
                display: 'inline-flex',
                justifyContent: 'space-between'
            }}
        >
            <CardContent>
                <Typography>{name}</Typography>
            </CardContent>
            <CardActions>
                <IconButton color='error' onClick={() => handleDelete(id)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </IconButton>
            </CardActions>
        </Card>
    )
}
