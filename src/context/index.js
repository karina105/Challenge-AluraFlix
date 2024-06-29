// VideoContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchVideos(); // Llamar a fetchVideos cuando el componente se monte
    }, []);

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

    const handleSaveVideo = async (editedVideo) => {
        try {
            const response = await axios.put(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${editedVideo.id}`, editedVideo);
            console.log('Video actualizado:', response.data);

            // Actualizar la lista de videos después de editar
            fetchVideos();

            // Cerrar el modal después de guardar los cambios
            closeModal();
        } catch (error) {
            console.error('Error updating video:', error);
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

    const videoContextValue = {
        videos,
        fetchVideos,
        handleDeleteVideo,
        handleSaveVideo,
        isModalOpen,
        openModal,
        closeModal,
        selectedVideo,
    };

    return (
        <VideoContext.Provider value={videoContextValue}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoContext;
