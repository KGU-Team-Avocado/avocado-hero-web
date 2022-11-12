import { Tooltip } from "@mui/material";
import { selectUser } from "api/redux/user/userSlice";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import MKButton from "component/common/mui-components/MKButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import GroupCreateModal from "./modal/GroupCeateModal";

const GroupCreateButton = (code) => {
    const user = useSelector(selectUser);
    const [groupCreateModalOpen, setGroupCreateModalOpen] = useState(false);
    return (
        <>
            <Tooltip title={user ? "새 프로젝트를 등록하여 팀원을 모집합니다." : "로그인이 필요한 메뉴입니다."}>
                <MKButton
                    variant="contained"
                    color={user ? "info" : "secondary"}
                    onClick={() => user && setGroupCreateModalOpen(true)}
                >
                    프로젝트 등록하기
                </MKButton>
            </Tooltip>
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupCreateModalOpen}
                component={<GroupCreateModal groupCreateModalOpen={groupCreateModalOpen} setOpen={setGroupCreateModalOpen} />}
            />
        </>
    )
}

export default GroupCreateButton;