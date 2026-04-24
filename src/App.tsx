/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ListingDetail from './pages/ListingDetail';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Lend from './pages/Lend';
import Chat from './pages/Chat';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg text-text-main font-sans selection:bg-brand/10 selection:text-brand">
        <CommandPalette />
        <Navbar />
        <main className="transition-all duration-500">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/lend" element={<Lend />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/chat/:id" element={<Chat />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        
        {/* Mobile Navigation Spacer */}
        <div className="h-32 md:hidden" />
      </div>
    </Router>
  );
}

