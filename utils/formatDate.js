import Moment from "react-moment";

const formatDate = (date, format) => <Moment format={format}>{date}</Moment>;
export default formatDate;
// YYYY  à  HH:mm
