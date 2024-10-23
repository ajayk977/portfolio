// app/api/contact/route.js
import dbConnect from '@/lib/dbConnect';
import Message from '@/model/contact.model';

export async function POST(req: Request) {
    await dbConnect();

    try {
        const { name, email, message } = await req.json();
        console.log('Received message:', name, email, message);

        // Validate input
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ success: false, message: 'All fields are required.' }), { status: 400 });
        }

        // Create and save new message
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        console.log('New message saved:', newMessage);

        return new Response(JSON.stringify({ success: true, message: 'Message sent!' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'An error occurred while sending your message. Please try again later.' }), { status: 500 });
    }
}
