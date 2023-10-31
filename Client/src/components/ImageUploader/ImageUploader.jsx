import { useState } from 'react';
import axios from 'axios';
import style from './ImageUploader.module.css';

const ImageUploader = ({ handleImageUpload }) => {
  const [urlImage, setUrlImage] = useState('');

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'presets_natural_farma');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dsf00jjdq/image/upload',
        data
      );

      const imageUrl = response.data.secure_url;
      setUrlImage(imageUrl);

      handleImageUpload(imageUrl); 
      console.log(imageUrl);
    } catch (error) {
      // Maneja errores de la solicitud
      console.log(error.message);
    }
  };

  const handleDeleteImage = () => {
    setUrlImage('');
    handleImageUpload(''); // También puedes llamar a handleImageUpload con una cadena vacía para borrar la URL de la imagen
  };

  return (
    <>
      <div className={style.imageUploader}>
        <div className={style.dropzone}>
          <p>Arrastra y suelta una imagen aquí o haz clic para seleccionar una imagen</p>
          <input
            type="file"
            accept="image/*"
            onChange={changeUploadImage}
          />
        </div>
      </div>
      {urlImage && (
        <div>
          <img
            src={urlImage}
            alt=""
          />
          <button onClick={handleDeleteImage}>Eliminar Imagen</button>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
