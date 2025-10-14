// assets
import LanguageIcon from '@mui/icons-material/Language';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// icons
const icons = {
  LanguageIcon,
  HelpOutlineIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.LanguageIcon
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.HelpOutlineIcon,
      external: true,
      target: true
    }
  ]
};

export default support;
