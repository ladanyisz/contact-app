export interface IContact {
    id: string;
    name: string;
    image: string;
    phoneNum: string;
    email: string;
}

export const defaultProfilePicture = '/images/Default.png';
export const emptyContact = {
    id: null,
    name: '',
    image: defaultProfilePicture,
    phoneNum: '',
    email: '',
};
