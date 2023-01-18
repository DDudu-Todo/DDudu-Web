import React, { useState } from "react";

import { Grid, TextField, Button, Paper } from '@mui/material';

const AddTasks = (props) => {
    // 입력되는 todo
    let [item, setItem] = useState({
        contents: ""
    });

    // Todo 추가
    const addTask = props.add;

    // input 내용이 변경될 때 호출
    const onInputChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    // + 버튼 눌렀을 떄 호출
    const onButtonClick = () => {
        // item에 들어있는 추가할 todo 추가
        addTask(item);
        // item칸은 다시 빈칸으로
        setItem({
            contents: ""
        })
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container alignItems="center">
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField name="contents"
                        onChange={onInputChange}
                        value={item.contents}
                        placeholder="Add Todo here"
                        fullWidth />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
                        onClick={onButtonClick}
                        color="secondary"
                        variant="outlined">+</Button>
                </Grid>
            </Grid>
        </Paper>

    )

}

export default AddTasks;