"use server";

import { dbCollection, dbConnect } from "@/lib/mongodb";

export const contactFormAction = async (prevState, formData) => {
  const { name, email, subject, message } = Object.fromEntries(
    formData.entries()
  );


  try {


     const result = await  dbConnect(dbCollection.Contacts).insertOne({name,email,subject,message})
     return result
  } catch (error) {
     console.log(error);
     return null
     
  }



};
