import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoadImages({ src, classNames }) {
  return (
    <div className="h-screen">
      <LazyLoadImage
        src={src}
        alt="Images of homes for sale"
        effect="blur"
        className={classNames || null}
      />
    </div>
  );
}
