import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {

  const base_url = process.env.REACT_APP_SERVER_IP;

  const [displayName, setDisplayName] = useState();
  const [photoURL, setPhotoURL] = useState();

  async function getUser() {
    await axios.get(`${base_url}/dashboard/app`)
    .then((res) => {
      var data = res.data.data;
      setDisplayName(data[0].nickname);
      setPhotoURL(data[0].image_url);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <NotificationsPopover />
          <Avatar alt={displayName} src={photoURL} />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
