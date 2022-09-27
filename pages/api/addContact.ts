import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    
    try {
        const data = JSON.parse(req.body);
        delete data.id;
        const saved = await prisma.contact.create({data: data});
        res.status(200).json(saved);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
};

export default handler;
