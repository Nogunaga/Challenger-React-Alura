import React, { useState } from "react";
import styled from "styled-components";
import CardActions from "../CardActions/CardActions";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #4b6b8a8a;
  /* ...otros estilos... */
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  margin-bottom: 10px;
  text-align: left;
  width: 90%;
  color: #eee3e3;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* ...otros estilos... */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 300px;
  text-align: center;
  transition: transform 0.2s;
  /* ...otros estilos... */
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    margin-top: 0;
    font-size: 1.25em;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &.edit {
      background-color: #007bff;
      color: white;
    }

    &.delete {
      background-color: #dc3545;
      color: white;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  input, select, textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    margin-right: 10px;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;

    &.save {
      background-color: #28a745;
      color: white;
    }

    &.cancel {
      background-color: #6c757d;
      color: white;
    }
  }
`;

const extractYouTubeThumbnail = (url) => {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

// Modificamos el componente Home para incluir la lógica de edición de videos

const Home = ({ videos, setVideos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const deleteVideo = (id) => {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
  };

  const editVideo = (id) => {
    const videoToEdit = videos.find((video) => video.id === id);
    setCurrentVideo({ ...videoToEdit });
    setIsEditing(true);
  };

  const saveVideo = () => {
    const updatedVideos = videos.map((video) =>
      video.id === currentVideo.id ? currentVideo : video
    );
    setVideos(updatedVideos);
    setIsEditing(false);
  };

  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  return (
    <HomeContainer>
      <h2>Lista de Videos</h2>
      {Object.keys(groupedVideos).length === 0 ? (
        <p>No hay videos disponibles</p>
      ) : (
        Object.keys(groupedVideos).map((categoria) => (
          <CategoryContainer key={categoria}>
            <CategoryTitle>{categoria}</CategoryTitle>
            <CardsContainer>
              {groupedVideos[categoria].map((video) => (
                <Card key={video.id}>
                  <h4>{video.titulo}</h4>
                  <p>{video.descripcion}</p>
                  <img
                    src={extractYouTubeThumbnail(video.enlace) || "/placeholder.jpg"}
                    alt={`Miniatura de ${video.titulo}`}
                  />
                  <a
                    href={video.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Video
                  </a>
                  {/* Usamos el componente CardActions */}
                  <CardActions
                    onEdit={() => editVideo(video.id)}
                    onDelete={() => deleteVideo(video.id)}
                  />
                </Card>
              ))}
            </CardsContainer>
          </CategoryContainer>
        ))
      )}

      {isEditing && (
        <Modal>
          <h3>Editar Video</h3>
          <input
            type="text"
            value={currentVideo.titulo}
            onChange={(e) =>
              setCurrentVideo({ ...currentVideo, titulo: e.target.value })
            }
            placeholder="Título"
          />
          <textarea
            value={currentVideo.descripcion}
            onChange={(e) =>
              setCurrentVideo({ ...currentVideo, descripcion: e.target.value })
            }
            placeholder="Descripción"
          />
          <input
            type="text"
            value={currentVideo.enlace}
            onChange={(e) =>
              setCurrentVideo({ ...currentVideo, enlace: e.target.value })
            }
            placeholder="Enlace del Video"
          />
          <input
            type="text"
            value={currentVideo.categoria}
            onChange={(e) =>
              setCurrentVideo({ ...currentVideo, categoria: e.target.value })
            }
            placeholder="Categoría"
          />
          <button className="save" onClick={saveVideo}>
            Guardar
          </button>
          <button className="cancel" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </Modal>
      )}
    </HomeContainer>
  );
};

export default Home;