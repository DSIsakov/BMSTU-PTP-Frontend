"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/constants";
import { UserValidation } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function Registration() {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      group: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof UserValidation>) {
    try {
      const response = await axios.post(`${baseURL}/users/create/`, values);
      console.log(response.data);
      router.push("/sign-in");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error?.response?.data.username[0] ===
          "A user with that username already exists."
        ) {
          setError("Такое имя пользователя уже занято!");
        } else {
          setError(
            "Произошла ошибка при регистрации. Пожалуйста, попробуйте позже."
          );
        }
      }
    }
  }

  return (
    <Form {...form}>
      {error && (
        <Alert variant="destructive" className="mb-2 text-center">
          <AlertTitle>Ошибка!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-5"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormControl>
                <Input
                  type="text"
                  className="input no-focus"
                  placeholder="Никнейм"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-[13px]" />
            </FormItem>
          )}
        />
        <div className="flex flex-row max-sm:flex-col gap-2 max-sm:gap-5">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormControl>
                  <Input
                    type="text"
                    className="input no-focus"
                    placeholder="Имя"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1 text-[13px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormControl>
                  <Input
                    type="text"
                    className="input no-focus"
                    placeholder="Фамилия"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1 text-[13px]" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="group"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormControl>
                <Input
                  type="text"
                  className="input no-focus"
                  placeholder="Группа"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-[13px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormControl>
                <Input
                  type="text"
                  className="input no-focus"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-[13px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormControl>
                <Input
                  type="password"
                  className="input no-focus"
                  placeholder="Пароль"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-[13px]" />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-green-500 hover:bg-green-600">
          Зарегистрироваться
        </Button>
        <Link
          href="/sign-in"
          className="text-base-semibold text-light-1 text-center"
        >
          <p>Уже есть аккаунт? Войти</p>
        </Link>
      </form>
    </Form>
  );
}
