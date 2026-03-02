import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, specialist, date, time } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !specialist || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "projecthubsolutionz@gmail.com",
      subject: "New Appointment Request - Project Hub",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2F73F2 0%, #46C4FF 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
            <h2 style="margin: 0; font-size: 24px;">📋 New Appointment Request</h2>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #2F73F2; margin-bottom: 15px; border-bottom: 3px solid #46C4FF; padding-bottom: 10px; font-size: 18px;">Appointment Details</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold; width: 30%;">Client Name:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold;">Email:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333;">
                    <a href="mailto:${email}" style="color: #2F73F2; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold;">Specialist:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333;">${specialist}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold;">Appointment Date:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; color: #666; font-weight: bold;">Appointment Time:</td>
                  <td style="padding: 12px; color: #333;">${time}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-left: 4px solid #2F73F2; border-radius: 4px;">
              <p style="color: #1565c0; margin: 0; font-size: 14px;">
                <strong>Action Required:</strong> Please review this appointment request and contact the client to confirm.
              </p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                This is an automated message from Project Hub. Sent at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Appointment scheduled successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to schedule appointment" },
      { status: 500 }
    );
  }
}
