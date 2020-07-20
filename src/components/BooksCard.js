import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		margin: 20
	},
	gutterTopAndBottom: {
		margin: 20
	},
	card: {
		maxWidth: 230
	},
	media: {
		height: 300,
		width: 230
	}
}))

function BooksCard({ title, Type, of, time, Image }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container direction='row' align="center" justify="center">
			<Grid item xs={10}>
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia className={classes.media} image={Image} title='React' />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h1'>
								{title}
							</Typography>
							<Typography gutterBottom variant='h6' component='h1'>
							 {Type}
							</Typography>
							<Typography gutterBottom variant='h6' component='h1'>
								{of}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions class={{root: classes.root}}>
						<Button size='large' variant='outlined'>
							{time}
						</Button>
					</CardActions>
				</Card>
			</Grid>
			</Grid>
		</div>
	)
}

export default BooksCard
