import React from 'react';
import Banner from '../Layout/Banner';
import bannerAbout from '../../styles/img/bannerAbout-kasa.webp'

const BannerAbout = () => {
    return(
        <Banner
            title='À propos'
            src={bannerAbout}
        />
    )
}

export default BannerAbout;
