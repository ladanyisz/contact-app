import Image from "next/image";
import { ProfilePicSize } from "../../models/ProfilePicSize";

import styles from './profile-pic.module.css';

interface Props {
    size: ProfilePicSize;
    src: string;
}

const ProfilePic = (props: Props) => {

    const size = props.size === ProfilePicSize.Big ? 88 : 40;

    return <Image className={styles.image} 
        src={props.src} 
        alt="profile picture" 
        height={size} 
        width={size} />

}

export default ProfilePic;