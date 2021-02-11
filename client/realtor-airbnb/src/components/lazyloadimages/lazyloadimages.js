import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoadImages({ src }) {
  return (
    <LazyLoadImage
      src={src}
      alt="A white house with black accents"
      effect="blur"
      className="w-full h-screen object-center object-cover"
    />
  );
}
