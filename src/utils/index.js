const formatSecondsToMinute = (seconds)=>{
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const fomatedMinutes = String(minutes).padStart(2,'0');
    const formatedSeconds = String(remainingSeconds).padStart(2,'0');
    return `${fomatedMinutes}:${formatedSeconds}`;

};
export default formatSecondsToMinute;