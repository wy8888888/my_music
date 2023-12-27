import Djradio from '@/views/discover/subViews/djradio';
import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// 路由懒加载

const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/subViews/recommend'));
const TopList = lazy(() => import('@/views/discover/subViews/toplist'));
const PlayList = lazy(() => import('@/views/discover/subViews/playlist'));
const Artist = lazy(() => import('@/views/discover/subViews/artist'));
const Album = lazy(() => import('@/views/discover/subViews/album'));

const My = lazy(() => import('@/views/my'));
const Friend = lazy(() => import('@/views/friend'));
const Download = lazy(() => import('@/views/download'));

const routes: RouteObject[] = [
    {
        path: '',
        element: <Discover />
    },
    {
        path: '/discover',
        element: <Discover />,

        children: [
            {
                path: '/discover',
                element: <Recommend />
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/TopList',
                element: <TopList />
            },
            {
                path: '/discover/PlayList',
                element: <PlayList />
            },
            {
                path: '/discover/Artist',
                element: <Artist />
            },
            {
                path: '/discover/djradio',
                element: <Djradio />
            },
            {
                path: '/discover/album',
                element: <Album />
            }
        ]
    },
    {
        path: '/my',
        element: <My />
    },
    {
        path: '/friend',
        element: <Friend />
    },
    {
        path: '/download',
        element: <Download />
    }
];

export default routes;
