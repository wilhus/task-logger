import { Grid, Stack, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TaskCard } from '../components/TaskCard'
import { Nav } from '../components/Nav'
import { NewTask } from '../components/NewTask'
import { TaskModel } from '../models/task'
import useSWR from 'swr'

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

const lightTheme = createTheme({
	palette: {
		mode: 'light'
	}
})

export default function Home() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	const { data } = useSWR('/api/tasks', fetcher)

	return (
		<ThemeProvider theme={darkTheme}>
			<div
				style={{
					backgroundColor: '#001219',
					color: '#f0efef',
					padding: '10px',
					minHeight: '10vh',
					borderBottom: '1px solid #f0efef'
				}}
			>
				<Nav />
			</div>
			<ThemeProvider theme={lightTheme}>
				<Stack
					direction='column'
					justifyContent='flex-start'
					alignItems='center'
					spacing={1}
					style={{
						backgroundColor: '#005f73',
						minHeight: '85vh'
					}}
				>
					<Stack
						direction='row'
						alignItems='center'
						spacing={100}
						style={{ paddingTop: '10px' }}
					>
						<Typography
							variant='h4'
							color='#ffffff'

						>
							To Do:
						</Typography>
						<NewTask />
					</Stack>
					<Grid
						container
						item
						xs={10}
						spacing={1}
						rowSpacing={2}
						style={{
							paddingBottom: '10px'
						}}
					>
						{data?.map((task: TaskModel) =>
							<Grid
								item
								xs={4}
								key={task.id}
							>
								<TaskCard task={task} />
							</Grid>
						)}
					</Grid>
				</Stack>
			</ThemeProvider>
			<div
				style={{
					backgroundColor: '#001219',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '5vh'
				}}
			>
				<Typography
					variant='body2'
					color='#f0efef'
				>
					Made by wilhus @ <a href='https://github.com/wilhus' target='_blank' color='#f0efef'>GitHub</a>
				</Typography>
			</div>
		</ThemeProvider>
	)
}