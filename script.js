Here’s how you can adjust your function:

function firstChar(text) {
    let trimmedText = text.trim();

    if (trimmedText.length === 0) {
        return '';
    }
    return trimmedText[0];
}