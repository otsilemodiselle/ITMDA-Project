import moment from "moment"




export const getDateFromFireStoreTimeStampObject = (dateStoreDateObject) => {
    const date = new Date(dateStoreDateObject.seconds *1000)

    return moment(date).format("MMMM Do, hh:mm A")
}