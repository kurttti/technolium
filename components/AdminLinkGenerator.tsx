'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useToast } from './ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from 'next/image';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface Company {
  name: string;
  details: string;
}

export default function AdminLinkGenerator() {
  const { toast } = useToast();
  const [shopName, setShopName] = useState('Технолиум');
  const [shopUrl, setShopUrl] = useState('https://www.technolium.ru/');
  const [companyDetails, setCompanyDetails] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [creditType, setCreditType] = useState('0-0-3(4,8%) 30001.00-50000.00');
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({ name: '', price: 0, quantity: 1 });
  const [isLoading, setIsLoading] = useState(false);

  // Пример списка компаний
  const companies: Company[] = [
    { name: 'ИП БАЛОЯН АРСЕНИЙ РОБЕРТОВИЧ', details: 'АО «ТБанк» р/с 40802810100007449224' },
    // Добавьте другие компании по необходимости
  ];

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: '', price: 0, quantity: 1 });
      setIsAddProductOpen(false);
      
      toast({
        title: "Товар добавлен",
        description: `${newProduct.name} добавлен в заказ`,
      });
    }
  };

  const removeProduct = (index: number) => {
    const removedProduct = products[index];
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    
    toast({
      title: "Товар удален",
      description: `${removedProduct.name} удален из заказа`,
      variant: "destructive",
    });
  };

  const getTotalSum = () => {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };

  const handleCompanySelect = (company: Company) => {
    setCompanyDetails(company.name);
  };

  const generateLink = async () => {
    try {
      setIsLoading(true);
      
      // Формируем данные для API Тинькофф
      const requestData = {
        additionalItems: [],
        integrationType: "online_cabinet",
        items: [
          {
            id: orderNumber,
            name: products[0]?.name || "Заказ",
            price: products[0]?.price || 0,
            quantity: products[0]?.quantity || 1
          }
        ],
        orderNumber: orderNumber,
        promoCode: `installment_0_0_3_4.8_24`,
        shopCode: "LK-SB8NN4",
        sum: getTotalSum()
      };

      // Отправляем запрос через наш прокси-endpoint
      const response = await fetch('/api/tinkoff/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      
      if (data.success) {
        // Копируем ссылку в буфер обмена
        await navigator.clipboard.writeText(data.link);
        
        toast({
          title: "Заявка создана",
          description: "Отправьте клиенту ссылку для дальнейшего заполнения заявки на кредит или рассрочку",
          variant: "success",
        });
        
        // Очищаем форму
        setOrderNumber('');
        setProducts([]);
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось создать заявку",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при создании заявки",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-xl font-medium">T БАНК</div>
      </div>

      <div className="mb-4">
        <button className="text-blue-600 hover:text-blue-700">
          ← К списку заявок
        </button>
      </div>

      <h1 className="text-2xl font-medium mb-8">Заявка на кредит или рассрочку</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-2">
            Интернет-магазин*
          </label>
          <Input
            type="text"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className="bg-[#F8F9FA]"
          />
          <div className="mt-2 text-sm text-gray-500">
            {shopUrl}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Реквизиты компании*
          </label>
          <Select onValueChange={(value) => {
            const company = companies.find(c => c.name === value);
            if (company) handleCompanySelect(company);
          }}>
            <SelectTrigger className="bg-[#F8F9FA]">
              <SelectValue placeholder="Выберите компанию" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company.name} value={company.name}>
                  {company.name}
                  <div className="text-sm text-gray-500">{company.details}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Номер заказа
          </label>
          <Input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="bg-[#F8F9FA]"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            Тип рассрочки
          </label>
          <Select onValueChange={setCreditType} value={creditType}>
            <SelectTrigger className="bg-[#F8F9FA]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-0-3(4,8%) 30001.00-50000.00">
                0-0-3(4,8%) 30001.00-50000.00
              </SelectItem>
              {/* Добавьте другие варианты рассрочки */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Заказ</h2>
            {products.length > 0 && (
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                Удалить
              </button>
            )}
          </div>
          
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between mb-2 p-3 bg-[#F8F9FA] rounded">
              <span className="text-sm">{product.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm">x {product.quantity}</span>
                <span className="text-sm">{product.price} ₽</span>
                <button
                  onClick={() => removeProduct(index)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <div className="flex justify-between mb-4">
              <span className="text-sm">Сумма товаров</span>
              <span className="text-sm">{getTotalSum()} ₽</span>
            </div>
            
            <button
              onClick={() => setIsAddProductOpen(true)}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              Добавить товар
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Создать шаблон
          </button>
          <Button
            onClick={generateLink}
            disabled={!shopName || !companyDetails || products.length === 0 || isLoading}
            className="bg-[#FFD600] hover:bg-[#FFE44D] text-black"
          >
            {isLoading ? 'Создание...' : 'Создать заявку'}
          </Button>
        </div>
      </div>

      <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Информация о товаре</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <label className="block text-sm mb-2">
                Наименование товара*
              </label>
              <Input
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                maxLength={255}
                className="bg-[#F8F9FA]"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {newProduct.name.length}/255
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">
                  Цена, ₽*
                </label>
                <Input
                  type="number"
                  value={newProduct.price || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  className="bg-[#F8F9FA]"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">
                  Количество*
                </label>
                <Input
                  type="number"
                  value={newProduct.quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, quantity: Number(e.target.value) })}
                  min={1}
                  className="bg-[#F8F9FA]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsAddProductOpen(false)}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Отмена
              </button>
              <Button
                onClick={handleAddProduct}
                className="bg-[#FFD600] hover:bg-[#FFE44D] text-black"
              >
                Добавить
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
