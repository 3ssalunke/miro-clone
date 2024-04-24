import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface BoardPageProps {
  params: {
    boardId: string;
  };
}

const BoardPage = ({ params: { boardId } }: BoardPageProps) => {
  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardPage;
