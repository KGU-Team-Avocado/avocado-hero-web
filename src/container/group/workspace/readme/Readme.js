import { Alert, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import * as API from '../../../../api/API';

const Readme = ({ group_id }) => {

    const [group, setGroup] = useState(null);

    useEffect(() => {
        getGroup();
        return () =>{
            
        }
    }, [group_id]);

    const getGroup = async () => {
        setGroup(await API.getGroupById(group_id));
    }

    return (
        <Stack>
            <Alert>{group_id}이 자리에는 그룹에서 설정한 Read Me를 띄워줄 예정임</Alert>
            {
                <Typography>
                    {group?.read_me}
                </Typography>
            }
        </Stack>
    )
}

export default Readme;