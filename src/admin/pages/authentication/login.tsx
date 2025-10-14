import { useTranslation } from 'react-i18next';
import { Navigate, useLocation } from 'react-router-dom';
// material-ui
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import { useUserState } from '@admin/context/UserContext';

// ================================|| LOGIN ||================================ //

export default function Login() {
  const { t } = useTranslation();
  const location = useLocation();
  const { isAuthenticated } = useUserState();
  const redirectPath = (location.state as { from?: string } | null)?.from || '/';
  if (isAuthenticated) return <Navigate to={redirectPath} replace />;
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Typography variant="h3">{t('SIGN.SIGN')}</Typography>
        </Grid>
        <Grid size={12}>
          <AuthLogin redirectPath={redirectPath} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
