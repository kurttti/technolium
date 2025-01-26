'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { CreditLinkModal } from '@/components/ui/credit-link-modal';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Plus, Minus } from 'lucide-react';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export default function AdminLinkGenerator() {
  const [shopName] = useState('Технолиум');
  const [shopUrl] = useState('https://www.technolium.ru/');
  const [orderNumber, setOrderNumber] = useState('');
  const [items, setItems] = useState<OrderItem[]>([{ name: '', price: 0, quantity: 1 }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddItem = () => {
    setItems([...items, { name: '', price: 0, quantity: 1 }]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const handleItemChange = (index: number, field: keyof OrderItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: field === 'price' || field === 'quantity' ? Number(value) : value,
    };
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/tinkoff/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderNumber,
          items,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedLink(data.link);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error generating link:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
          {/* Магазин */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Информация о магазине</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Название магазина</Label>
                <Input value={shopName} disabled />
              </div>
              <div className="space-y-2">
                <Label>URL магазина</Label>
                <Input value={shopUrl} disabled />
              </div>
            </div>
          </div>

          {/* Заказ */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Информация о заказе</h3>
            <div className="space-y-2">
              <Label>Номер заказа (опционально)</Label>
              <Input
                placeholder="Например: ORDER-123"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Товары */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Товары</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddItem}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                <span>Добавить товар</span>
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Название товара</Label>
                      <Input
                        placeholder="Например: Курс Python"
                        value={item.name}
                        onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Цена</Label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={item.price || ''}
                          onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Количество</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                          />
                          {items.length > 1 && (
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Итого */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-lg font-medium">Итого:</div>
            <div className="text-xl font-bold">{calculateTotal().toLocaleString('ru-RU')} ₽</div>
          </div>
        </div>
      </Card>

      {/* Кнопка создания ссылки */}
      <div className="flex justify-end">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={isLoading || items.some(item => !item.name || item.price <= 0)}
        >
          {isLoading ? 'Создание ссылки...' : 'Создать ссылку'}
        </Button>
      </div>

      <CreditLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        link={generatedLink}
      />
    </div>
  );
}
