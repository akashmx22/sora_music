import { useCallback, useEffect, useState } from "react";
import TrackPlayer from "react-native-track-player";

export const useTrackPlayerRepeatMode = () => {
    const [repeatMode, setRepeatMode] = useState(null);

    const changeRepeatMode = useCallback(async (repeatMode) => {
        await TrackPlayer.setRepeatMode(repeatMode);
            setRepeatMode(repeatMode);
    }  // Check if repeatMode is set
    , []);

    useEffect(() => {
        TrackPlayer.getRepeatMode().then(setRepeatMode);
    }, []); // Dependency array added to run once on mount

    return { repeatMode,changeRepeatMode }; // Return functions if needed

};

