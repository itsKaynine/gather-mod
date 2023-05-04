export const generateColorFromString = (inputString: string) => {
    // Generate a hash code for the input string
    let hashCode = 0;
    for (let i = 0; i < inputString.length; i++) {
        hashCode = inputString.charCodeAt(i) + ((hashCode << 5) - hashCode);
    }

    // Convert the hash code to a hexadecimal string
    let hexString = (hashCode & 0x00ffffff).toString(16);
    hexString = '00000'.substring(0, 6 - hexString.length) + hexString;

    // Use the hexadecimal string to create a random color
    const red = parseInt(hexString.substring(0, 2), 16);
    const green = parseInt(hexString.substring(2, 4), 16);
    const blue = parseInt(hexString.substring(4, 6), 16);
    const color = `rgb(${red}, ${green}, ${blue})`;

    // Return the color
    return color;
};

export const generateLightColorFromString = (inputString: string) => {
    // Generate a hash code for the input string
    let hashCode = 0;
    for (let i = 0; i < inputString.length; i++) {
        hashCode = inputString.charCodeAt(i) + ((hashCode << 5) - hashCode);
    }

    // Convert the hash code to a hexadecimal string
    let hexString = (hashCode & 0x00ffffff).toString(16);
    hexString = '00000'.substring(0, 6 - hexString.length) + hexString;

    // Use the hexadecimal string to create a light color
    const red = parseInt(hexString.substring(0, 2), 16);
    const green = parseInt(hexString.substring(2, 4), 16);
    const blue = parseInt(hexString.substring(4, 6), 16);
    const maxComponent = Math.max(red, green, blue);
    const minComponent = Math.min(red, green, blue);
    const midComponent = red + green + blue - maxComponent - minComponent;
    const diff = maxComponent - minComponent;
    const saturation = diff / maxComponent;
    let brightness = 0.9;
    if (maxComponent === 0) {
        brightness = 1;
    } else if (maxComponent < 128) {
        brightness = 0.7;
    }
    const color = `hsl(${Math.floor(360 * (midComponent / 255 + (0.5 * (green - blue)) / diff))}, ${Math.floor(
        100 * saturation,
    )}%, ${Math.floor(100 * brightness)}%)`;

    // Return the color
    return color;
};
