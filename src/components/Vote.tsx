import Image from "next/image";

const Vote = ({ vote = 99 }: { vote: number }) => {
  return (
    <div className="vote">
      <Image
        src='/assets/shared/icon-arrow-up.svg'
        alt='Button to add your vote'
        width={10}
        height={7}
      />
      <span className="vote__number">{vote}</span>
    </div>
  )
}

export default Vote;