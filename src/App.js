import React from 'react'
import BooksCard from './components/BooksCard'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from "@material-ui/styles"
import {
  CssBaseline,
  Typography,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends React.Component {
	state = {
		booksData: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appxyvvJ7pdLqLxYO/Table%201?api_key=keyKJ9xVsfuwehiME')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}

  render(){
		const {booksData} = this.state
			return (
				<ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography style={{ marginTop: 50 }}>
	  <video
		autoplay="true"
		muted="true"
		width='1110'
		height='600'
		preload='true'
		loop='true'
        controls
        style={{ backgroundColor: "black" }}
        controlsList="nodownload"
      >
        <source
          src="https://storage.googleapis.com/chakolas/Chakolas%20Pavilion.mp4"
          type="video/mp4"
        />
      </video>
				<Grid container direction='row'>
					{booksData.map(book => (
						<BooksCard {...book.fields} key={book.fields.id} />
					))}
				</Grid>
				<div align="center" justify="center" ><h4><footer>&copy; Copyright 2020 <a href="https://aks.one">https://aks.one</a></footer></h4></div>
				</Typography>
				</ThemeProvider>
			)
		}
}

export default App
