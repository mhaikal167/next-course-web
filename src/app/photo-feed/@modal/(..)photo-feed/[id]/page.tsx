import wondersImage, { WondersTypeData } from "@/app/photo-feed/wonders";
import Modal from "@/components/Modal/modal";
import Image from "next/image";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WondersTypeData = wondersImage.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4 px-2">
        <h2 className=" font-bold text-lg">{photo.name}</h2>
        <h3>Got Picture by : {photo.photographer}</h3>
        <h3>Location : {photo.location}</h3>
      </div>
    </Modal>
  );
}
