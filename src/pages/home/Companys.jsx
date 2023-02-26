export default function Companys({ images }) {
  return (
    <div className="p-5 sm:p-10 bg-main-0">
      <div className="grid grid-cols-4 max-w-screen-xl mx-auto justify-items-center items-center">
        {images.map(({ link, classes, alt }) => (
          <img className={`${classes}`} key={link} src={link} alt={alt} />
        ))}
      </div>
    </div>
  );
}
