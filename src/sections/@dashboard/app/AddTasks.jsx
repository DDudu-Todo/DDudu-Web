import { useState } from "react";

// @mui
import {
    Button,
    TextField,
    Checkbox
} from '@mui/material';

const AddTasks = (props) => {

    const [item, setItem] = useState({
        contents: "",
        hashtag: "",
        public_type: true
    })

    const onInputChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    const onButtonClick = () => {
        // item에 들어있는 추가할 todo 추가
        props.onAdd(item);
        props.handleCloseModal();
    }

    return (
        <>
            <h2>할 일 추가</h2>
            <TextField name="contents"
                onChange={onInputChange}
                label="할 일 추가"
                variant="standard"
                margin="dense"
                fullWidth />
            <br />
            <TextField name="hashtag"
                onChange={onInputChange}
                label="해시태그 달기"
                variant="standard"
                margin="dense"
                fullWidth />
            <br />
            {/* 공개 범위 설정 */}
            <br />
            <Button onClick={onButtonClick}>완료</Button>
            <Button onClick={props.handleCloseModal}>취소</Button>
        </>
    );
}

export default AddTasks;