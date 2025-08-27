const layout = (() => {
    const showBannerList = (banners) => {
        const bannerContainer = document.querySelector(".banner-list");
        let text = ``;

        banners.forEach((banner) => {
            text += `
                <li class="banner">
                    <span class="banner-span">
                        <img src="/api/product/image?filePath=${banner.bannerImage}">
                    </span>
                </li>
            `;
        })
        bannerContainer.innerHTML = text;
        console.log("llllllllll")

    }
    return {showBannerList:showBannerList}
})();