// drinkApi.ts

import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, GetStaticProps } from 'next';
import { prisma } from '@/lib/prisma';
import { DrinkSize, DrinkType, MilkOption } from '@prisma/client';

export type Drink = {
    id: string
    name: string
    drinkType: DrinkType
    drinkSize: DrinkSize
    milkOption: MilkOption
    chocolateSauce: number | null
    whippedCream: boolean
};

export type Props = {
    drinks: Drink[];
};

// export const getDrinks: GetStaticProps = async () => {
//     try {
//         const drinks = await prisma.drink.findMany({});
//         console.log(drinks); // Check the value of drinks
//         return { props:drinks };
//     } catch (error) {
//         console.error('Error fetching drinks:', error);
//         return { drinks: [] }; // Return an empty array or handle the error accordingly
//     }
// };
