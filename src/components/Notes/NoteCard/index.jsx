import {Avatar, Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import {DeleteOutlineOutlined} from "@mui/icons-material";

export const NoteCard = ({n}) => {
    console.log(n)
    return (
        <div>
            <Card elevation={0}>
                <CardHeader
                    avatar={
                        <Avatar>
                            {n.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => console.log("kkk")}>
                            <DeleteOutlineOutlined />
                        </IconButton>
                    }
                    title={n.title}
                    subheader={n.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {n.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}