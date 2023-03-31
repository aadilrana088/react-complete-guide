import NewMeetupForm from "@/components/meetups/NewMeetupForm"

const addMeetuphandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
}
function NewMeetupPage() {
    return <NewMeetupForm onAddMeetup={addMeetuphandler} />
}

export default NewMeetupPage