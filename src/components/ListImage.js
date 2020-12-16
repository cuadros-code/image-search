import React from 'react'
import { ItemImage } from './ItemImage'

export const ListImage = ({ images }) => {
    return (
        <div className="col12 p-5 row">
            { images.map(image => <ItemImage image={image} key={image.id} /> )}
        </div>
    )
}
