import { FC } from "react"

type StickerProps = {
  text: string
}

const Sticker: FC<StickerProps> = ({ text }) => {
  return (
    <div className='
    w-fit absolute left-0 right-0 bottom-0 -mb-4 m-auto
    md:top-0 md:left-auto md:-mr-4 md:-mt-4
    '>
      <div className='
      border border-rose-400 bg-pink-200 py-1 px-4 text-sm text-fuchsia-800 font-bold uppercase -rotate-[6deg]
      md:rotate-[6deg]
      '>
        {text}
      </div>
    </div>

  )
}

export default Sticker
