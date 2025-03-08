import { DOMParser } from 'xmldom';

export default function parseXML(content) {
    try {
        const parser = new DOMParser();
        const kml = parser.parseFromString(content, 'text/xml');

        const polygons = kml.getElementsByTagName('Polygon');
        const coordinates = [];

        for (let i = 0; i < polygons.length; i++) {
            const polygon = polygons[i];
            const coordinatesString = polygon.getElementsByTagName('coordinates')[0]?.textContent;

            if (coordinatesString) {
                const coords = coordinatesString.trim().split(' ');
                coords.forEach((coord) => {
                    const [longitude, latitude] = coord.split(',').map(parseFloat);
                    if (!isNaN(latitude) && !isNaN(longitude)) {
                        coordinates.push({ latitude, longitude });
                    }
                });
            }
        }

        console.log('Parsed KML:', coordinates);

        return coordinates;
    } catch (error) { console.error('Error parsing KML:', error); return null }
}