import { Routes, Route } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Settings } from '@/pages/Settings';
import { NoMatch } from '@/pages/NoMatch';

export const Router = () => (
  <Routes>
    <Route path="settings" element={<Settings />} />
    <Route path="/" element={<Home />} />

    <Route path="*" element={<NoMatch />} />
  </Routes>
);
