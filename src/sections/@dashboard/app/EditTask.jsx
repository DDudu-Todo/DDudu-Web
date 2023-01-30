import { useState } from "react";

// @mui
import {
    Button,
    TextField
} from '@mui/material';

const EditTask = (props) => {

    const task = props.task;

    const [item, setItem] = useState({
        id: task.id,
        contents:task.contents
    })

    const onInputChange = (e) => {
        const editItem = {
            ...item,
            [e.target.name]: e.target.value
        };

        setItem(editItem);
    }

    const onButtonClick = () => {
        props.onEdit(item);
        props.handleCloseModal();
        props.handleCloseMenu();
    }

    return (
        <>
            <h2>할 일 수정</h2>
            <TextField name="contents"
                onChange={onInputChange}
                value={item.contents}
                margin="normal"
                fullWidth />
            <br />
            <br />
            <Button onClick={onButtonClick}>완료</Button>
            <Button onClick={props.handleCloseModal}>취소</Button>
        </>
    );
}

export default EditTask;