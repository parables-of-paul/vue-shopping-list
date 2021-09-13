import axios from 'axios';




const baseURL = 'https://vue-bunny-shopping-app.herokuapp.com';

const bathBaseURL = baseURL+'/bath/';
const fruitBaseURL = baseURL+'/fruit/';
const fridgeBaseURL = baseURL+'/fridge/';
const freezerBaseURL = baseURL+'/freezer/';
const dryBaseURL = baseURL+'/dry/';
const miscBaseURL = baseURL+'/items/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.log(error);
    });

    export const misc_api = {
        getItems: handleError(async () => {
            const res = await axios.get(miscBaseURL);
            return res.data
            console.log(res.data);
        }),
        deleteItem: handleError(async id => {
            const res = await axios.delete(miscBaseURL + id);
            return res.data;
        }),
        createItem: handleError(async payload => {
            const res = await axios.post(miscBaseURL, payload);
            console.log(payload + ' successfully fired createItem method from helpers.js')
            return res.data;
        })
    };

    export const bath_api = {
        getBathItems: handleError(async () => {
            const res = await axios.get(bathBaseURL);
            return res.data
        }),
        deleteBathItem: handleError(async id => {
            const res = await axios.delete(bathBaseURL + id);
            return res.data
        }),
        createBathItem: handleError(async payload => {
            const res = await axios.post(bathBaseURL, payload);
            return res.data;
        })
    };

    export const fruit_api = {
        getFruitItems: handleError(async () => {
            const res = await axios.get(fruitBaseURL);
            return res.data
        }),
        deleteFruitItem: handleError(async id => {
            const res = await axios.delete(fruitBaseURL + id);
            return res.data;
        }),
        createFruitItem: handleError(async payload => {
            const res = await axios.post(fruitBaseURL, payload);
            return res.data;
        })
    };

    export const fridge_api = {
        getFridgeItems: handleError(async () => {
            const res = await axios.get(fridgeBaseURL);
            return res.data
        }),
        deleteFridgeItem: handleError(async id => {
            const res = await axios.delete(fridgeBaseURL + id);
            return res.data;
        }),
        createFridgeItem: handleError(async payload => {
            const res = await axios.post(fridgeBaseURL, payload);
            return res.data;
        })
    };

    export const freeze_api = {
        getFreezerItems: handleError(async () => {
            const res = await axios.get(freezerBaseURL);
            return res.data
        }),
        deleteFreezerItem: handleError(async id => {
            const res = await axios.delete(freezerBaseURL + id);
            return res.data;
        }),
        createFreezerItem: handleError(async payload => {
            const res = await axios.post(freezerBaseURL, payload);
            return res.data;
        })
    };

    export const dry_api = {
        getDryItems: handleError(async () => {
            const res = await axios.get(dryBaseURL);
            return res.data
        }),
        deleteDryItem: handleError(async id => {
            const res = await axios.delete(dryBaseURL + id);
            return res.data;
        }),
        createDryItem: handleError(async payload => {
            const res = await axios.post(dryBaseURL, payload);
            return res.data;
        })
    };

    