import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from '@mantine/core';

import  {RouteTree } from "../router/RouteTree"

import { RouterProvider, createRouter } from '@tanstack/react-router'

import ShadeBlock from '../base/shade/block'
import SolidBlock from '../base/solid/block'
import SpaceBlock from '../base/space/block'
import PixelBlock from '../base/pixel/block'
import ControlBlock from '../base/control/block'
import TimeBlock from '../base/time/block'



// Create a brutalist theme
const brutalistTheme = createTheme({
  imageRendering: 'pixelated',
  colorScheme: 'dark',
  colors: {
    swamp: [
      '#1a1e14', '#232a1c', '#2c3623', '#35422a', 
      '#3e4e31', '#475a38', '#50663f', '#597246', 
      '#627e4d', '#6b8a54'
    ],
    mud: [
      '#2a2420', '#332d28', '#3c3630', '#453f38', 
      '#4e4840', '#575148', '#605a50', '#696358', 
      '#726c60', '#7b7568'
    ],
    fog: [
      '#c9c7b8', '#d1cfbf', '#d8d7c7', '#e0decf', 
      '#e8e6d7', '#efedde', '#f7f5e6', '#fefcee', 
      '#ffffff', '#ffffff'
    ],
  },
  primaryColor: 'swamp',
  primaryShade: 4,
  fontFamily: 'Georgia, serif',
  headings: { fontFamily: 'Georgia, serif' },
  wrapper: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#1a1e14',
  },
  filmGrain: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
    opacity: 0.15,
    mixBlendMode: 'multiply',
    zIndex: 10,
    pointerEvents: 'none',
  },
  swampFog: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, transparent 0%, rgba(26, 30, 20, 0.8) 100%)',
    zIndex: 1,
  },
  fogPatches: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'fogFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.01\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23fogFilter)\'/%3E%3C/svg%3E")',
    opacity: 0.2,
    mixBlendMode: 'screen',
  },
  titleContainer: {
    position: 'absolute',
    top: 3 * 2,
    left: 3 * 2,
    zIndex: 5,
  },
  title: {
    color: '#FF00FF',
    lineHeight: 0.9,
    letterSpacing: 1,
    fontWeight: 900,
    textTransform: 'uppercase',
    textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
  },
  subtitle: {
    color: '#e0decf',
    marginTop: 1,
    fontStyle: 'italic',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
    opacity: 0.8,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 3* 3,
    right: 3 * 2,
    minWidth: 280,
    zIndex: 5,
  } 
})


const queryClient = new QueryClient();

const routeTree = RouteTree()
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimeBlock/>
    <SpaceBlock/>
    <ShadeBlock/>
    <SolidBlock/>
    <PixelBlock/>
    <ControlBlock/>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={brutalistTheme}>
      <RouterProvider router={router} />
      </MantineProvider>      
    </QueryClientProvider>
  </React.StrictMode>
);
