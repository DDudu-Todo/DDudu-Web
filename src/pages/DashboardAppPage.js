import { Helmet } from 'react-helmet-async';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Stack, IconButton, Modal, Box } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
// sections
import {
  AppTasks,
  AppCalendar,
} from '../sections/@dashboard/app';
//
import UserPopover from './UserPopover';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTasks from 'src/sections/@dashboard/app/AddTasks';

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const baseURL = process.env.REACT_APP_SERVER_IP;

const DashboardAppPage = () => {
  const [items, setItems] = useState([]);

  const [date, setDate] = useState(new Date().toLocaleDateString());

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  // component mount될 때마다
  useEffect(() => {
    getTodoList(date);
  }, [date]);

  const getTodoList = (date) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['user_id'];
    axios({
      url: `${baseURL}/todo/${date}/${user_id}`,
      method: 'get'
    })
      .then((res) => {
        setItems(res.data);
      });
  }

  const handleDelete = (item) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['user_id'];
    axios({
      url: `${baseURL}/todo/remove`,
      method: 'delete',
      data: {
        todo_id: item.id,
        user_id: user_id
      }
    })
      .then((res) => {
        setItems(res.data);
      })
  }

  const handleEdit = (item) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['user_id'];
    axios({
      url: `${baseURL}/todo/modify`,
      method: 'post',
      data: {
        user_id: user_id,
        todo_id: item.id,
        contents: item.contents
      }
    })
      .then((res) => {
        setItems(res.data);
      })
  }

  const handleAdd = (item) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['user_id'];
    axios({
      url: `${baseURL}/todo/add`,
      method: 'post',
      data: {
        user_id: user_id,
        contents: item.contents,
        public_type: false,
        hashtag: item.hashtag,
        date: date
      }
    })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        if (err['message'].replace("Request failed with status code ", "")) {
          alert("요청에 문제가 생겼습니다.");
        }
      });
  }

  const handleCheck = (item_id) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['user_id'];
    axios({
      url: `${baseURL}/todo/change-status`,
      method: 'post',
      data: {
        todo_id: item_id,
        user_id: user_id
      }
    })
    .then((res) => {
      const result_id = res.data;
      setItems(items.map((item) => {
        if (item.id === result_id) {
          item.undone = !item.undone;
        }
        return item;
      }))
    })
    .catch((err) => {
      if (err['message'].replace("Request failed with status code ", "")) {
        alert("요청에 문제가 생겼습니다.");
      }
    });
  }

  const getDate = (date) => {
    setDate(date);
  }

  return (
    <>
      <Helmet>
        <title> DDudu-Todo </title>
      </Helmet>

      <Container maxWidth="xl">

        {/* friend */}
        <Stack spacing={4} sx={{ mb: 5 }}>
          <Stack direction='row' spacing={2}>
            <UserPopover />
            <UserPopover />
            <UserPopover />
            <UserPopover />
          </Stack>
        </Stack>

        <Grid container spacing={3}>

          {/* Calendar */}
          <Grid item xs={12} md={6} lg={4}>
            <AppCalendar list={items} title="" getDate={getDate} />
          </Grid>

          {/* todo */}
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title=""
              list={items}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onCheck={handleCheck}
            />
            <IconButton color="primary" aria-label="add task" onClick={handleOpenModal} size="large">
              <AddTaskIcon />
            </IconButton>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={style}>
                <AddTasks handleCloseModal={handleCloseModal} onAdd={handleAdd} />
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashboardAppPage;