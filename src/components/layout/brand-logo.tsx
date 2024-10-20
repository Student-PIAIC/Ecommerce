import Image from "next/image"
export default function Brandlogo(){
    return(
        <div className="flex justify-between ml-44 mr-40 border-b bg-yellow-200">
            <Image src="/adidas.png" 
            alt="adidaslogo"
            width={70}
            height={70} />
            <Image src="/authorised.png" 
            alt="authoriselogo"
            width={70}
            height={70} />
            <Image src="/benetton.png" 
            alt="benettonlogo"
            width={70}
            height={70} />
            <Image src="/boss.png" 
            alt="bosslogo"
            width={70}
            height={70} />
            <Image src="/brioni.png" 
            alt="brionilogo"
            width={70}
            height={70} />
            <Image src="/calvin.png" 
            alt="calvinlogo"
            width={70}
            height={70} />
        </div>
    )
}