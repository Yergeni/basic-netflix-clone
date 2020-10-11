import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios.helpers";
import requests, {
	BackDropBaseUrlOriginal,
} from "../../utils/tmdb-requests.helpers";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';

import "./banner.styles.css";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const Banner = () => {
	const classes = useStyles();
	const [movieForBanner, setMovieForBanner] = useState({});

	useEffect(() => {
		const fetchMovieForBanner = async () => {
			try {
				const response = await axiosInstance.get(requests.fetchTrending);
				// console.log(Math.floor(Math.random() * response.data.results.length - 1))
				// console.log(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
				setMovieForBanner(
					response.data.results[
						Math.floor(Math.random() * response.data.results.length - 1)
					]
				);
			} catch (error) {
				console.error("ERROR FETCHING IN BANNER >>> ", error);
			}
		};

		fetchMovieForBanner();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${BackDropBaseUrlOriginal}${movieForBanner?.backdrop_path})`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				{/* TITLE */}
				<h1 className="banner__title">
					{movieForBanner?.name ||
						movieForBanner?.title ||
						movieForBanner?.original_title}
				</h1>
				{/* PLAY AND MY LIST BUTTONS */}
				<div className="banner__buttons">
					<Button
                        size="large"
						variant="contained"
						color="default"
						className={classes.button}
						startIcon={<PlayArrowRoundedIcon fontSize="large" />}
					>Play</Button>
					<Button
                        size="large"
						variant="contained"
						color="default"
						className={classes.button}
						startIcon={<ViewListRoundedIcon fontSize="large" />}
					>My List</Button>
					{/* <button className="banner__button">Play</button>
					<button className="banner__button">My List</button> */}
				</div>
				{/* DESCRIPTION */}
				<div className="banner_description">
					{truncate(movieForBanner?.overview, 150)}
				</div>
			</div>
            <div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
