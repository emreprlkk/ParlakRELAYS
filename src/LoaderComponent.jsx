import React from 'react';
import './loader.css';

const LoaderComponent = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loading-text">Yükleniyor...</div>
    </div>
  );
};

export default LoaderComponent;
