// drinkApi.ts

import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { prisma } from '@/lib/prisma';

export type Drink = { 
    id: string;
    name: string;
};

export type Props = {
    drinks: Drink[];
};

export const getDrinks = async (): Promise<Props> => {
    const drinks = await prisma?.drink.findMany({
        select: {
            id: true,
            name: true,
        },
    });
    return { drinks }
}
