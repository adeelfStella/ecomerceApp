import axios from 'axios';
import React from 'react';

export const postRequest = async (url, data, onSuccess = () => { }, onError = () => { }) => {

    axios.post(url, data)
        .then(res => {
            onSuccess(res)
        })
        .catch((error) => {
            onError(error)
        })

};
export const getRequest = async (url, onSuccess = () => { }, onError = () => { },) => {
    axios.get(url)
        .then(res => {
            onSuccess(res)
        })
        .catch((error) => {
            onError(error)
        })
};
