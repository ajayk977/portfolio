import dbConnect from '@/lib/dbConnect';
import Message from '@/model/contact.model';

export async function POST(req: Request) {
    await dbConnect();

    try {
        const { name, email, message } = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ success: false, message: 'All fields are required.' }), { status: 400 });
        }

        // Create and save new message in a single operation
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        return new Response(JSON.stringify({ success: true, message: 'Message sent!' }), { status: 200 });
    } catch (error) {
        console.error('Error:', error); // Log error for debugging
        return new Response(JSON.stringify({ success: false, message: 'An error occurred while sending your message.' }), { status: 500 });
    }
}
