import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios.helpers";
import {
	PosterBaseUrl154,
	PosterBaseUrl185,
	BackDropBaseUrl300,
	PosterBaseUrl500,
	PosterBaseUrl342
	// PosterBaseUrlOriginal,
} from "../../utils/tmdb-requests.helpers";

import movieTrailer from 'movie-trailer';
import ReactPlayer from "react-player/youtube";

// // MUI styles
import { makeStyles } from "@material-ui/core/styles";
// // MUI Card
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// MUI skeleton
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
// MUI Buttons
// import { Button } from "@material-ui/core";
// MUI Icons
// import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
// import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
// MUI Modal
import Modal from "@material-ui/core/Modal";

import "./row.styles.css";

// Material-UI styles
const useStyles = makeStyles((theme) => ({
	paper: {
		position: "relative",
		width: 640,
		height: 360,
		// backgroundColor: theme.palette.background.paper,
		border: "none",
		// border: "2px solid #000",
		outline: "none",
		// boxShadow: theme.shadows[5],
		// padding: theme.spacing(2, 4, 2),
	},
}));


const Row = ({ title, fetchUrl, isLargeRow }) => {
	const classes = useStyles();

	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	// Modal
	const [openTrailerModal, setOpenTrailerModal] = useState(false);
	const [modalBody, setModalBody] = useState(<></>);
	const [trailerUrl, setTrailerUrl] = useState('')

	// Material-UI Styles
	// const classes = useStyles();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get(fetchUrl);
				// console.log(response.data.results);
				setMovies(response.data.results);
				setLoading(false);
				return response;
			} catch (error) {
				console.error("ERROR fetching movies >>> ", error);
			}
		};

		fetchData();
	}, [fetchUrl]);

	const handleOpenTrailerModal = (movie) => {
		// console.log(movie)
		movieTrailer(movie.name || movie.title || movie.original_title)
			.then(url => {
				// https://www.youtube.com/watch?v=hU2DASqjvi4
				// console.log(url)
				setTrailerUrl(url);
			})
			.catch(error => {
				console.error('ERROR GETTING MOVIE TRAILER >>> ', error)
				setOpenTrailerModal(false);
			});

		setModalBody(modalBody);
		setOpenTrailerModal(true);
	};

	return (
		<>
			<div className="row">
				{/* Title */}
				<h2>{title}</h2>

				{/* Posters */}
				<div className="row__posters">
					{loading
						? Array.from(new Array(20)).map((item, index) => (
								<Box key={index} width={100} marginRight={0.5} my={5}>
									<Skeleton variant="rect" width={100} height={154} />
								</Box>
						  ))
						: movies.map((movie) => (
							<div
								key={movie.id}
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								// onClick={() => setOpenTrailerModal(true)}
								onClick={() => handleOpenTrailerModal(movie)}
							>
								<img
									// key={movie.id}
									// className={`row__poster ${isLargeRow && "row__posterLarge"}`} // change the style for large posters
									src={`${
										isLargeRow
											? PosterBaseUrl154 + movie.poster_path
											: PosterBaseUrl185 + movie.poster_path
									}`}
									alt={movie.name}
								/>
								{/* <div className="row_posterButtons">
										<button
											className="row_posterButton"
										><PlayArrowRoundedIcon fontSize="large" /></button>
									</div> */}
												{/* <div className="row_posterButtons">
										<Button
											size="large"
											variant="contained"
											color="default"
											className={classes.button}
											startIcon={<PlayArrowRoundedIcon fontSize="small" />}
										/>
									</div> */}
							</div>
						))}
				</div>
			</div>
			<Modal
				open={openTrailerModal}
				onClose={() => setOpenTrailerModal(false)}
			>
				<div className="row__trailerModal">
					<ReactPlayer url={trailerUrl} playing={true} controls={true} width='100%' height='100%' /> 
				</div>
			</Modal>
		</>
	);
};

export default Row;

// {/* <Card key={movie.id} className={classes.root}>
// 	<CardActionArea>
// 		<CardMedia
// 			className={classes.media}
// 			image={`${PosterBaseUrl154}${
// 				isLargeRow ? movie.poster_path : movie.backdrop_path
// 			}`}
// 			title={movie.name}
// 		/>
// 	</CardActionArea>
// 	<CardActionArea>
// 		<CardContent>
// 			<img
// 				className="row__poster"
// 				src={`${PosterBaseUrl154}${movie.poster_path}`}
// 				alt={movie.name}
// 			/>
// 		</CardContent>
// 	</CardActionArea>
// 	<img
// 		className="row__poster"
// 		src={`${PosterBaseUrl154}${movie.poster_path}`}
// 		alt={movie.name}
// 	/>
// </Card> */}
