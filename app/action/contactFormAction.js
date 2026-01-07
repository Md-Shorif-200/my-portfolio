"use server";

import nodemailer from "nodemailer";
import { dbCollection, dbConnect } from "@/lib/mongodb";

export const contactFormAction = async (prevState, formData) => {
  const { name, email, phone, message } = Object.fromEntries(
    formData.entries()
  );

  try {
    // 1️⃣ Save to MongoDB
    const result = await dbConnect(dbCollection.Contacts).insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    // 2️⃣ Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.MAIL_USER}>`,
      to: "mdshorifuddin463@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
