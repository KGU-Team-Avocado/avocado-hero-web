import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import GroupJoinModalV2 from "./modal/GroupJoinModalV2";

const InfinityScrollGroupList = ({ code, groups, setGroups, isLoading, setLoading }) => {

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupJoinModalOpen, setGroupJoinModalOpen] = useState(false);
    //무한스크롤을 위한 코드
    const DATA_REQUEST_SIZE = 3;
    const [target, setTarget] = useState(null);
    const groupDataSize = useRef(0);
    const groupMaxSize = useRef(1);
    const fetchData = async (groupDataSize, groupMaxSize) => {
        console.log(`infinity ${groupDataSize} ${DATA_REQUEST_SIZE} || groupMaxSize : ${groupMaxSize}`);
        if (groupDataSize != groupMaxSize) {
            const response = await axios.post("/groupsRouter/getGroupsInfinity", {
                code: code,
                skip: groupDataSize,
                limit: DATA_REQUEST_SIZE
            });
            const data = await response.data;
            setGroups((prev) => prev.concat(data.groups));
            let results = { length: data.groups.length, maxCount: data.maxCount };
            return results;
        }
        else {
            setLoading(false);
        }
        return { length: 0, maxCount: 0 };
    };

    const handleGroupCard = (group) => {
        setSelectedGroup(group);
        setGroupJoinModalOpen(true);
    };

    useEffect(() => {
        let observer;
        let received = 0;
        if (target) {
            const onIntersect = async ([entry], observer) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    received = await fetchData(groupDataSize.current, groupMaxSize.current);
                    groupDataSize.current += received.length;
                    groupMaxSize.current = received.maxCount;
                    observer.observe(entry.target);
                }
            };
            observer = new IntersectionObserver(onIntersect, { threshold: 1 });
            observer.observe(target);

        }
        return () => {
            observer && observer.disconnect();
        };
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
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            py={5}
                        >
                            <Box ref={setTarget}>
                                <CircularProgress />
                            </Box>
                        </Stack>
                    </Grid>
                }
            </Grid>
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupJoinModalOpen}
                component={<GroupJoinModalV2 selectedGroup={selectedGroup} setOpen={setGroupJoinModalOpen} />}
            />
        </>
    );
};
export default InfinityScrollGroupList;