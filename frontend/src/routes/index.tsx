import { useRoutes } from 'react-router-dom';

import { LandingRoutes } from '@/features/landing';

export const AppRoutes = () => {
    const commonRoutes = [{ path: '/', element: <LandingRoutes /> }];

    const element = useRoutes([...commonRoutes]);

    return <>{element}</>;
};
