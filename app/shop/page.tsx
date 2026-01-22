'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

export default function shopPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setstate] = useState([{}]);

  const items = [
    {
      id: 'pc-4',
      name: 'External SSD1',
      description: '1TB portable external SSD.',
      price: 34999,
      imageUrl: 'https://picsum.photos/id/64/400/400',
      rating: 4.7,
      reviewCount: 105,
      inStock: true,
      category: 'Computers',
    },
    {
      id: 'pc-3',
      name: 'External SSD2',
      description: '1TB portable external SSD.',
      price: 34999,
      imageUrl: 'https://picsum.photos/id/64/400/400',
      rating: 4.7,
      reviewCount: 105,
      inStock: true,
      category: 'Computers',
    },
    {
      id: 'pc-2',
      name: 'External SSD3',
      description: '1TB portable external SSD.',
      price: 34999,
      imageUrl: 'https://picsum.photos/id/64/400/400',
      rating: 4.7,
      reviewCount: 105,
      inStock: true,
      category: 'Computers',
    },
  ];

  return (
    <div>
      {items.map((e) => (
        <Card className="w-full max-w-sm" key={e.id}>
          <CardHeader>
            <CardTitle>{e.name}</CardTitle>
            <CardDescription>{e.description}</CardDescription>
            {/* <CardAction>
              <Button variant="link">add</Button>
            </CardAction> */}
          </CardHeader>
          <CardContent>
            {/* <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form> */}
            <div className="relative w-32 h-32">
              {' '}
              {/* 128px x 128px */}
              <Image
                src={e.imageUrl}
                alt={e.name}
                fill
                className="object-cover rounded"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                setstate((p) => ({ ...p, e }));
                console.log(state);
              }}
            >
              Add to cart
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
