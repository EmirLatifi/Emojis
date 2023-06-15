import React, { useState, useContext } from 'react'
import { EmojisContext } from './Emoji';


function EmojisGroup() {

    const emojisContext = useContext(EmojisContext);
    const {
        emojis,
        allEmojis,
        selectedEmojis,
        setSelectedEmojis
    } = emojisContext;

    const [showAddButton, setShowAddButton] = useState(null);

    const getGroupedEmojis = () => {
        const grouped = {};

        emojis.forEach(emoji => {
            const { group } = emoji;

            if (!grouped[group]) {
                grouped[group] = [];
            }
            grouped[group].push(emoji);
        });
        return grouped;
    }
    const groupedEmojis = getGroupedEmojis();

    const onClickShowAddButton = (emoji) => {
        if (showAddButton === emoji) {
            setShowAddButton(null)
        }
        else {
            setShowAddButton(emoji)
        }
    }

    const onClickMyEmojis = (emojiName) => {
        if (selectedEmojis.some((emoji) => emoji.unicodeName === emojiName)) {
            alert("You have added this emoji before ");
            return;
        }
        const emoji = allEmojis.find((emoji) => emoji.unicodeName === emojiName);
        setSelectedEmojis((prevEmojis) => [...prevEmojis, emoji])
    }

    return (
        <div className='emojis' >
            {Object.entries(groupedEmojis).map(([group, emojis]) => (
                <div className='groups' key={group}>
                    <h2 className='group'>{group}</h2>
                    <ul>
                        {emojis.map((emoji) => (
                            <li className='emojisList' key={emoji.unicodeName}
                                onClick={() => onClickShowAddButton(emoji)} >
                                <span className='emojiCharacter' >{emoji.character}
                                    <span className='name'>{emoji.unicodeName}</span>
                                </span>
                                {showAddButton === emoji &&
                                    <button type='button' className='addEmoji' onClick={() => onClickMyEmojis(emoji.unicodeName)}>Add</button>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default EmojisGroup