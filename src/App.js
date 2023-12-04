import React from "react";
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Vision from "./components/Vision";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/Feedback";
import SForm from "./components/Form"
import AForm from "./components/Add"
import WForm from "./components/Withdraw"
// import Receive from "./components/receive";
// from interact.js
import {
  main,
  balance,
  deposit,
  withdrawal,
  transfer,
  getAllTransactions,
  findBalance,
} from "./interact";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [sepolia , polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: 'Ixx4JyeFTpcD2X6RN-RZJmdWkq69MvHm' }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Cross Border Payment',
  projectId: 'Ixx4JyeFTpcD2X6RN-RZJmdWkq69MvHm',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<SForm />} />
          <Route path="/addform" element={<AForm />} />
          <Route path="/withdraw" element={<WForm />} />
        </Routes>
      </BrowserRouter>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
