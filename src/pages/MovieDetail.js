import React, {useState,useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';
// style
import styled from 'styled-components';

function MovieDetail() {
    
    const history = useLocation();
    const url = history.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    },[movies, url])

    console.log(movie);

    return (
        <>
            {movie && (
            
                <StyledDetails>
                    <StyledHeadline>
                            <h2>{movie.title}</h2>
                            <img src={movie.mainImg} alt="movie" />

                    </StyledHeadline>
                </StyledDetails>
            
            )}
            
        
        </>
    )};

const StyledDetails = styled.div`

`;

const StyledHeadline = styled.div`
    
`;

export default MovieDetail;
