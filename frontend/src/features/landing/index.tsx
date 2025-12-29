import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './routes/landing';

export const LandingRoutes = () => {
    return (
        <Routes>
        <Route path= "" element = {< LandingPage />} />
            </Routes>
  );
};
