import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import TechStack from "../../common/TechStack"

export default (props) => {

    return (
        <div className="col">
            <Card sx={{ borderRadius: 5 }}
                onClick={() => props.handleGroupCard(props.group)}>
                <CardActionArea>
                    <Stack align="center">
                        <CardMedia
                            component="img"
                            height="200"
                            image="./logo512.png"
                            alt="green iguana"
                        />
                    </Stack>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.group.group_name}
                            |
                            {props.group.project_name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {props.group.manager}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {props.group.short_description}
                        </Typography>
                        <Typography>
                            <TechStack tech_stack={props.group.tech_stack} />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}