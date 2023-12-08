import { IProps } from "./DateTime";
import { DateTime } from "./DateTime";
import { DateTimePretty } from "./DateTimePretty";

export const Video = ({url, date}: IProps) => {
  const Pretty = DateTimePretty(DateTime, 'date', date);

  return (
    <div className="video">
      <iframe src={url} /*frameborder="0"*/ allow="autoplay; encrypted-media" /*allowfullscreen*/></iframe>
      <Pretty/>
    </div>
  )
}