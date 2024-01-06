"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingType, pricingSchema } from "@/lib/validation";
import {
  Form,
} from "../ui/form";
import { createPricingQuotation } from "@/lib/actions/pricing.action";
import Spinner from "./Spinner";
import { Countries, CountryProps } from "@/type/type";
import InputField from "./InputField";
import Toast from "../shared/Toast";

const PricingCard = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<PricingType>({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      name: "",
      healthCenter: "",
      contact: "",
      email: "",
      city: "",
      country: "",
    },
  });

  const submitForm = async (data: PricingType) => {
    setSubmitting(true);

    try {
      await createPricingQuotation(data);
      toast.success("Request successful");

      form.reset();
      setSubmitting(false);
    } catch (error) {
      toast.error("Request unsuccessful");

      setSubmitting(false);
      throw error;
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="w-full md:w-[350px] my-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quotation form</CardTitle>
              <CardDescription className="text-muted-foreground">
                Request quotation.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid w-full items-center gap-4">
                <InputField
                  name="name"
                  type="text"
                  control={form.control}
                  label="Name"
                  placeholder="full name"
                />

                <InputField
                  name="healthCenter"
                  type="text"
                  control={form.control}
                  label="Health Center Name"
                  placeholder="Enter health center name"
                />

                <InputField
                  name="contact"
                  type="text"
                  control={form.control}
                  label="Contact"
                  placeholder="phone number"
                />

                <InputField
                  name="email"
                  type="text"
                  control={form.control}
                  label="Email"
                  placeholder="email address"
                />

                <InputField
                  name="country"
                  type="text"
                  control={form.control}
                  label="Country"
                  placeholder="Country"
                />

                <InputField
                  name="city"
                  type="text"
                  control={form.control}
                  label="City"
                  placeholder="City"
                />

                {/* Place select with Input to avoid the api subscription */}
                {/* <FormField
                  name="country"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="country">Country</Label>

                          <Select onValueChange={field.onChange}>
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              {countries.map((country: CountryProps) => (
                              <SelectItem key={country.id} value={country.country}>
                                {country?.country}
                              </SelectItem>
                            ))}
                              
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  name="city"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="city">City</Label>

                          <Select onValueChange={field.onChange}>
                            <SelectTrigger id="city">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="Lagos">Lagos</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                /> */}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-APP_BTN_BLUE text-white"
              >
                Request {submitting && <Spinner />}
              </Button>
              <Button
                disabled={submitting}
                type="reset"
                onClick={() => form.reset()}
                variant="ghost"
              >
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <Toast position="top-right" theme="colored" duration={5000} />
    </>
  );
};

export default PricingCard;
