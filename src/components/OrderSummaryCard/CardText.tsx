import { FC } from "react";
import Button from './Button';
import Sticker from './Sticker';

type CardTextProps = {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}

const CardText: FC<CardTextProps> = ({ title, message, totalPrice, freeGift }) => {
  const hasFreeGift = freeGift
  const freeGiftText = "Free gift"
  const detailsCTA = "See details"
  const editCTA = "Edit delivery"


  return (
    <section className='px-2 pt-8 pb-4 md:px-6 md:w-fit'>
      <div className='md:w-4/5'>
        <h3 className='text-green-700 font-bold pb-1 md:text-left'>{title}</h3>
        <p className='text-xs text-gray-500 pb-3 md:text-left'>{message}</p>
        <h6 className='text-sm text-gray-500 font-bold md:text-left'>Total price: £{totalPrice.toFixed(2)}</h6>
      </div>
      <div className='flex justify-evenly text-xs mt-6 space-x-2 md:w-full md:space-x-6 md:justify-start'>
        <Button text={detailsCTA} variant='primary' />
        <Button text={editCTA} variant='secondary' />
      </div>
      {hasFreeGift && <Sticker text={freeGiftText} />}
    </section>
  )
};

export default CardText;
