class ImageModel {
    imageId: number;
    imageName?: string;
    isMainImage?: boolean;
    link?: string;
    data?: string;

    constructor(imageId: number, imageName?: string, isMainImage?: boolean, link?: string, data?: string) {
        this.imageId = imageId;
        this.imageName = imageName;
        this.isMainImage = isMainImage;
        this.link = link;
        this.data = data;
    }
}

export default ImageModel;


