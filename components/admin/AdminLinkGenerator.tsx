'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function AdminLinkGenerator() {
  // Получаем функцию toast из хука useToast
  const { toast } = useToast();

  // Состояния для работы с полями формы
  const [orderNumber, setOrderNumber] = useState("");
  const [term, setTerm] = useState("12"); // По умолчанию 12 месяцев
  const [sum, setSum] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Функция генерации номера заказа
  const generateOrderNumber = () => {
    return `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  // Инициализация номера заказа при монтировании компонента
  useEffect(() => {
    setOrderNumber(generateOrderNumber());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Проверка корректности суммы
    const totalAmount = parseFloat(sum);
    if (isNaN(totalAmount) || totalAmount <= 0) {
      setError("Введите корректную сумму");
      setIsLoading(false);
      return;
    }

    // Формирование строки creditType с выбранным сроком, остальные параметры фиксированы
    const creditType = `installment_0_0_${term}_14.5_22`;

    try {
      const response = await fetch("/api/tinkoff/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sum: totalAmount,
          orderNumber,
          // Название продукта всегда "Курс Python", количество – 1
          items: [
            {
              name: "Курс Python",
              price: totalAmount,
              quantity: 1,
            },
          ],
          creditType,
          successUrl: `${window.location.origin}/credit/success`,
          failUrl: `${window.location.origin}/credit/fail`,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Не удалось создать ссылку");
      }

      if (data.link) {
        setGeneratedLink(data.link);
        toast({
          title: "Ссылка создана",
          description: "Ссылка успешно сгенерирована",
        });
      }
    } catch (err) {
      console.error("Ошибка при создании ссылки:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Не удалось создать ссылку";
      setError(errorMessage);
      toast({
        title: "Ошибка",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      // Для следующей генерации обновляем номер заказа
      setOrderNumber(generateOrderNumber());
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Генерация ссылки</CardTitle>
        <CardDescription>
          Создание ссылки для оформления кредита или рассрочки
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Номер заказа:</label>
            <p className="mt-1 text-sm text-gray-700">{orderNumber}</p>
          </div>
          <div>
            <label className="block font-medium">Название продукта:</label>
            <p className="mt-1 text-sm text-gray-700">Курс Python</p>
          </div>
          <div>
            <label className="block font-medium">Срок:</label>
            <select
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="12">12 месяцев</option>
              <option value="18">18 месяцев</option>
              <option value="24">24 месяца</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Сумма:</label>
            <Input
              type="number"
              value={sum}
              onChange={(e) => setSum(e.target.value)}
              placeholder="Введите сумму"
              className="mt-1"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Создание ссылки..." : "Создать ссылку"}
          </Button>
        </form>
        {generatedLink && (
          <div className="mt-4">
            <h3 className="font-medium">Ссылка для клиента:</h3>
            <p className="text-blue-600">{generatedLink}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
