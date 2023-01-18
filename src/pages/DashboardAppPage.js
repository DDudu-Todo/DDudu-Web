import { Helmet } from 'react-helmet-async';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Avatar, Stack } from '@mui/material';
// sections
import {
  AppTasks,
  AppCalendar,
} from '../sections/@dashboard/app';

import AddTasks from 'src/sections/@dashboard/app/AddTasks';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

const baseURL = process.env.REACT_APP_SERVER_IP;

const DashboardAppPage = () => {
  const [items, setItems] = useState([]);

  // component mount될 때마다
  useEffect(() => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['id'];
    axios({
      url: `${baseURL}/todo/${user_id}`,
      method: 'get'
    })
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  const handleDelete = (item) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['id'];
    axios({
      url: `${baseURL}/todo/remove`,
      method: 'delete',
      data: {
        task_id: item.id,
        user_id: user_id
      }
    })
      .then((res) => {
        setItems(res.data);
      })
  }

  const handleEdit = (item) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['id'];
    axios({
      url: `${baseURL}/todo/modify`,
      method: 'post',
      data: {
        user_id: user_id,
        task_id: item.id,
        contents: item.contents
      }
    })
    .then((res) => {
      setItems(res.data);
    })
  }

  const handleAdd = (item) => {
    const user_id = JSON.parse(window.localStorage.getItem('userInfo'))['id'];
    axios({
      url: `${baseURL}/todo/add`,
      method: 'post',
      data: {
        user_id: user_id,
        contents: item.contents
      }
    })
      .then((res) => {
        setItems(res.data);
      });
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
            <Avatar alt="민지" src="/assets/images/avatars/avatar_1.jpg" sx={{ width: 45, height: 45 }} />
            <Avatar alt="하니" src="/assets/images/avatars/avatar_2.jpg" sx={{ width: 45, height: 45 }} />
            <Avatar alt="다니엘" src="/assets/images/avatars/avatar_3.jpg" sx={{ width: 45, height: 45 }} />
            <Avatar alt="혜인" src="/assets/images/avatars/avatar_4.jpg" sx={{ width: 45, height: 45 }} />
          </Stack>
        </Stack>

        <Grid container spacing={3}>

          {/* Calendar */}
          <Grid item xs={12} md={6} lg={4}>
            <AppCalendar list={items} title="" />
          </Grid>

          {/* todo */}
          <Grid item xs={12} md={6} lg={8}>
            <AddTasks add={handleAdd} />
            <AppTasks
              title=""
              list={items}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashboardAppPage;