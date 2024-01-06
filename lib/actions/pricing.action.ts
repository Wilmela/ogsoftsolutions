"use server";

import { pricingSchema, PricingType } from "@/lib/validation";
import Pricing from "@/lib/database/model/Pricing.model";
import { revalidatePath } from "next/cache";
import connectDb from "@/lib/database";
import sendEmail from "../mail";

export const createPricingQuotation = async (data: PricingType) => {
  const validate = pricingSchema.safeParse(data);

  if (!validate.success) return new Error(`${validate.error?.errors}`);

  try {
    await connectDb();
    // const takenEmail = await Pricing.findOne({ email: data.email });
    // if (takenEmail) {
    //   return new Error("Email already exist");
    // }
    // const takenContact = await Pricing.findOne({ email: data.contact });

    sendEmail({
      from: data.email,
      subject: `Quotation Request from ${data.healthCenter}.`,
      text: `My name is ${data.name}, I need a quotation for ${data.city}, ${data.country}. Email: ${data.email} and Contact address: ${data.city}`,
    });

    // if (takenContact) {
    //   return new Error("Contact already exist");
    // }
    await Pricing.create(validate.data);
    revalidatePath("/pricing");
  } catch (error) {
    throw error;
  }
};
