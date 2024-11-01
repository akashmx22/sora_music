import { useEffect, useRef } from "react";
import TrackPlayer, { RatingType,Capability, RepeatMode } from "react-native-track-player";
const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({
        maxCacheSize : 1024 * 10,
    });
    await TrackPlayer.updateOptions({
        ratingType: RatingType.Heart,
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
        ],
        compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
        ],
    });
    await TrackPlayer.setVolume(0.7);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
export const useSetupPlayer = ({onLoad}) => {
    const isInitialized = useRef(false);

    useEffect(()=> {
        setupPlayer()
        .then(()=>{
            isInitialized.current = true;
            onLoad();
        })
        .catch((error)=>{
            isInitialized.current = false;
            console.log("error :",error);
        });
    },[]);
};