let data = {};

export const setItem = (key, value) => {
    data = {
        ...data,
        [key]: value
    };
};

export const getItem = (key) => {
    return data[key];
};


if(typeof __NEXT_DATA__ !== 'undefined') {
    data = {
        ...__NEXT_DATA__.props.store
    };
}

export default {
    setItem,
    getItem,
    get data() {
        return data;
    }
};
