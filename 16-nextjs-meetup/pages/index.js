import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 10, 12345 Some City",
        description: "This is a second meetup!",
    },
];
export default function Home(props) {
    return (
        <>
            {/* <main className={inter.className}></main> */}
            <MeetupList meetups={props.meetsup} />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            meetsup: DUMMY_MEETUPS
        },
        revalidate: 1,
    }
}