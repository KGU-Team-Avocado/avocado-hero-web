import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import TechStack from "../../common/TechStack"

export default (props) => {

    return (
        <div className="col">
            <Card sx={{borderRadius:5}}
                onClick={() => props.handleGroupCard(props.group)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/logo512.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.group.group_name}
                            /
                            {props.group.manager}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        (디자인 전면 수정 예정임)(디자인 전면 수정 예정임)(디자인 전면 수정 예정임)(디자인 전면 수정 예정임)(디자인 전면 수정 예정임)
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            {/* <a href="#" className="text-decoration-none text-dark" onClick={() => {
                props.handleGroupCard(props.group)
            }}>
                <div className="card p-3 rounded-4">
                    <div className="row">
                        <div className="text-center col-xxl-4">
                            <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <div>
                                <b>{props.group.group_name}</b>
                            </div>
                            <div>{props.group.manager}</div>
                        </div>
                        <div className="col-xxl-8 py-xxl-3">
                            <h4>{props.group.project_name}</h4>
                            <p>{props.group.short_description}</p>
                            <div>
                                <TechStack tech_stack={props.group.tech_stack} />
                            </div>
                        </div>
                    </div>
                </div>
            </a> */}
        </div>
    )
}