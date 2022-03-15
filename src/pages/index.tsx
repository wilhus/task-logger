// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { TaskCard } from '../components/TaskCard'
import { Nav } from '../components/Nav'
import { NewTask } from '../containers/NewTask'
import useSWR from 'swr'

export default function Home() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())

	const { data } = useSWR('/api/task/1', fetcher)

	return (
		<div>
			<Nav />
			<h1>To Do:</h1>
			<NewTask />
			<TaskCard task={data} />
			<TaskCard task={data} />
		</div>
	)
}
