const bannerService = (() => {
    const getBannerAll = async (callback) => {
        const response = await fetch('/api/banner/all');
        const banners = await response.json();

        if (callback) {callback(banners)}

        if (response.ok) {
            if (response.status === 404) {
                console.log("배너 없음");
            } else {
                const error = await response.text();
                console.log(error);
            }
        }
        return banners;
        console.log("emfdjdha")
    }
    return {getBannerAll:getBannerAll}
})();