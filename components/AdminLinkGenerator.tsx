'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Minus, Package, CreditCard, Calculator, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CreditLinkModal } from '@/components/ui/credit-link-modal';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

const creditProducts = [
  {
    value: '0-0-3',
    label: '0-0-3(4,8%) 3001.00-500000.00',
    description: 'На 3 месяца без первоначального взноса'
  },
  {
    value: '0-0-4',
    label: '0-0-4(6%) 3001.00-500000.00',
    description: 'На 4 месяца без первоначального взноса'
  },
  {
    value: '0-0-6',
    label: '0-0-6(8,2%) 3001.00-500000.00',
    description: 'На 6 месяцев без первоначального взноса'
  },
  {
    value: '0-0-10',
    label: '0-0-10(12,5%) 3001.00-500000.00',
    description: 'На 10 месяцев без первоначального взноса'
  },
  {
    value: '0-0-12',
    label: '0-0-12(14,5%) 3001.00-500000.00',
    description: 'На 12 месяцев без первоначального взноса'
  },
  {
    value: '0-0-18',
    label: '0-0-18(20,2%) 3001.00-500000.00',
    description: 'На 18 месяцев без первоначального взноса'
  },
  {
    value: '0-0-24',
    label: '0-0-24(25,5%) 3001.00-500000.00',
    description: 'На 24 месяца без первоначального взноса'
  },
  {
    value: 'credit-3-24',
    label: 'Кредит 3-24(6) 3000.00-500000.00',
    description: 'Кредит на срок от 3 до 24 месяцев'
  }
];

export function AdminLinkGenerator() {
  const { toast } = useToast();
  const [shopName] = useState('Технолиум');
  const [shopUrl] = useState('https://www.technolium.ru/');
  const [orderNumber, setOrderNumber] = useState('');
  const [items, setItems] = useState<OrderItem[]>([{ name: '', price: 0, quantity: 1 }]);
  const [generatedLink, setGeneratedLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState(creditProducts[0].value);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!items.some(item => item.name && item.price > 0)) {
      setError('Добавьте хотя бы один товар с названием и ценой');
      setIsLoading(false);
      return;
    }

    try {
      const validItems = items.filter(item => item.name && item.price > 0);
      const totalAmount = calculateTotal();

      const response = await fetch('/api/tinkoff/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sum: totalAmount,
          orderNumber: `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          items: validItems.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          creditType: selectedCredit,
          successUrl: `${window.location.origin}/credit/success`,
          failUrl: `${window.location.origin}/credit/fail`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Не удалось создать ссылку');
      }

      if (data.link) {
        setGeneratedLink(data.link);
        setIsModalOpen(true);
        toast({
          title: "Ссылка создана",
          description: "Ссылка успешно сгенерирована",
        });
      }
    } catch (err) {
      console.error('Error generating link:', err);
      const errorMessage = err instanceof Error ? err.message : 'Не удалось создать ссылку';
      setError(errorMessage);
      toast({
        title: "Ошибка",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Магазин */}
      <Card className="relative overflow-hidden">
        <div className="absolute right-2 top-2 text-muted-foreground">
          <Package className="h-4 w-4" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Информация о магазине</h3>
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
        </CardContent>
      </Card>

      {/* Заказ */}
      <Card className="relative overflow-hidden">
        <div className="absolute right-2 top-2 text-muted-foreground">
          <CreditCard className="h-4 w-4" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Информация о заказе</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Номер заказа (опционально)</Label>
              <Input
                placeholder="Например: ORDER-123"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Тип рассрочки</Label>
              <Select value={selectedCredit} onValueChange={setSelectedCredit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {creditProducts.map((product) => (
                    <SelectItem 
                      key={product.value} 
                      value={product.value}
                      className="py-3"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{product.label}</div>
                        <div className="text-sm text-muted-foreground">{product.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Товары */}
      <Card className="relative overflow-hidden">
        <div className="absolute right-2 top-2 text-muted-foreground">
          <Calculator className="h-4 w-4" />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
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
              <Card key={index} className={cn(
                "p-4 transition-colors",
                items.length > 1 && "hover:bg-muted/50"
              )}>
                <CardContent className="grid gap-4 sm:grid-cols-2">
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
                            className="shrink-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Итого */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t">
            <div className="text-lg font-medium">Итого:</div>
            <div className="text-xl font-bold">{calculateTotal().toLocaleString('ru-RU')} ₽</div>
          </div>
        </CardContent>
      </Card>

      {/* Кнопка создания ссылки */}
      <div className="mt-6 space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Ошибка</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Button
          onClick={handleSubmit}
          disabled={isLoading || calculateTotal() === 0}
          className="w-full"
        >
          {isLoading ? "Создание ссылки..." : "Создать ссылку"}
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
