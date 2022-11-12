import { Box, CircularProgress, Grid } from "@mui/material";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { useEffect, useRef, useState } from "react";
import * as API from "../../../api/API"
import axios from "axios";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import GroupJoinModalV2 from "./modal/GroupJoinModalV2";

const InfinityScrollGroupList = ({ code, groups, setGroups, isLoading, setLoading }) => {

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupJoinModalOpen, setGroupJoinModalOpen] = useState(false);
    const [applicants, setApplicants] = useState(null);
    const [groupManager, setGroupManager] = useState(null);
    //무한스크롤을 위한 코드
    const DATA_REQUEST_SIZE = 3;
    const [target, setTarget] = useState(null);
    const groupDataSize = useRef(0);

    const fetchData = async (groupDataSize) => {
        console.log(`infinity ${groupDataSize} ${DATA_REQUEST_SIZE}`)
        if (groupDataSize % DATA_REQUEST_SIZE <= DATA_REQUEST_SIZE) {
            const response = await axios.post("/groupsRouter/getGroupsInfinity", {
                skip: groupDataSize,
                limit: DATA_REQUEST_SIZE
            });
            const data = await response.data;
            setGroups((prev) => prev.concat(data.groups));
            return data.groups.length;
        }
        else {
            setLoading(false);
        }
        return 0;
    }

    const handleGroupCard = (group) => {
        setSelectedGroup(group)
        setGroupJoinModalOpen(true)

        console.log("ddd" + group?.manager);
        handleGroupManager(group?.manager);

        axios.post("/groupsRouter/getApplicants", {
            group_id: group?._id,
        }).then((response) => {
            setApplicants(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
    const handleGroupManager = async (user_id) => {
        const temp = await API.findOneUserByUserId(user_id)
        setGroupManager(temp);
    }

    useEffect(() => {
        let observer;
        let receivedDataSize = 0;
        if (target) {
            const onIntersect = async ([entry], observer) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    receivedDataSize = await fetchData(groupDataSize.current);
                    groupDataSize.current += receivedDataSize;
                    observer.observe(entry.target);
                }
            };
            observer = new IntersectionObserver(onIntersect, { threshold: 1 });
            observer.observe(target);

        }
        return () => {
            observer && observer.disconnect();
        }
    }, [target]);


    return (
        <>

            <Grid
                container
                spacing={1}
                alignItems="stretch"
            >
                {
                    groups.length > 0
                        ?
                        groups.map((group) => (
                            <Grid item xs={12} md={6} xxl={4} key={group._id}>
                                <GroupCardV2
                                    key={group._id}
                                    group={group}
                                    handleGroupCard={handleGroupCard}
                                />
                            </Grid>
                        ))
                        :
                        <div>그룹이 없습니다.</div>
                }
                {
                    isLoading &&
                    <Box ref={setTarget}>
                        <CircularProgress />
                    </Box>
                }
            </Grid>
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupJoinModalOpen}
                component={<GroupJoinModalV2 selectedGroup={selectedGroup} setOpen={setGroupJoinModalOpen} />}
            />
        </>
    )
}
export default InfinityScrollGroupList;