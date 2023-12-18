import cookie from 'cookie';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST'){
            // Destroy the cookie
            res.setHeader('Set-Cookie', cookie.serialize('token', '', {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                expires: new Date(0),
                path: '/'
            }));
            res.status(200).json({ status: 'success' });
        }
        else {
            res.setHeader('Allow', ['POST']);
            res.status(405).json({ message: `Method ${req.method} not allowed` });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}