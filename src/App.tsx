import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Panchakarma } from './pages/Panchakarma';
import { Therapies } from './pages/Therapies';
import { Programs } from './pages/Programs';
import { Rejuvenation } from './pages/Rejuvenation';
import { Wellness } from './pages/Wellness';
import { Faqs } from './pages/Faqs';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { LocalSeoPage } from './pages/LocalSeoPage';
import { NotFound } from './pages/NotFound';
import { localSeoPages } from './data/localSeoPages';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/panchakarma" element={<Panchakarma />} />
          <Route path="/therapies" element={<Therapies />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/rejuvenation" element={<Rejuvenation />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {localSeoPages.map((page) =>
          <Route
            key={page.slug}
            path={`/${page.slug}`}
            element={<LocalSeoPage page={page} />} />

          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}