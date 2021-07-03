import { useState, useEffect } from 'react';
import { fetchDogImages } from '../../../api/fetchDogImages';
import { FormApp } from '../forms/FormApp';
import { Gallery } from './Gallery';

export function MainContent() {
    const initUrls: string[] = [];
    const [urls, setUrls] = useState(initUrls);

    useEffect(() => {
        fetchDogImages('shiba').then((urls) => {
            setUrls(urls);
        });
    }, []);

    function reloadImages(breed: string): void {
        if (breed == null) {
            return;
        }

        fetchDogImages(breed).then((urls) => {
            setUrls(urls);
        });
    }

    return (
        <div className="container mt-3">
            <FormApp onFormSubmit={reloadImages} />
            <Gallery urls={urls} />
        </div>
    );
}
