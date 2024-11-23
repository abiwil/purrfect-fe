import { FC } from "react"
import cat from './../../assets/kitty.jpg'
import Button from './Button';
import Sticker from './Sticker';

type CardProps = {
  heading: string;
  body: string;
  price: number;
}

const Card: FC<CardProps> = ({ heading, body, price }) => {
  const freeGiftText = "Free gift"
  const detailsCTA = "See details"
  const editCTA = "Edit delivery"

  const hasFreeGift = price > 100

  return (
    <div className="flex relative flex-col min-w-80 max-w-md md:max-w-4xl bg-gray-100 border border-slate-300 rounded pt-6 p-4 md:flex-row md:p-0">
        <div className='
           w-24 h-24 absolute left-0 right-0 top-0 -mt-12 m-auto
           md:relative md:m-0 md:overflow-hidden md:block md:flex-shrink-0 md:w-1/3 md:h-auto
           '>
          <img src={cat} className='h-full w-full object-cover rounded-full md:rounded'></img>
        </div>
        <div className='flex-col px-2 pt-8 pb-4 justify-between md:justify-items-start md:m-auto md:px-6 md:w-fit'>
          <div className='md:justify-items-start md:w-4/5'>
            <h3 className='text-base text-green-700 font-bold pb-1'>{heading}</h3>
            <p className='text-xs text-gray-500 pb-3 md:text-left'>{body}</p>
            <h6 className='text-sm text-gray-500 font-bold'>Total price: £{price.toFixed(2)}</h6>
          </div>
          <div className='flex justify-evenly text-xs mt-6 space-x-2 md:w-full md:space-x-6 md:justify-start'>
            <Button text={detailsCTA} variant='primary' />
            <Button text={editCTA} variant='secondary' />
          </div>
          {hasFreeGift && <Sticker text={freeGiftText} />}
        </div>
      </div>)

        }

export default Card
