import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from '@mantine/core';

import  {RouteTree } from "../router/RouteTree"

import { RouterProvider, createRouter } from '@tanstack/react-router'

import SolidBlock from '../base/solid/block'
import ShadeBlock from '../base/shade/block'

import ControlBlock from '../base/control/block'
import TimeBlock from '../base/time/block'
import SpaceBlock from '../base/space/block'
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
    
    <SolidBlock/>
    <ShadeBlock/>
    <SpaceBlock/>
    <ControlBlock/>
    <TimeBlock/>
    <PixelBlock/>

    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={brutalistTheme}>
      <RouterProvider router={router} />
      </MantineProvider>      
    </QueryClientProvider>
  </React.StrictMode>
);
