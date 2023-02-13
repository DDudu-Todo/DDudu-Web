import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Avatar, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
//
import navConfig from './config';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const base_url = process.env.REACT_APP_SERVER_IP;

  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [photoURL, setPhotoURL] = useState();

  async function getUser() {
    await axios.get(`${base_url}/dashboard/app`)
    .then((res) => {
      var data = res.data.data;
      setDisplayName(data[0].nickname);
      setEmail(data[0].email);
      setPhotoURL(data[0].image_url);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      {/* following & follower */}
      <Box sx={{ display: 'flex', mb: 2.5, mx: 2.5 }}>

        <Typography variant="h6" sx={{mr: 2}}>
          follower: {}
        </Typography>

        <Typography variant="h6">
          following: {}
        </Typography>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {/* logout */}
      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          <Button href="/user/kakao/logout" sx={{ width: 1 }}>
            Logout
          </Button>
        </Stack>
      </Box>

    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
