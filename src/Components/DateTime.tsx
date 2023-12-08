export interface IProps {
  url?: string;
  date: string;
}

export const DateTime = ({date}: IProps) => {
  return (
    <p className="date">{date}</p>
  )
}