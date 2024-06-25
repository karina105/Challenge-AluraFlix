import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const fetchVideos = async () => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos');
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleDeleteVideo = async (videoId) => {
        try {
            await axios.delete(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${videoId}`);
            setVideos(videos.filter((video) => video.id !== videoId));
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    const handleSaveVideo = async (editedVideo) => {
        try {
            await axios.put(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${editedVideo.id}`, editedVideo);
            fetchVideos(); // Refrescar la lista de videos después de editar
            closeModal();
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    const videoContextValue = {
        videos,
        fetchVideos,
        handleDeleteVideo,
        isModalOpen,
        openModal,
        closeModal,
        selectedVideo,
        handleSaveVideo,
    };

    return (
        <VideoContext.Provider value={videoContextValue}>
            {children}
        </VideoContext.Provider>
    );
};
