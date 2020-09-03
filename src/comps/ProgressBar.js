import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    
    //remove progress bar and file cache
    useEffect(() => {
        if(url) {
            setFile(null)
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar" 
            intial ={{width:0}}
            animate={{width: progress + "%"}}
        ></motion.div>
    )
}

export default ProgressBar