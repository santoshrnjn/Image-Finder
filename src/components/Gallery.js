import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { getTrendingImages, getSearchedImages } from '../api/api';
import Masonry from 'react-masonry-component';
import Image from './Image';

const modalStyle = {
    content: {
        border: 'none',
        padding: 'none',
        overflow: 'none',
        background: 'none',
    }
}

const Gallery = ({ query }) => {
    const [imageList, setImageList] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        getTrendingImages().then(data => {
            setImageList(data);
        })
    }, [])

    useEffect(async () => {
        if (query.trim() === '') {
            return;
        }
        const data = await getSearchedImages(query);
        setImageList(data);
    }, [query])

    Modal.setAppElement('#root')

    return (
        <div>
            <Modal
                style={modalStyle}
                isOpen={!!currentImage}
                onRequestClose={() => setCurrentImage(null)}>
                <img className="img-preview" src={currentImage} alt="image preview" />
            </Modal>
            {imageList.length === 0 ? <h2>No Images Found !</h2> : null}
            <Masonry className="grid-container" options={{ isFitWidth: true }}>
                {imageList.map(image => {
                    return <Image
                        urls={image.urls}
                        key={image.id}
                        handleClick={setCurrentImage}
                        onClick={() => { console.log("first"); }} />
                })}
            </Masonry>
        </div>
    );
};

export default Gallery;
