export const setEmojiInStorage = (emoji) => {
    const stringifiedEmoji = JSON.stringify(emoji);
    localStorage.setItem("emoji", stringifiedEmoji);
}

export const getEmojiInStorage = () => {
    const storedEmoji = localStorage.getItem("emoji");
    return storedEmoji ? JSON.parse(storedEmoji) : [];

}