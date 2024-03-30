import { motion } from 'framer-motion';
import AcceptFriendCard from "../UiComponents/AcceptFriendCard";


export default function AcceptSection({ className = "" }) {
  return (
    <div className={`border-r-2 border-background1 pt-5 sm:pl-5 pl-2 ${className}`}>
      <h1 className="text-2xl font-bold mb-10">Accept Friends</h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[calc(100%-0px)] space-y-3 overflow-auto sm:pr-5 pr-2">
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
        <AcceptFriendCard Img="https://picsum.photos/200/300" Title="SomeName" />
      </motion.div>
    </div>
  )
}