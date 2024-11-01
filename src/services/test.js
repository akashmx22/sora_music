import React, { useState} from 'react';
export const useFetchSongs = async() => {

    try {
        const response = await fetch(`https://saavn.dev/api/search/songs?query=Believer`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        return response.json()}
    catch (error) {
    console.error(error);
    }


};

