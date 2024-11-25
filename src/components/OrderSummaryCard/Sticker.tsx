import { FC } from "react"

type StickerProps = {
  text: string
}

const Sticker: FC<StickerProps> = ({ text }) => {
  return (
    <div className='
    w-fit absolute left-0 right-0 bottom-0 -mb-4 m-auto py-1 px-4 border border-rose-400 bg-pink-200 text-sm text-fuchsia-800 font-bold uppercase -rotate-[6deg]
    md:top-0 md:bottom-auto md:-mr-4 md:-mt-4 md:rotate-[6deg]
    '>
      {text}
    </div>
  )
}

export default Sticker
