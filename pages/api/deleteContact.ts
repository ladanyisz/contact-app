import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const id = JSON.parse(req.body);
        const editedContact = await prisma.contact.delete({
            where: { id: id }
        });
        res.status(200).json(editedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default handler;
