import { Helmet } from 'react-helmet-async';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Avatar, Stack } from '@mui/material';
// sections
import {
  AppTasks,
  AppCalendar
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  // const theme = useTheme();

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
            <AppCalendar title="" />
          </Grid>

          {/* todo */}
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title=""
              list={[
                { id: '1', label: 'Attention 연습하기 🥰' },
                { id: '2', label: 'Hype Boy 춤!! 🧞' },
                { id: '3', label: 'Ditto 챙겨보기 📹' },
                { id: '4', label: 'OMG 앨범 사기 😵' },
                { id: '5', label: 'Cookie 먹기 🍪' },
                { id: '6', label: 'Hurt 흥얼대기~ 💎' }
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
