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
        console.log(item);
    }

    const onButtonClick = () => {
        props.onEdit(item);
        console.log(item);
        props.handleCloseModal();
        props.handleCloseMenu();
    }

    return (
        <>
            <h1>task 수정</h1>
            <TextField name="contents"
                onChange={onInputChange}
                value={item.contents}
                fullWidth />
            <br />
            <Button onClick={onButtonClick}>완료</Button>
            <Button onClick={props.handleCloseModal}>취소</Button>
        </>
    );
}

export default EditTask;