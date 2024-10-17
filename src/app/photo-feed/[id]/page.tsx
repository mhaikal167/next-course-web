import Image from "next/image";
import wondersImage, { WondersTypeData } from "../wonders";

export default function PhotoFeedDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WondersTypeData = wondersImage.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto">
      <div className="w-1/2 mx-auto">
        <h2 className="text-center font-bold text-lg">{photo.name}</h2>
        <Image
          src={photo.src}
          alt={photo.name}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white py-4">
          <h3>Got Picture by : {photo.photographer}</h3>
          <h3>Location : {photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
