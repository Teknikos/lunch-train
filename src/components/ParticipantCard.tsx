import { Avatar, Button, Card, CardActions, CardContent, Typography } from "@mui/material";

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
                <Avatar sx={{ backgroundColor: 'red', width: 22, height: 22, fontSize: 'small' }}>
                    <Button color="inherit" onClick={() => handleDelete(id)}>
                        x
                    </Button>
                </Avatar>
            </CardActions>
        </Card>
    )
}
