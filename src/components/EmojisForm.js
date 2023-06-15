import React, { useState, useContext } from 'react'
import MyEmojis from './Modal.js/MyEmojis';
import { EmojisContext } from './Emoji';

function EmojisForm() {

    const emojisContext = useContext(EmojisContext);
    const {
        setEmojis,
        allEmojis
    } = emojisContext

    const [searchEmoji, setSearchEmoji] = useState("");
    const [myEmojisModal, setMyEmojisModal] = useState(false)


    const searchFunction = (e) => {
        const emojiName = e.target.value
        setSearchEmoji(emojiName);

        const search = allEmojis.filter(emoji =>
            emoji.unicodeName.toLowerCase().includes(emojiName)
        );
        setEmojis(search);
    };

    const onClickMyEmojisModal = () => {
        setMyEmojisModal(true)
    }
    const onClickRemoveEmojisModal = () => {
        setMyEmojisModal(false)
    }
    return (
        <>
            <form>
                <input type='text' className='emojisInput' value={searchEmoji} onChange={searchFunction} placeholder="Search emoji"></input>
                <button type="button" className='myEmojisButton' onClick={onClickMyEmojisModal}>My emojis</button>
            </form>
            <MyEmojis isOpen={myEmojisModal} onClose={onClickRemoveEmojisModal} />
        </>
    )
}

export default EmojisForm