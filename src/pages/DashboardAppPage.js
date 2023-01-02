import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import {
  AppTasks,
  AppOrderTimeline,
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
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>

          {/* Calendar */}
          <Grid item xs={12} md={6} lg={4}>
            <AppCalendar
              title=""
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title=""
              list={[
                { id: '1', label: 'Attention 연습하기 🥰' },
                { id: '2', label: 'Hype Boy 춤!! 🧞' },
                { id: '3', label: 'Ditto 챙겨보기 📹' },
                { id: '4', label: 'OMG 앨범 사기 😵' },
                { id: '5', label: 'Cookie 먹기 🍪' },
                { id: '6', label: 'Hurt 흥얼대기~ 💎'}
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
