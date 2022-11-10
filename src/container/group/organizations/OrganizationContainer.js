import { Alert, Box, Grid, Stack, TextField, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MKButton from "component/common/mui-components/MKButton";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import { useEffect, useState } from "react";
import OrganizationCreateModal from "./OrganizationCreateModal";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import * as API from "../../../api/API"

export default function OrganizationContainer() {

    const steps = [
        {
            number: "01",
            label: '조직을 생성하세요',
            description: `조직을 생성하시면 비밀스러운 전용 코드를 부여해드립니다. 이 코드를 조직원들에게만 공유하세요`,
        },
        {
            number: "02",
            label: '조직 내 그룹을 형성하세요',
            description:
                '조직 코드를 가지고 조직원들끼리 알아서 팀을 형성하도록 해주세요. 정원이나 최대 팀 수를 미리 공지하는 것도 한 가지 방법입니다.',
        },
        {
            number: "03",
            label: '조직에 속한 그룹을 관리하세요',
            description: `조직 코드와 함께 생성된 그룹들은 이 계정에서 관리할 수 있습니다.`,
        },
        {
            number: "04",
            label: '그룹은 영원해요',
            description: `조직을 해체하셔도 그룹은 삭제되지 않습니다.`,
        },
    ];

    const user = useSelector(selectUser);
    const [organizations, setOrganizations] = useState([]);
    const [organizationModalOpen, setOrganizationModalOpen] = useState(false);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        setOrganizations(await API.getOrganizations(user?.user_id));
    }

    return (
        <Stack spacing={3}>
            <Box>
                {steps.map((step) =>
                    <Grid
                        key={step.number}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={4} my={5}>
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography variant="caption">STEP</Typography>
                                <Typography variant="h1">{step.number}</Typography>

                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8} my={5}>
                            <Typography variant="h4">{step.label}</Typography>
                            <Typography>{step.description}</Typography>
                        </Grid>
                    </Grid>
                )}
            </Box>

            <MKButton
                color="success"
                onClick={() => setOrganizationModalOpen(true)}
            >
                조직 생성하기
            </MKButton>

            <Box>
                <Typography variant="h5">내가 소유한 조직</Typography>
                <Grid
                    container
                    spacing={2}
                >
                    {
                        organizations.length > 0 ?
                            organizations.map((org) =>
                                <Grid item xs={12} md={6}>
                                    <ResponsiveCard>
                                        <Stack direction={"row"} justifyContent="space-between">
                                            <Typography variant="h5">{org.title}</Typography>
                                            <Typography variant="h3">{org.code}<ContentCopyIcon fontSize="small" /></Typography>
                                        </Stack>
                                    </ResponsiveCard>
                                </Grid>
                            )
                            :
                            <Grid item xs={12}>
                                <Typography variant="h6">소유한 조직이 없습니다.</Typography>
                            </Grid>
                    }
                </Grid>
            </Box>

            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={organizationModalOpen}
                component={
                    <OrganizationCreateModal
                        setOpen={setOrganizationModalOpen}
                    />
                }
            />

        </Stack>
    )
}