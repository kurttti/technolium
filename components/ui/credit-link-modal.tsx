'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Copy, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CreditLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  link: string;
}

export function CreditLinkModal({ isOpen, onClose, link }: CreditLinkModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast({
        title: "Успешно скопировано",
        description: "Ссылка скопирована в буфер обмена",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Ошибка",
        description: "Не удалось скопировать ссылку",
        variant: "destructive",
      });
    }
  };

  const shareLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Ссылка на кредит',
          text: 'Ссылка для оформления кредита',
          url: link,
        });
        toast({
          title: "Успешно",
          description: "Ссылка отправлена",
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (err) {
      toast({
        title: "Ошибка",
        description: "Не удалось поделиться ссылкой",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ссылка создана</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label>Ссылка для клиента</Label>
            <div className="flex gap-2">
              <Input
                value={link}
                readOnly
                className="font-mono text-sm"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={shareLink}
                className="shrink-0"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Закрыть
            </Button>
            <Button
              onClick={copyToClipboard}
              className="gap-2"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Скопировано' : 'Копировать'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
