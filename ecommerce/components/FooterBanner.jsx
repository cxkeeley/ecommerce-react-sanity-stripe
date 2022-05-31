import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText2,
    largeText3,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    desc,
    imageFooter
  }
}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <h3>{largeText3}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(imageFooter)} className='footer-banner-image' alt='' />
      </div>
    </div>
  );
};

export default FooterBanner;
