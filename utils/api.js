/**
 * @file api.js
 * @description API functions
 * @name API Functions
 * @package utils
 */

import axios from 'axios';

/**
 * @function fetchKML
 * @description Fetch KML data from Agrofit bucket
 * @returns {Promise<string>}
 * @throws {Error}
 * @example
 * fetchKML().then((res) => { console.log(res) });
 */
async function fetchKML() {
    const endpoint = 'http://minio.reto-ucu.net/agrofit/campo.kml';

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export { fetchKML };