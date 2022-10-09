import { Box, Card } from "@mui/material";
import JobFinderFilter from  "../../component/jobFinder/JobFinderFilter";
import JobFinderList from "../jobFinder/JobFinderList"
const JobFinderContainer = () =>  {
    return (
        <Card
            p={5}
        >
            <Box>
                <JobFinderList />
            </Box>
        </Card>
    )
}

export default JobFinderContainer;