function getResponseFromAPI(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const apiResponse = {data : "data"};
        resolve(apiResponse);
        }, 2000);
    });
}

export default getResponseFromAPI;
