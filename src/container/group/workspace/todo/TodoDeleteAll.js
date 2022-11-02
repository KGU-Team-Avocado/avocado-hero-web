import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import "./Todo.css";

const TodoDeleteAll = ({ onDeleteAll, onDeleteComplete }) => {
    return (
        <Stack spacing={0.5} direction="row">
            <Button
                color="error"
                variant="outlined"
                component="label"
                onClick={() => {
                    onDeleteAll();
                }}>
                모두삭제
            </Button>
            <Button
                color="error"
                variant="outlined"
                component="label"
                onClick={() => {
                    onDeleteComplete();
                }}>
                완료된 일 삭제
            </Button>
        </Stack>
    )
}

export default TodoDeleteAll;