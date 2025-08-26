const likeService = (() => {
    const getLike = async (callback) => {
        const response = await fetch(`/api/like/list`);
        const likes = await response.json();

        if(callback){
            setTimeout(() => {
                callback(likes);
            }, 500)
        }

        if(response.ok) {
            console.log("좋아요 존재");
        } else if(response.status === 404){
            console.log("좋아요 없음");
        } else {
            const error = await response.text();
            console.log(error);
        }

        return likes;
    }

    return {getLike: getLike}
})();