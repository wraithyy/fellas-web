export const Slider = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <div key={image.alt}>
          <img src={image.src} className="w-full h-full" />
        </div>
      ))}
    </>
  );
};
