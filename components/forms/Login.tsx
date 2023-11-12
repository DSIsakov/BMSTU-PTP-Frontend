"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/constants";
import { signIn } from "@/lib/actions/actions";
import { UserSignInProps } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const axios = require('axios');
  const FormData = require('form-data');
  const fs = require('fs');
  let data = new FormData();
  data.append('logo', fs.createReadStream('/Users/dias/Downloads/IMG_A398603688C1-1.jpeg'));


  async function onSubmit(values: UserSignInProps) {
    try {
      const response = await axios.post(`${baseURL}/auth/login/`, values);
      const token = response.data.token;
      signIn(token, values.username);
      console.log(response.data);
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.statusText === "Unauthorized") {
          setError("Неверное имя пользователя или пароль!");
        } else {
          setError("Произошла ошибка при входе. Пожалуйста, попробуйте позже.");
        }
      }
      console.log(error);
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
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-green-500 hover:bg-green-600">
          Войти
        </Button>
        <Link
          href="/sign-up"
          className="text-base-semibold text-light-1 text-center"
        >
          <p>Ещё нет аккаунта? Зарегистрироваться</p>
        </Link>
      </form>
    </Form>
  );
}
