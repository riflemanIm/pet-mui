import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { SxProps, Theme } from '@mui/material/styles';

import Logo from './LogoMain';
import config from '@admin/config';

type LogoSectionProps = {
  sx?: SxProps<Theme>;
  to?: string;
};

const LogoSection = ({ sx, to }: LogoSectionProps) => {
  return (
    <ButtonBase disableRipple component={Link} to={to ?? config.defaultPath} sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Chip
          label={process.env.NEXT_PUBLIC_ADMIN_APP_VERSION}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
        />
      </Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
