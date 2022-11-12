import { Alert, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import * as API from '../../../../api/API';
import DOMPurify from "dompurify";

const Readme = ({ group_id }) => {

    const [group, setGroup] = useState(null);

    useEffect(() => {
        getGroup();
        return () => {

        }
    }, [group_id]);

    const getGroup = async () => {
        setGroup(await API.getGroupById(group_id));
    }

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    };


    return (
        <Stack>
            {
                <div dangerouslySetInnerHTML={createMarkup(group?.read_me)}></div>
            }
        </Stack>
    )
}

export default Readme;