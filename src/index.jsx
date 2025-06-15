import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from '@mantine/core';

import  {RouteTree } from "../router/RouteTree"

import { RouterProvider, createRouter } from '@tanstack/react-router'

import BabylonBlock from '../base/babylon/block'
import PixiBlock from '../base/pixi/block'
import PixelBlock from '../base/pixel/block'


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
  },
  menuButton: {
    backgroundColor: 'rgba(30, 35, 25, 0.7)',
    backdropFilter: 'blur(4px)',
    color: '#e8e6d7',
    border: `1px solid ${'#50663f'}`,
    '&:hover': {
      backgroundColor: 'rgba(40, 45, 35, 0.8)',
    },
    transition: 'all 0.3s ease',
    borderRadius: 0,
    boxShadow: '3px 3px 10px rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    padding: 1,
    fontFamily: 'Georgia, serif',
    letterSpacing: 1,
  },
  activeButton: {
    backgroundColor: 'rgba(50, 55, 45, 0.9)',
    borderColor: '#d1cfbf',
    color: '#efedde',
  },
  swampCharacter: {
    position: 'absolute',
    left: '10%',
    bottom: 0,
    width: '40%',
    height: '80%',
    backgroundImage: 'linear-gradient(to bottom, transparent, rgba(26, 30, 20, 0.9))',
    zIndex: 2,
  },
  characterSilhouette: {
    position: 'absolute',
    bottom: '5%',
    left: '15%',
    width: '25%',
    height: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)',
    zIndex: 3,
  },
  deadTree: {
    position: 'absolute',
    right: '30%',
    bottom: 0,
    width: '15%',
    height: '60%',
    backgroundImage: 'linear-gradient(to top, rgba(26, 30, 20, 0.9), transparent)',
    clipPath: 'polygon(50% 0%, 30% 20%, 60% 40%, 40% 60%, 70% 80%, 50% 100%, 100% 100%, 100% 0%)',
    zIndex: 2,
  },
  swampWater: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '30%',
    background: 'linear-gradient(to bottom, rgba(26, 30, 20, 0.1), rgba(26, 30, 20, 0.8))',
    backdropFilter: 'blur(2px)',
    zIndex: 1,
  },
  vintageVignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.7) 100%)',
    pointerEvents: 'none',
    zIndex: 9,
  },
  scratches: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'scratchFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.1\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type=\'discrete\' tableValues=\'0 1\'/%3E%3CfeFuncG type=\'discrete\' tableValues=\'0 1\'/%3E%3CfeFuncB type=\'discrete\' tableValues=\'0 1\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23scratchFilter)\'/%3E%3C/svg%3E")',
    opacity: 0.03,
    mixBlendMode: 'screen',
    zIndex: 11,
    pointerEvents: 'none',
  },
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
    <BabylonBlock/>
    <PixiBlock/>
    <PixelBlock/>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={brutalistTheme}>
      <RouterProvider router={router} />
      </MantineProvider>      
    </QueryClientProvider>
  </React.StrictMode>
);
