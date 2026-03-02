import nodemailer from "nodemailer";

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendAppointmentEmail(appointmentData: {
  firstName: string;
  lastName: string;
  email: string;
  specialist: string;
  date: string;
  time: string;
}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "projecthubsolutionz@gmail.com",
      subject: "New Appointment Request - Project Hub",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2F73F2 0%, #46C4FF 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
            <h2 style="margin: 0; font-size: 24px;">New Appointment Request</h2>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #2F73F2; padding-bottom: 10px;">Appointment Details</h3>
              
              <div style="margin-bottom: 12px;">
                <label style="color: #666; font-weight: bold; display: block; margin-bottom: 4px;">Name:</label>
                <p style="color: #333; margin: 0;">${appointmentData.firstName} ${appointmentData.lastName}</p>
              </div>
              
              <div style="margin-bottom: 12px;">
                <label style="color: #666; font-weight: bold; display: block; margin-bottom: 4px;">Email:</label>
                <p style="color: #333; margin: 0;"><a href="mailto:${appointmentData.email}" style="color: #2F73F2; text-decoration: none;">${appointmentData.email}</a></p>
              </div>
              
              <div style="margin-bottom: 12px;">
                <label style="color: #666; font-weight: bold; display: block; margin-bottom: 4px;">Specialist:</label>
                <p style="color: #333; margin: 0;">${appointmentData.specialist}</p>
              </div>
              
              <div style="margin-bottom: 12px;">
                <label style="color: #666; font-weight: bold; display: block; margin-bottom: 4px;">Date:</label>
                <p style="color: #333; margin: 0;">${appointmentData.date}</p>
              </div>
              
              <div style="margin-bottom: 12px;">
                <label style="color: #666; font-weight: bold; display: block; margin-bottom: 4px;">Time:</label>
                <p style="color: #333; margin: 0;">${appointmentData.time}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px; margin: 0;">This is an automated message from Project Hub. Please respond to the client's email to confirm the appointment.</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
