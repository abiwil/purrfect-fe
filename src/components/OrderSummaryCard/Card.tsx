import { FC, useEffect, useState } from 'react';
import cat from './../../assets/kitty.jpg'
import CardText from "./CardText"
import { useParams } from 'react-router';

type getCommsResponse = {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}


const Card: FC = () => {

  const { userId } = useParams()
  // Test user ids
  // '0fe5eb58-a60a-4bc8-a32f-9127a1ac7df4' // 1 cat
  // 'ff535484-6880-4653-b06e-89983ecf4ed5' // 2 cats
  // 'ea17433d-7527-45a5-acbc-2e2f78f95c6e' // 3 cats

  const [data, setData] = useState<getCommsResponse>({
    title: '',
    message: '',
    totalPrice: 0,
    freeGift: false
  })
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(`http://localhost:3000/comms/your-next-delivery/${userId}`)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = (await response.json()) as getCommsResponse

      setData(data)
    } catch (error) {
      if (error instanceof Error) {
        // Assuming the only error for now would be user not found
        setError(`Oops! We couldn't find a user with that ID ${userId}`,)
      }
      } finally {
        setLoading(false)
      }
    };
    void fetchData();
  }, []);

  const { title, message, totalPrice, freeGift } = data

  return (
    <>
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
      <div className="flex relative flex-col min-w-80 max-w-md md:max-w-4xl bg-gray-100 border border-slate-300 rounded pt-6 p-4 md:flex-row md:p-0">
        <div className='
            w-24 h-24 absolute left-0 right-0 top-0 -mt-12 m-auto
            md:relative md:m-0 md:overflow-hidden md:block md:flex-shrink-0 md:w-1/3 md:h-auto
            '>
          <img src={cat} className='h-full w-full object-cover rounded-full md:rounded'></img>
        </div>
        <CardText
        title={title}
        message={message}
        totalPrice={totalPrice}
        freeGift={freeGift} />
      </div>
      }
    </>
  )
}

export default Card
