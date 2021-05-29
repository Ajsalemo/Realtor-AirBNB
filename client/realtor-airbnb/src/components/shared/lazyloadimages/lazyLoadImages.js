import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoadImages({ src, classNames }) {
  return (
    <LazyLoadImage
      src={src}
      alt="Images of homes for sale"
      effect="blur"
      placeholderSrc={src}
      className={classNames || null}
    />
  );
}
