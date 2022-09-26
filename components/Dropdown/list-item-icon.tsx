import Image from "next/image";

interface Props {
    src: string;
    alt: string;
}

// TODO: secondary color
const ListItemIcon = (props: Props) => {
    return <Image 
                src={props.src} 
                alt={props.alt}
                layout="fixed"
                width={20}
                height={20}
                />;
}

export default ListItemIcon;