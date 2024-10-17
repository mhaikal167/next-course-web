import wondersImage from "./wonders";
import Link from "next/link";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <div className="container mx-auto">
      <p className="text-center font-bold text-lg">New Wonder of the world </p>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4">
        {wondersImage.map((image) => (
          <Link key={image.id} href={`/photo-feed/${image.id}`}>
            <Image
              src={image.src}
              alt={image.name}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
