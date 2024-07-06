import { NextResponse } from "next/server";
import { Resend } from "resend";
import "@/app/components/EmailSection";


const resend = new Resend(process.env.RESEND_API_KEY="re_M7PmPd6M_GLYd7BHEqA41qa9HC33w395h");
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Aenal<onboarding@resend.dev>',
      to: ['aenalpatani1623@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
