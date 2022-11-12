import { Stack, Tooltip } from "@mui/material";
import { selectUser } from "api/redux/user/userSlice";
import axios from "axios";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import MKButton from "component/common/mui-components/MKButton";
import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GroupCeateModal from "./modal/GroupCeateModal";
import SearchIcon from '@mui/icons-material/Search';
import GroupFilterModal from "./modal/GroupFilterModal";
import React from 'react';
import OrganizationEnterModal from "./modal/OrganizationEnterModal";
import InfinityScrollGroupList from "./InfinityScrollGroupList";

const GroupFinderContainer = () => {

    const navigate = useNavigate();

    const user = useSelector(selectUser);

    const [groupCreateModalOpen, setGroupCreateModalOpen] = useState(false);
    const [groupFilterModalOpen, setGroupFilterModalOpen] = useState(false);
    const [organizationEnterModalOpen, setOrganizationEnterModalOpen] = useState(false);

    const [groups, setGroups] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // 필터링된 그룹 데이터 저장, 모달 숨김
    const filterGroup = (filteredGroups) => {
        setGroups(filteredGroups);
        setGroupFilterModalOpen(false);
    }

    // 필터링을 초기화했기 때문에 다시 전체 데이터를 받아오기 위한 메소드
    const resetGroups = () => {
        axios.get("/groupsRouter/getGroups").then((response) => {
            setGroups(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <Stack mb={3}>
                <MKButton
                    variant="outlined"
                    color="error"
                    onClick={() => setOrganizationEnterModalOpen(true)}
                >
                    조직 코드가 있으신가요?
                </MKButton>
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <MKButton
                    color="success"
                    variant="contained"
                    onClick={() => setGroupFilterModalOpen(true)}
                >
                    <SearchIcon />
                </MKButton>
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <Tooltip title={user ? "나의 워크스페이스 목록을 조회합니다." : "로그인이 필요한 메뉴입니다."}>
                        <MKButton
                            variant="outlined"
                            color={user ? "success" : "secondary"}
                            onClick={() => user && navigate('/myWorkspace/')}
                        >
                            내 워크스페이스 보기
                        </MKButton>
                    </Tooltip>
                    <Tooltip title={user ? "새 프로젝트를 등록하여 팀원을 모집합니다." : "로그인이 필요한 메뉴입니다."}>
                        <MKButton
                            variant="contained"
                            color={user ? "info" : "secondary"}
                            onClick={() => user && setGroupCreateModalOpen(true)}
                        >
                            프로젝트 등록하기
                        </MKButton>
                    </Tooltip>
                </Stack>
            </Stack>

            <InfinityScrollGroupList
                code={null}
                groups={groups}
                setGroups={setGroups}
                isLoading={isLoading}
                setLoading={setLoading}
            />

            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupCreateModalOpen}
                component={<GroupCeateModal groupCreateModalOpen={groupCreateModalOpen} setOpen={setGroupCreateModalOpen} />}
            />
            <ModalStaticBackdrop
                keepMounted
                width="sm"
                open={groupFilterModalOpen}
                component={<GroupFilterModal filterGroup={filterGroup} resetGroups={resetGroups} setOpen={setGroupFilterModalOpen} />}
            />
            <ModalStaticBackdrop
                keepMounted
                width="sm"
                open={organizationEnterModalOpen}
                component={<OrganizationEnterModal setOpen={setOrganizationEnterModalOpen} />}
            />

        </>
    )
}

export default GroupFinderContainer;