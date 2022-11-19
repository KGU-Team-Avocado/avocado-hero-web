import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import MKButton from 'component/common/mui-components/MKButton';
const GroupInfo = ({ group }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                group &&
                <>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="팀명" secondary={group?.group_name} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="프로젝트명" secondary={group?.project_name} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="요약" secondary={group?.short_description} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="태그" secondary={group?.tech_stack} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="팀장" secondary={
                            <Tooltip title="새 창으로 이동합니다.">
                                <MKButton
                                    variant="contained"
                                    color="info"
                                    size="small"
                                    onClick={() => window.open(`user/${group?.manager}`)}
                                >
                                    {group?.manager}의 프로필 보기
                                </MKButton>
                            </Tooltip>} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="요약" secondary={group?.short_description} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="인원수" secondary={group?.members?.length} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="상태" secondary={`${group?.close_application}${group?.end_project}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="프로젝트 기간" secondary={`${group?.start_date}~${group?.end_date}`} />
                    </ListItem>
                </>
            }
        </List>
    )
}

export default GroupInfo;