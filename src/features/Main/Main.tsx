import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Container, CircularProgress, Divider } from '@material-ui/core';
import React, { useEffect, useState, useCallback } from 'react'
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopTracks } from './actions';
import Pagination from '@material-ui/lab/Pagination';
import { selectData, selectPerPage, selectCurrentPage, selectFetching, selectTotalPages } from './selectors';
import { NavLink } from 'react-router-dom';

const Main = () => {
    const data = useSelector(selectData)
    const totalPages = useSelector(selectTotalPages)
    const perPage = useSelector(selectPerPage)
    const currentPage = useSelector(selectCurrentPage)
    const fetching = useSelector(selectFetching)
    const [page, setPage] = useState(currentPage)
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }, []);

    useEffect(() => {
        dispatch(fetchTopTracks(page, perPage))
    }, [dispatch, page, perPage])
    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3" className={classes.title}>
                Лучшие песни
            </Typography>
            {fetching ?
                <Container className={classes.root}>
                    <CircularProgress />
                </Container>
                :
                <>
                    {totalPages > 1 ? <Pagination className={classes.pagination} count={totalPages} color="primary" page={page} onChange={handleChange} /> : null}
                    <List className={classes.list}>
                        {data?.map((item, index) => {
                            return (
                                <React.Fragment key={`${item.name}-${index}`}>
                                    <ListItem className={classes.item} alignItems="flex-start" >
                                        {item.image[0]['#text'] ? <ListItemAvatar>
                                            <Avatar alt="avatar" src={item.image[0]['#text']} />
                                        </ListItemAvatar> : null}
                                        <ListItemText disableTypography={true} primary={item.name} />
                                        <ListItemText disableTypography={true} primary={item.artist.name} />
                                        <ListItemText disableTypography={true}>
                                            <NavLink to={`/perfomer/${item.artist.name}`}>{item.artist.url}</NavLink>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            )
                        })

                        }
                    </List>
                </>
            }
        </Container >
    )
}

export default Main
