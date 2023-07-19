import noImage from "../assets/blank.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const traget = "media/";
  const index = url.indexOf(traget) + traget.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
