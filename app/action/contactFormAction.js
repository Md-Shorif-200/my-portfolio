"use server";

import nodemailer from "nodemailer";
import { dbCollection, dbConnect } from "@/lib/mongodb";

export const contactFormAction = async (prevState, formData) => {
  const { name, email, subject, message } = Object.fromEntries(
    formData.entries()
  );

  try {
    // 1️⃣ MongoDB তে ডাটা সংরক্ষণ
    const result = await dbConnect(dbCollection.Contacts).insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // 2️⃣ ইমেইল পাঠানো (যেখানে ফর্ম সাবমিট হয়েছে)
    const transporter = nodemailer.createTransport({
      service: "gmail", // চাইলে SMTP ও দিতে পারো
      auth: {
        user: process.env.MAIL_USER, // তোমার ইমেইল
        pass: process.env.MAIL_PASS, // App Password (gmail-এর জন্য)
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.MAIL_USER}>`,
      to: "mdshorifuddin463@gmail.com", // যেই ইমেইলে ফর্ম যাবে
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
