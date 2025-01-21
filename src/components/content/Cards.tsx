import {LuCode, LuImage, LuSearch, LuTextSelect} from "react-icons/lu";
import {IconType} from "react-icons";
import {motion} from 'motion/react'

interface CardData {
    title: string;
    icon: IconType;
}

const cardsData: CardData[] = [
    {title: 'Summarize Text', icon: LuTextSelect},
    {title: 'Generate Code', icon: LuCode},
    {title: 'Research', icon: LuSearch},
    {title: 'Generate Image', icon: LuImage},
]

const Cards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-10">
            {cardsData.map(card => (
                <Card key={card.title} card={card}/>
            ))}
        </div>

    );
};

const Card = ({card}: { card: CardData }) => {
    return (
        <motion.div
            initial={{scale: 1}}
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
            className="bg-gray-100 rounded-md shadow-md h-[100px] p-2 relative cursor-pointer">

            <h3 className="text-lg font-semibold">{card.title}</h3>
            <div className="absolute bottom-2 right-2">
                {card.icon && <card.icon/>}
            </div>
        </motion.div>
    )

}
export default Cards;