// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_blog'),
  },
  {
    title: 'reward',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'friend',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'setting',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  /*
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  */
];

export default navConfig;
