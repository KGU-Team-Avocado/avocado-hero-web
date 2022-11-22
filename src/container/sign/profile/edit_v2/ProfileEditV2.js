import { Autocomplete, Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import * as API from "../../../../api/API";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import { tags } from "assets/tag/tags";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MKButton from "component/common/mui-components/MKButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ProfileEditV2 = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [profile, setProfile] = useState(null);
    const [selectedProjectTags, setSelectedProjectTags] = useState([]);
    const [selectedSkillTags, setSelectedSkillTags] = useState([]);
    const [selectedPersonalTags, setSelectedPersonalTags] = useState([]);

    const handleInput = (state) => {
        setProfile({
            ...profile,
            [state.target.id]: state.target.value
        })
        console.log(profile)
    }

    useEffect(() => {
        getUserProfile();
    }, [user]);

    const getUserProfile = async () => {
        setProfile(await API.findOneUserByUserId(user.user_id));
    }

    const onClickSubmit = () => {
        axios
            .post("/usersRouter/profileUpdate", {
                user_id: profile.user_id,
                name: profile.name,
                nickname: profile.nickname,
                email: profile.email,
                phoneNumber: profile.phoneNumber,
                introduceOne: profile.introduceOne,
                introduce: profile.introduce,
                belongs: profile.belongs,
                links: profile.links,
                fields: selectedProjectTags.map((s) => s.value),
                keywords: selectedSkillTags.map((s) => s.value),
                personalities: selectedPersonalTags.map((s) => s.value)
            })
            .then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    window.location.href = "/";
                } // 여기 안 됨
            })
            .catch(function (error) {
                console.log(error);
            });

        navigate(`/user/${profile.user_id}`)
    };

    return (
        <>
            {
                profile &&
                <>
                    <Typography variant="h3">프로필 수정</Typography>
                    <Box marginBottom={2}>
                        <ResponsiveCard>
                            <>
                                <Avatar edit={true} user_id={profile?.user_id} imgURL={profile?.imgURL} />
                                <Box marginBottom={2}>
                                    <TextField
                                        fullWidth
                                        label="닉네임"
                                        variant="outlined"
                                        value={profile?.nickname}
                                        id="nickname"
                                        onChange={handleInput}
                                    />
                                </Box>
                                <Box marginBottom={2}>
                                    <TextField
                                        fullWidth
                                        label="이름"
                                        variant="outlined"
                                        value={profile?.name}
                                        id="name"
                                        onChange={handleInput}
                                    />
                                </Box>
                                <Box marginBottom={2}>
                                    <TextField
                                        fullWidth
                                        label="이메일"
                                        variant="outlined"
                                        value={profile?.email}
                                        id="email"
                                        onChange={handleInput}
                                    />
                                </Box>
                                <Box marginBottom={2}>
                                    <TextField
                                        fullWidth
                                        label="전화번호"
                                        variant="outlined"
                                        value={profile?.phoneNumber}
                                        id="phoneNumber"
                                        onChange={handleInput}

                                    />
                                </Box>
                            </>
                        </ResponsiveCard>
                    </Box>
                    <Box marginBottom={2}>
                        <ResponsiveCard>
                            <Box>
                                <TextField
                                    fullWidth
                                    label="한줄소개"
                                    variant="outlined"
                                    value={profile?.introduceOne}
                                    id="introduceOne"
                                    onChange={handleInput}

                                />
                            </Box>
                        </ResponsiveCard>
                    </Box>
                    <Box marginBottom={2}>
                        <ResponsiveCard>
                            <Box marginBottom={2}>
                                <TextField
                                    fullWidth
                                    label="소속"
                                    variant="outlined"
                                    value={profile?.belongs}
                                    id="belongs"
                                    onChange={handleInput}

                                />
                            </Box>
                            <Box marginBottom={2}>
                                <Autocomplete
                                    multiple
                                    options={tags.projects}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.label}
                                    value={selectedProjectTags}
                                    onChange={(event, newValue) => {
                                        setSelectedProjectTags(newValue);
                                    }}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.label}
                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField {...params} label="분야" placeholder="분야" />
                                    )}
                                />
                            </Box>
                            <Box marginBottom={2}>
                                <TextField
                                    fullWidth
                                    label="링크"
                                    variant="outlined"
                                    value={profile?.links}
                                    id="links"
                                    onChange={handleInput}

                                />
                            </Box>
                        </ResponsiveCard>
                    </Box>
                    <Box marginBottom={2}>
                        <ResponsiveCard>
                            <Box marginBottom={2}>
                                <Autocomplete
                                    multiple
                                    options={tags.tech}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.label}
                                    value={selectedSkillTags}
                                    onChange={(event, newValue) => {
                                        setSelectedSkillTags(newValue);
                                    }}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.label}
                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField {...params} label="키워드" placeholder="키워드" />
                                    )}
                                />
                            </Box>
                            <Box marginBottom={2}>
                                <Autocomplete
                                    multiple
                                    options={tags.personal}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.label}
                                    value={selectedPersonalTags}
                                    onChange={(event, newValue) => {
                                        setSelectedPersonalTags(newValue);
                                    }}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.label}
                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField {...params} label="성향" placeholder="성향" />
                                    )}
                                />
                            </Box>
                            <Box marginBottom={2}>
                                <TextField
                                    fullWidth
                                    label="소개글"
                                    variant="outlined"
                                    value={profile?.introduce}
                                    id="introduce"
                                    onChange={handleInput}

                                />
                            </Box>
                        </ResponsiveCard>
                    </Box>
                    <MKButton color="success" onClick={onClickSubmit}>수정 완료</MKButton>
                </>
            }
        </>
    )
}

export default ProfileEditV2;