'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Copy, 
  Search, 
  ExternalLink, 
  Calendar,
  Clock,
  Link as LinkIcon,
  Loader2
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Link {
  id: string;
  url: string;
  orderNumber: string;
  amount: number;
  creditType: string;
  createdAt: string;
  status: 'active' | 'expired' | 'used';
}

export function LinksList() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [links, setLinks] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/tinkoff/links');
      
      if (!response.ok) {
        throw new Error('Failed to fetch links');
      }

      const data = await response.json();
      setLinks(data.links);
    } catch (err) {
      setError('Не удалось загрузить список ссылок');
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить список ссылок',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: 'Ссылка скопирована',
        description: 'Ссылка успешно скопирована в буфер обмена',
      });
    } catch (err) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось скопировать ссылку',
        variant: 'destructive',
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getStatusColor = (status: Link['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'expired':
        return 'text-gray-600 bg-gray-50';
      case 'used':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredLinks = links.filter(link => 
    link.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Загрузка списка ссылок...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8 text-destructive">
        <div className="flex items-center gap-2">
          <span>{error}</span>
          <Button variant="outline" size="sm" onClick={fetchLinks}>
            Попробовать снова
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по номеру заказа или ссылке..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={fetchLinks}
          className="shrink-0"
          title="Обновить список"
        >
          <Loader2 className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Номер заказа</TableHead>
              <TableHead>Тип кредита</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Дата создания</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLinks.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  {searchTerm ? (
                    <div className="text-muted-foreground">
                      Ничего не найдено
                    </div>
                  ) : (
                    <div className="text-muted-foreground">
                      Список ссылок пуст
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ) : (
              filteredLinks.map((link) => (
                <TableRow key={link.id}>
                  <TableCell className="font-medium">{link.orderNumber}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={link.creditType}>
                    {link.creditType}
                  </TableCell>
                  <TableCell>{link.amount.toLocaleString('ru-RU')} ₽</TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(link.createdAt)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(link.status)}`}>
                      <Clock className="h-3 w-3" />
                      {link.status === 'active' && 'Активна'}
                      {link.status === 'expired' && 'Истекла'}
                      {link.status === 'used' && 'Использована'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(link.url)}
                        title="Копировать ссылку"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(link.url, '_blank')}
                        title="Открыть ссылку"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
