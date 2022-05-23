import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectID: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: ''
})