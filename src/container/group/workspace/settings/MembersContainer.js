import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "api/redux/group/groupSlice";
import { getGroupAsync } from "api/redux/group/groupSlice";
import { Alert, Button, FormControlLabel, FormGroup, Paper, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import MemberModal from "../../../../component/workspace/members/MemberModal";

const MembersContainer = () => {
    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    const params = useParams();
    const project_id = params.id;

    const [applicants, setApplicants] = useState([]); // 프로젝트 지원자 배열

    const [show, setShow] = useState('null');
    const [close, setClose] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const columns = [
        { id: 'index', label: '#', minWidth: 50 },
        { id: 'user_id', label: '아이디', align: 'center', minWidth: 100 },
        {
            id: 'user_name',
            label: '이름',
            minWidth: 100,
            align: 'center',
        },
        {
            id: 'user_email',
            label: '이메일',
            minWidth: 170,
            align: 'center',
        },
        {
            id: 'accept',
            label: '승인/반려',
            minWidth: 100,
            align: 'center',
        },
    ];

    useEffect(() => {
        axios.post("/groupsRouter/getApplicants", {
            group_id: project_id,
        }).then((response) => {
            setApplicants(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClose = () => { setShow('null'); }

    const handleShow = (applicant) => {
        console.log(show);
        setShow(applicant);
    }

    const acceptMember = (applicant) => {
        axios.post("/groupsRouter/acceptApplicant", {
            _id: applicant._id,
            group_id: applicant.group_id,
            data: {
                user_id: applicant.user_id,
                user_name: applicant.user_name,
                user_email: applicant.user_email,
                user_role: []
            }
        }).then((response) => {
            setApplicants(response.data.applicants);
            dispatch(getGroupAsync(project_id))
        }).catch(function (error) {
            console.log(error);
        });
    }

    const rejectMember = (applicant) => {
        if (!window.confirm('변려한 신청자는 신청자 목록에서 사라지게 됩니다. 삭제하시겠습니까?')) {
            return;
        }

        axios.post("/groupsRouter/rejectApplicant", {
            _id: applicant._id,
            group_id: applicant.group_id
        }).then((response) => {
            console.log(response.data);
            setApplicants(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const cancleAccept = (member) => {
        if (!window.confirm(member.name + ' 멤버를 방출하시겠습니까?')) {
            return;
        }

        axios.post("/groupsRouter/cancleAccept", {
            user_id: member.user_id,
            project_id: project_id
        }).then((response) => {
            console.log(response.data);
            dispatch(getGroupAsync(project_id))
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleCloseApplication = (isClose) => {
        axios.post("/groupsRouter/modifyClose", {
            project_id: project_id,
            close_application: isClose
        }).then((response) => {
            console.log(response.data);
            setClose(response.data);
            dispatch(getGroupAsync(project_id))
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <Stack direction="row" justifyContent={"space-between"}>
                <Typography variant="h5">신청자 목록</Typography>
                <FormGroup>
                    <FormControlLabel control={<Switch onChange={() => handleCloseApplication(!close)} />} label="마감" />
                </FormGroup>
            </Stack>

            {close ?
                <Alert severity="warning">팀원 신청이 마감되었습니다.</Alert>
                :
                <Paper sx={{ width: '100%' }}>
                    <TableContainer >
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {applicants.map((applicant, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={applicant.user_id} onClick={() => handleShow(applicant)} >
                                        {columns.map((column) => {
                                            const value = applicant[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'index'
                                                        ? index + 1
                                                        : column.id === 'accept' ?
                                                            <Stack spacing={2} direction="row" justifyContent="center">
                                                                <Button size="small" variant="outlined" onClick={(e) => { e.stopPropagation(); acceptMember(applicant)}} >승인</Button>
                                                                <Button size="small" variant="outlined" color="error" onClick={(e) => { e.stopPropagation(); rejectMember(applicant)}} >반려</Button>
                                                            </Stack>
                                                            : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={applicants.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            }

            <Stack direction="row" justifyContent={"space-between"}>
                <Typography variant="h5">현재 팀원</Typography>

            </Stack>

            <Paper sx={{ width: '100%' }}>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.id === 'accept' ?
                                            "방출"
                                            : column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {group.members.map((member, index) => (
                                member.user_id === group.manager ? null :
                                    <TableRow hover role="checkbox" tabIndex={-1} key={member.user_id}>
                                        {columns.map((column) => {
                                            const value = member[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'index'
                                                        ? index
                                                        : column.id === 'accept' ?
                                                            <Button size="small" variant="outlined" color="error" onClick={() => cancleAccept(member)} >방출</Button>
                                                            : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={applicants.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <MemberModal
                show={show}
                handleClose={handleClose}
                title={show.user_name}
                body={show.message}
                footer={<>
                    <Button size="small" variant="outlined" onClick={() => acceptMember(show)} >승인</Button>
                    <Button size="small" variant="outlined" color="error" onClick={() => rejectMember(show)} >반려</Button>
                </>}
            />
        </>
    )
}

export default MembersContainer;