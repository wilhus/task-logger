import { Grid, Stack, Typography } from '@mui/material'
import { TaskCard } from '../components/TaskCard'
import { Nav } from '../components/Nav'
import { NewTask } from '../components/NewTask'
import { TaskModel } from '../models/task'
import useSWR from 'swr'

export default function Home() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	const { data } = useSWR('/api/tasks', fetcher)

	return (
		<div>
			<div
				style={{backgroundColor: 'green', 
					padding:'10px', 
					height:'10vh'
				}}
			>
				<Nav
				//style={{backgroundColor:'green', height:'10vh'}}
				/>
			</div>
			<Stack
				direction='column'
				justifyContent='flex-start'
				alignItems='center'
				spacing={1}
				style={{backgroundColor: 'grey', 
					minHeight:'85vh'
				}}
			>
				<Stack
					direction='row'
					alignItems='center'
					spacing={100}
					style={{paddingTop:'10px'}}
				>
					<Typography
						variant='h4'
					>
						To Do
					</Typography>
					<NewTask />
				</Stack>
				<Grid
					container
					item
					xs={10}
					spacing={1}
					rowSpacing={2}
					style={{backgroundColor: 'red',
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
			<div
				style={{backgroundColor:'lightblue', 
					display:'flex', 
					alignItems:'center',
					justifyContent:'center',
					height:'5vh'
				}}
			>
				<Typography
					variant='body2'
				>
					Made by wilhus @ <a href='https://github.com/wilhus' target='_blank'>GitHub</a>
				</Typography>
			</div>
		</div>
	)
}
