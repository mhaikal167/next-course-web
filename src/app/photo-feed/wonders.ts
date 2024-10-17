import { StaticImageData } from "next/image";
import Fuji from "@/app/photo-feed/photos/fuji.jpg"
import Ambon from "@/app/photo-feed/photos/ambon.jpg"
import Bali from "@/app/photo-feed/photos/bali.jpg"
import Sogen from "@/app/photo-feed/photos/sogen.jpg"
import Sunset from "@/app/photo-feed/photos/sunset.jpg"


export type WondersTypeData = {
    id: string;
    name:string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wondersImage: WondersTypeData[] = [
    {
        id:"1",
        name:"Fuji",
        src: Fuji,
        photographer:"James",
        location: "Japan"
    },
    {
        id:"2",
        name:"Pantai Ceria",
        src: Ambon,
        photographer:"Ujang",
        location: "Ambon"
    },
    {
        id:"3",
        name:"Bali",
        src: Bali,
        photographer:"Yulia",
        location: "Bali"
    },
    {
        id:"4",
        name:"Sunset on bandung",
        src: Sunset,
        photographer:"Haikal",
        location: "Bandung Dago"
    },
    {
        id:"5",
        name:"Sogen",
        src: Sogen,
        photographer:"Mega",
        location: "Australia"
    },
]

export default wondersImage