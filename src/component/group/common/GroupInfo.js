import HomeIcon from '@mui/icons-material/Home';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkIcon from '@mui/icons-material/Work';
import StarRateIcon from '@mui/icons-material/StarRate';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
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
                                <HomeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="팀명" secondary={group?.group_name} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MilitaryTechIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="프로젝트명" secondary={group?.project_name} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <DescriptionIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="요약" secondary={group?.short_description} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <StarRateIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="팀장" secondary={
                            <a href={`user/${group?.manager}`}  target="_blank" rel="noreferrer">{group?.manager}의 프로필 보기</a>
                        } />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <GroupsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="인원수" secondary={group?.members?.length} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="상태" secondary={`${group?.close_application}${group?.end_project}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventAvailableIcon />
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