import { Suspense, ComponentType } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};

export default Loadable;
