"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import FormInputField from "../FormInputField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  PHONE_INPUT = "phoneInput",
  SELECT = "select",
  TEXTAREA = "textarea",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
        // const userData = { name, email, phone };
        // const user = await createUser(userData);
        // if (user) {
        //     router.push(`user/${user.id}/register`);
        // }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there, 👋</h1>
          <p className="text-dark-700">Schedule your first appointment here.</p>
        </section>
        <FormInputField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Name"
          placeholder="Enter your name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <FormInputField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="john.deo@example.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <FormInputField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone"
          placeholder="+91 9876543210"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
