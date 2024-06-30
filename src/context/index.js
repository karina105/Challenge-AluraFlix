import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const VideoContext = React.createContext();

export const useVideoContext = () => {
    return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos');
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleSaveVideo = async (editedVideo) => {
        try {
            const response = await axios.put(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${editedVideo.id}`, editedVideo);
            console.log('Video actualizado:', response.data);

            fetchVideos(); // Actualizar lista de videos después de actualizar
            closeModal(); // Cerrar modal después de guardar cambios (si aplicable)
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    const handleAddVideo = async (newVideo) => {
        try {
            const response = await axios.post('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos', newVideo);
            console.log('Nuevo video agregado:', response.data);

            // Actualizar la lista de videos en el estado global
            setVideos(prevVideos => [...prevVideos, response.data]);
            fetchVideos(); // Opcionalmente, puedes volver a llamar a fetchVideos para asegurar que la lista esté actualizada
        } catch (error) {
            console.error('Error adding video:', error);
        }
    };

    const handleDeleteVideo = async (videoId) => {
        try {
            await axios.delete(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${videoId}`);
            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
        } catch (error) {
            console.error('Error eliminando video:', error);
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
        handleSaveVideo,
        handleAddVideo, // Agregar handleAddVideo al contexto
        handleDeleteVideo,
        isModalOpen,
        openModal, // Agregar openModal al contexto
        closeModal, // Agregar closeModal al contexto
        selectedVideo,
    };

    return (
        <VideoContext.Provider value={videoContextValue}>
            {children}
        </VideoContext.Provider>
    );
};
