import React, { useState, useContext } from 'react'
import { EmojisContext } from '../Emoji';

function MyEmojis({ isOpen, onClose }) {
    const emojisContext = useContext(EmojisContext);

    const { selectedEmojis, setSelectedEmojis } = emojisContext;

    const [removeButton, setRemoveButton] = useState(null);

    const onClickRemoveButton = (emoji) => {
        if (removeButton === emoji) {
            setRemoveButton(null)
        }
        else {
            setRemoveButton(emoji)
        }
    }

    const removeEmoji = (emojiName) => {
        setSelectedEmojis(selectedEmojis.filter((remove) => remove.unicodeName !== emojiName))
    }

    return (
        <div className={`myEmojis ${isOpen ? 'open' : ''}`}>
            <span className="close" onClick={onClose}>X</span>
            <div className="myEmojis-content">
                <ul className='myEmojisUl'>
                    <li className='title'>My Emojis</li>
                    {selectedEmojis.map((emoji) => (
                        <li className='myEmojisList' key={emoji.unicodeName} onClick={() => onClickRemoveButton(emoji)}>
                            <span className="myEmojiCharacter">
                                {emoji.character}
                                <span className='myEmojisName'>{emoji.unicodeName} </span>
                            </span>
                            {removeButton === emoji &&
                                <button className='removeEmoji' onClick={() => removeEmoji(emoji.unicodeName)}>Remove</button>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyEmojis