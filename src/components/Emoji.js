import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getEmojiInStorage, setEmojiInStorage } from '../utils/MyEmojisStorage';


export const EmojisContext = React.createContext()

function Emoji({ children }) {
    const [emojis, setEmojis] = useState([]);
    const [allEmojis, setAllEmojis] = useState([]);
    const [selectedEmojis, setSelectedEmojis] = useState(getEmojiInStorage())

    useEffect(() => {
        fetchAllEmojis();
    }, []);

    const fetchAllEmojis = async () => {
        try {
            const response = await axios.get('https://emoji-api.com/emojis?access_key=26a4e9c1b3aa1707e20eb3b00ac41193f7c1f5a7')
            const data = response.data
            setEmojis(data);
            setAllEmojis(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setEmojiInStorage(selectedEmojis)
    }, [selectedEmojis])

    return (
        <EmojisContext.Provider value={
            {
                emojis,
                setEmojis,
                allEmojis,
                setAllEmojis,
                selectedEmojis,
                setSelectedEmojis
            }
        }>
            {children}
        </EmojisContext.Provider>
    )
}

export default Emoji