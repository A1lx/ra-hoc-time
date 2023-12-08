import { IProps } from "./DateTime";
import { Video } from "./Video";

interface IVideoListProps {
  list: IProps[]
}

export const VideoList = ({list}: IVideoListProps) => {
  return list.map(item => <Video url={item.url} date={item.date}/>);
}